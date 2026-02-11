import React, { useEffect, useMemo, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createPortal } from 'react-dom'

const ManageCourses = () => {
    const queryClient = useQueryClient()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editData, setEditData] = useState(null)
    const [viewMode, setViewMode] = useState('card') // "card" | "table"
    const [search, setSearch] = useState('')

    // Fetch courses
    const fetchCourses = async () => {
        const res = await axios.get('http://localhost:3000/api/course')
        return res.data
    }

    const { data, isLoading } = useQuery({ queryKey: ['allcourses'], queryFn: fetchCourses })
    const allCourses = useMemo(() => data ?? [], [data])

    // Filter courses by search
    const filteredCourses = useMemo(() => {
        const s = search.toLowerCase()
        return allCourses.filter(c =>
            c.subject?.toLowerCase().includes(s) ||
            c.studyLevel?.toLowerCase().includes(s) ||
            c.destination?.toLowerCase().includes(s) ||
            c.provider?.toLowerCase().includes(s)
        )
    }, [allCourses, search])

    const handleOpenUpdate = (course) => {
        setEditData({ ...course })
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

    const Modal = ({ children, onClose }) => createPortal(
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 p-4" onClick={onClose}>
            <div
                className="bg-white dark:bg-gray-900 dark:text-gray-100 w-full max-w-5xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        document.body
    )

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const id = editData?._id
            const formData = new FormData(e.currentTarget)
            const payload = Object.fromEntries(formData.entries())
            await axios.put(`http://localhost:3000/api/course/${id}`, payload)
            await queryClient.invalidateQueries({ queryKey: ['allcourses'] })
            Swal.fire('Updated', 'Course updated successfully', 'success')
            handleCloseModal()
        } catch (err) {
            console.error(err)
            Swal.fire('Error', 'Update failed', 'error')
        }
    }

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'This will permanently delete the course.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!'
            })
            if (!result.isConfirmed) return
            await axios.delete(`http://localhost:3000/api/course/${id}`)
            await queryClient.invalidateQueries({ queryKey: ['allcourses'] })
            Swal.fire('Deleted', 'Course deleted successfully.', 'success')
        } catch (err) {
            console.error(err)
            Swal.fire('Error', 'Delete failed', 'error')
        }
    }

    if (isLoading) return <div className="p-4">Loading courses...</div>

    return (
        <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
                <h2 className="text-xl font-semibold">Manage Courses</h2>
                <input
                    type="text"
                    placeholder="Search courses..."
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
                    {filteredCourses.map(c => (
                        <div key={c._id} className="border rounded-lg shadow-sm p-4 bg-white flex flex-col">
                            <div className="mb-2">
                                <p><span className="font-medium">Subject:</span> {c.subject || '-'}</p>
                                <p><span className="font-medium">Level:</span> {c.studyLevel || '-'}</p>
                                <p><span className="font-medium">Destination:</span> {c.destination || '-'}</p>
                                <p><span className="font-medium">Provider:</span> {c.provider || '-'}</p>
                                <p><span className="font-medium">Duration:</span> {c.duration || '-'}</p>
                                <p><span className="font-medium">Tuition Fee:</span> {c.tuitionFee || '-'}</p>
                            </div>
                            <div className="mt-auto flex items-center gap-2">
                                <button onClick={() => handleOpenUpdate(c)} className="px-3 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
                                <button onClick={() => handleDelete(c._id)} className="px-3 py-1.5 text-sm rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
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
                                <th className="p-2">Subject</th>
                                <th className="p-2">Level</th>
                                <th className="p-2">Destination</th>
                                <th className="p-2">Provider</th>
                                <th className="p-2">Duration</th>
                                <th className="p-2">Tuition Fee</th>
                                <th className="p-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map(c => (
                                <tr key={c._id} className="border-t">
                                    <td className="p-2">{c.subject || '-'}</td>
                                    <td className="p-2">{c.studyLevel || '-'}</td>
                                    <td className="p-2">{c.destination || '-'}</td>
                                    <td className="p-2">{c.provider || '-'}</td>
                                    <td className="p-2">{c.duration || '-'}</td>
                                    <td className="p-2">{c.tuitionFee || '-'}</td>
                                    <td className="p-2 text-center space-x-2 lg:flex gap-2">
                                        <button onClick={() => handleOpenUpdate(c)} className="px-2 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
                                        <button onClick={() => handleDelete(c._id)} className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
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
                    <h3 className="text-xl font-bold mb-4">Update Course</h3>
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {['subject', 'studyLevel', 'destination', 'duration', 'tuitionFee', 'provider', 'contactEmail'].map(key => (
                            <label key={key} className="flex flex-col text-sm">
                                <span className="mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                <input
                                    name={key}
                                    type={key === 'contactEmail' ? 'email' : 'text'}
                                    defaultValue={editData[key] || ''}
                                    className="border rounded px-2 py-2"
                                />
                            </label>
                        ))}
                        {['description', 'requirements', 'benefits', 'applicationLink'].map(key => (
                            <label key={key} className="flex flex-col text-sm sm:col-span-2">
                                <span className="mb-1">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                <textarea
                                    name={key}
                                    defaultValue={editData[key] || ''}
                                    className="border rounded px-2 py-2 h-24"
                                />
                            </label>
                        ))}
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

export default ManageCourses
