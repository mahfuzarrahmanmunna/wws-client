import React, { useEffect, useMemo, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Swal from 'sweetalert2'
import { createPortal } from 'react-dom'

const ManageUni = () => {
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editData, setEditData] = useState(null)
  const [viewMode, setViewMode] = useState('card') // "card" | "table"
  const [search, setSearch] = useState('')

  const fetchUniversities = async () => {
    const res = await axios.get('http://localhost:3000/api/search/universities')
    return res.data
  }

  const { data, isLoading } = useQuery({ queryKey: ['alluniversities'], queryFn: fetchUniversities })

  const allUniversities = useMemo(() => data?.data ?? [], [data])

  // Filter universities by search
  const filteredUniversities = useMemo(() => {
    const s = search.toLowerCase()
    return allUniversities.filter(uni =>
      uni.universityName?.toLowerCase().includes(s) ||
      uni.destination?.toLowerCase().includes(s) ||
      uni.established?.toString().includes(s) ||
      uni.ranking?.toString().includes(s) ||
      uni.description?.toLowerCase().includes(s) ||
      uni.tuitionFee?.toLowerCase().includes(s) ||
      uni.campusLocation?.toLowerCase().includes(s)
    )
  }, [allUniversities, search])

  const handleOpenUpdate = (uni) => {
    setEditData({ ...uni })
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
        <div className="bg-white dark:bg-gray-900 dark:text-gray-100 w-full max-w-3xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
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
      if (typeof payload.coursesOffered === 'string') {
        payload.coursesOffered = payload.coursesOffered
          .split(',')
          .map(s => s.trim())
          .filter(Boolean)
      }
      await axios.put(`http://localhost:3000/api/university/${id}`, payload)
      await queryClient.invalidateQueries({ queryKey: ['alluniversities'] })
      handleCloseModal()
      Swal.fire('Updated', 'University updated successfully', 'success')
    } catch (err) {
      console.error(err)
      Swal.fire('Error', 'Update failed', 'error')
    }
  }

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'This will permanently delete the university.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      })
      if (!result.isConfirmed) return
      await axios.delete(`http://localhost:3000/api/university/${id}`)
      await queryClient.invalidateQueries({ queryKey: ['alluniversities'] })
      Swal.fire('Deleted', 'University has been deleted.', 'success')
    } catch (err) {
      console.error(err)
      Swal.fire('Error', 'Delete failed', 'error')
    }
  }

  if (isLoading) {
    return <div className="p-4">Loading universities...</div>
  }

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h2 className="text-xl font-semibold">Manage Universities</h2>
        <input
          type="text"
          placeholder="Search universities..."
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
          {filteredUniversities.map((uni) => (
          <div key={uni._id} className="border rounded-lg shadow-sm p-4 bg-white flex flex-col">
            <div className="mb-2">
              <p className="text-sm text-gray-600"><span className="font-medium">University:</span> {uni.universityName}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Destination:</span> {uni.destination}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Established:</span> {uni.established}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Ranking:</span> {uni.ranking}</p>
            </div>
            <div className="mt-auto flex items-center gap-2">
              <button onClick={() => handleOpenUpdate(uni)} className="px-3 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
              <button onClick={() => handleDelete(uni._id)} className="px-3 py-1.5 text-sm rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
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
                <th className="p-2">University Name</th>
                <th className="p-2">Destination</th>
                <th className="p-2">Established</th>
                <th className="p-2">Ranking</th>
                <th className="p-2">Tuition Fee</th>
                <th className="p-2">Campus Location</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.map((uni) => (
                <tr key={uni._id} className="border-t">
                  <td className="p-2">{uni.universityName || '-'}</td>
                  <td className="p-2">{uni.destination || '-'}</td>
                  <td className="p-2">{uni.established || '-'}</td>
                  <td className="p-2">{uni.ranking || '-'}</td>
                  <td className="p-2">{uni.tuitionFee || '-'}</td>
                  <td className="p-2">{uni.campusLocation || '-'}</td>
                  <td className="p-2 text-center space-x-2 lg:flex gap-2">
                    <button onClick={() => handleOpenUpdate(uni)} className="px-2 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
                    <button onClick={() => handleDelete(uni._id)} className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && editData && (
        <Modal onClose={handleCloseModal}>
          <div className="flex items-center justify-between mb-4 pb-3 border-b">
            <h3 className="text-xl font-bold text-gray-800">Update University</h3>
            <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 text-2xl font-light leading-none">&times;</button>
          </div>
          <form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col text-sm">
              <span className="mb-1">University Name</span>
              <input name="universityName" defaultValue={editData.universityName || ''} className="border rounded px-2 py-2" placeholder="e.g., University College London" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Destination</span>
              <select name="destination" defaultValue={editData.destination || ''} className="border rounded px-2 py-2">
                <option value="">Select destination</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Ireland</option>
                <option>New Zealand</option>
              </select>
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Established Year</span>
              <input name="established" type="number" defaultValue={editData.established || ''} className="border rounded px-2 py-2" placeholder="e.g., 1826" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Ranking</span>
              <input name="ranking" type="number" defaultValue={editData.ranking || ''} className="border rounded px-2 py-2" placeholder="e.g., 8" />
            </label>
            <label className="flex flex-col text-sm sm:col-span-2">
              <span className="mb-1">Description</span>
              <textarea name="description" defaultValue={editData.description || ''} className="border rounded px-2 py-2 h-24" />
            </label>
            <label className="flex flex-col text-sm sm:col-span-2">
              <span className="mb-1">Courses Offered (comma separated)</span>
              <input name="coursesOffered" defaultValue={Array.isArray(editData.coursesOffered) ? editData.coursesOffered.join(', ') : (editData.coursesOffered || '')} className="border rounded px-2 py-2" placeholder="e.g., Law, Architecture, Computer Science" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Tuition Fee</span>
              <input name="tuitionFee" defaultValue={editData.tuitionFee || ''} className="border rounded px-2 py-2" placeholder="e.g., £18,000 - £38,000 per year" />
            </label>
            <label className="flex flex-col text-sm sm:col-span-2">
              <span className="mb-1">Requirements</span>
              <textarea name="requirements" defaultValue={editData.requirements || ''} className="border rounded px-2 py-2 h-24" placeholder="e.g., English proficiency, personal statement, recommendation letters" />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Application Link (optional)</span>
              <input name="applicationLink" type="url" defaultValue={editData.applicationLink || ''} className="border rounded px-2 py-2" placeholder="https://..." />
            </label>
            <label className="flex flex-col text-sm">
              <span className="mb-1">Contact Email</span>
              <input name="contactEmail" type="email" defaultValue={editData.contactEmail || ''} className="border rounded px-2 py-2" placeholder="e.g., admissions@ucl.ac.uk" />
            </label>
            <label className="flex flex-col text-sm sm:col-span-2">
              <span className="mb-1">Campus Location</span>
              <input name="campusLocation" defaultValue={editData.campusLocation || ''} className="border rounded px-2 py-2" placeholder="e.g., London, UK" />
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

export default ManageUni