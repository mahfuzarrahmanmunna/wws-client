import React, { useEffect, useMemo, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createPortal } from 'react-dom'

const ManageEvents = () => {
    const queryClient = useQueryClient()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editData, setEditData] = useState(null)
    const [viewMode, setViewMode] = useState('card') // "card" | "table"
    const [search, setSearch] = useState('') // <-- search state

    const fetchEvents = async () => {
        const res = await axios.get('http://localhost:3000/api/events')
        return res.data
    }

    const { data, isLoading } = useQuery({ queryKey: ['allevents'], queryFn: fetchEvents })
    const allEvents = useMemo(() => data ?? [], [data])

    const filteredEvents = useMemo(() => {
        const searchLower = search.toLowerCase()
        return allEvents.filter(ev =>
            ev.city?.toLowerCase().includes(searchLower) ||
            ev.month?.toLowerCase().includes(searchLower) ||
            ev.destination?.toLowerCase().includes(searchLower) ||
            ev.programType?.toLowerCase().includes(searchLower)
        )
    }, [allEvents, search])

    const handleOpenUpdate = (event) => {
        setEditData({ ...event })
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setEditData(null)
    }

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isModalOpen])

    const Modal = ({ children, onClose }) => {
        return createPortal(
            <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 p-4" onClick={onClose}>
                <div
                    className="bg-white dark:bg-gray-900 dark:text-gray-100 w-full max-w-4xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>,
            document.body
        )
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const id = editData?._id
            const formData = new FormData(e.currentTarget)
            const payload = Object.fromEntries(formData.entries())
            await axios.put(`http://localhost:3000/api/event/${id}`, payload)
            await queryClient.invalidateQueries({ queryKey: ['allevents'] })
            handleCloseModal()
            Swal.fire('Updated', 'Event updated successfully', 'success')
        } catch (err) {
            console.error(err)
            Swal.fire('Error', 'Update failed', 'error')
        }
    }

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'This will permanently delete the event.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            })
            if (!result.isConfirmed) return
            await axios.delete(`http://localhost:3000/api/event/${id}`)
            await queryClient.invalidateQueries({ queryKey: ['allevents'] })
            Swal.fire('Deleted', 'Event has been deleted.', 'success')
        } catch (err) {
            console.error(err)
            Swal.fire('Error', 'Delete failed', 'error')
        }
    }

    if (isLoading) return <div className="p-4">Loading events...</div>

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
                <h2 className="text-xl font-semibold">Manage Events</h2>
                <input
                    type="text"
                    placeholder="Search by city, month, destination, program..."
                    className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="space-x-2">
                    <button
                        className={`px-3 py-1.5 text-sm rounded ${viewMode === 'card' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setViewMode('card')}
                    >
                        Card View
                    </button>
                    <button
                        className={`px-3 py-1.5 text-sm rounded ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setViewMode('table')}
                    >
                        Table View
                    </button>
                </div>
            </div>

            {/* ==== CARD VIEW ==== */}
            {viewMode === 'card' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredEvents.map((ev) => (
                        <div key={ev._id} className="border rounded-lg shadow-sm p-4 bg-white flex flex-col">
                            <div className="mb-2">
                                <p className="text-sm text-gray-600"><span className="font-medium">City:</span> {ev.city}</p>
                                <p className="text-sm text-gray-600"><span className="font-medium">Month:</span> {ev.month}</p>
                                <p className="text-sm text-gray-600"><span className="font-medium">Destination:</span> {ev.destination}</p>
                                <p className="text-sm text-gray-600"><span className="font-medium">Program:</span> {ev.programType}</p>
                                <p className="text-sm text-gray-600"><span className="font-medium">Deadline:</span> {ev.deadline}</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2">
                                <button onClick={() => handleOpenUpdate(ev)} className="px-3 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
                                <button onClick={() => handleDelete(ev._id)} className="px-3 py-1.5 text-sm rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ==== TABLE VIEW ==== */}
            {viewMode === 'table' && (
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2">City</th>
                                <th className="p-2">Month</th>
                                <th className="p-2">Destination</th>
                                <th className="p-2">Program</th>
                                <th className="p-2">Deadline</th>
                                <th className="p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEvents.map((ev) => (
                                <tr key={ev._id} className="border-t">
                                    <td className="p-2">{ev.city}</td>
                                    <td className="p-2">{ev.month}</td>
                                    <td className="p-2">{ev.destination}</td>
                                    <td className="p-2">{ev.programType}</td>
                                    <td className="p-2">{ev.deadline}</td>
                                    <td className="p-2 text-center space-x-2">
                                        <button onClick={() => handleOpenUpdate(ev)} className="px-2 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
                                        <button onClick={() => handleDelete(ev._id)} className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ==== MODAL ==== */}
            {isModalOpen && editData && (
                <Modal onClose={handleCloseModal}>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b">
                        <h3 className="text-xl font-bold text-gray-800">Update Event</h3>
                        <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
                    </div>
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries({
                            city: 'City',
                            month: 'Month',
                            destination: 'Destination',
                            programType: 'Program Type',
                            duration: 'Duration',
                            applicationLink: 'Application Link',
                            organizer: 'Organizer',
                            contactEmail: 'Contact Email'
                        }).map(([key, label]) => (
                            <label className="flex flex-col text-sm" key={key}>
                                <span className="mb-1">{label}</span>
                                <input
                                    name={key}
                                    type={key === 'contactEmail' ? 'email' : key === 'applicationLink' ? 'url' : 'text'}
                                    defaultValue={editData[key] || ''}
                                    className="border rounded px-2 py-2"
                                />
                            </label>
                        ))}

                        {['description', 'eligibility', 'benefits'].map((key) => (
                            <label className="flex flex-col text-sm sm:col-span-2" key={key}>
                                <span className="mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                <textarea
                                    name={key}
                                    defaultValue={editData[key] || ''}
                                    className="border rounded px-2 py-2 h-24"
                                />
                            </label>
                        ))}

                        <label className="flex flex-col text-sm">
                            <span className="mb-1">Deadline</span>
                            <input
                                name="deadline"
                                type="date"
                                defaultValue={editData.deadline?.split('T')[0] || ''}
                                className="border rounded px-2 py-2"
                            />
                        </label>

                        <div className="sm:col-span-2 flex justify-end gap-2 mt-2">
                            <button type="button" onClick={handleCloseModal} className="px-3 py-1.5 text-sm rounded bg-gray-100 hover:bg-gray-200">Cancel</button>
                            <button type="submit" className="px-3 py-1.5 text-sm rounded bg-green-600 text-white hover:bg-green-700">Save</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    )
}

export default ManageEvents
