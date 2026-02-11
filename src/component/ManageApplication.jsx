import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const ManageApplication = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3000/help-from-wws`)
    return response.data
  }

  const { data: allApp = [], isLoading: allAppLoading } = useQuery({
    queryKey: ['allApp'],
    queryFn: fetchUsers
  })

  const handleDelete = async (applicationId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    })

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/help-from-wws/${applicationId}`)
        queryClient.invalidateQueries(['allApp'])
        Swal.fire('Deleted!', 'Application has been deleted.', 'success')
      } catch (error) {
        console.error('Delete error:', error)
        Swal.fire('Error!', 'Failed to delete the application.', 'error')
      }
    }
  }

  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/help-from-wws/${applicationId}`, { status: newStatus })
      // queryClient.invalidateQueries(['allApp'])
      Swal.fire({
        icon: 'success',
        title: 'Status Updated',
        text: `Application status changed to ${newStatus}`,
        timer: 1200,
        showConfirmButton: false
      })
    } catch (error) {
      console.error('Status update error:', error)
      Swal.fire('Error!', 'Failed to update status.', 'error')
    }
  }

  // Handle row click to set search term to full name
  const handleRowClick = (application) => {
    setSearchTerm(`${application.firstName} ${application.lastName}`)
  }

  // Filter applications based on search term and status
  const filteredApps = allApp.filter(app => {
    const matchesSearch =
      (app.firstName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.lastName || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (app.destination || "").toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'all' || (app.status || 'pending') === statusFilter

    return matchesSearch && matchesStatus
  })

  if (allAppLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 md:p-6 min-w-[200px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Manage Applications</h1>
          <p className="text-gray-600 text-sm mt-1">View, update status, and delete applications</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 self-start sm:self-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Applications</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by full name, email, or destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
            <select
              id="status-filter"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Applications</h2>
          <p className="text-sm text-gray-600 mt-1">Showing {filteredApps.length} of {allApp.length} applications</p>
        </div>

        {filteredApps.length === 0 ? (
          <div className="p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Found</h3>
            <p className="text-gray-500">No applications match your search criteria.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Study Level</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApps.map((application) => {
                    const safeStatus = application.status || "pending"
                    return (
                      <tr
                        key={application._id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleRowClick(application)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                          #{application._id?.slice(-6) || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {application.firstName} {application.lastName}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {application.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {application.destination}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {application.studyLevel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {application.startWhen}
                        </td>
                        <td
                          className="px-6 py-4 flex flex-col"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Status text with color */}
                          <span
                            className={`
        font-medium mb-2
        ${safeStatus === "pending" ? "text-yellow-600" : ""}
        ${safeStatus === "processing" ? "text-blue-600" : ""}
        ${safeStatus === "approved" ? "text-green-600" : ""}
        ${safeStatus === "rejected" ? "text-red-800" : ""}
      `}
                          >
                            {safeStatus.charAt(0).toUpperCase() + safeStatus.slice(1)}
                          </span>

                          {/* Dropdown */}
                          <select
                            defaultValue={safeStatus}
                            onChange={(e) => handleStatusChange(application._id, e.target.value)}
                            className={`
        w-full text-sm border rounded-lg px-3 py-2
        ${safeStatus === "pending" ? "border-yellow-400 text-yellow-700" : ""}
        ${safeStatus === "processing" ? "border-blue-400 text-blue-700" : ""}
        ${safeStatus === "approved" ? "border-green-400 text-green-700" : ""}
        ${safeStatus === "rejected" ? "border-red-1200 text-red-700" : ""}
      `}
                          >
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleDelete(application._id)}
                            className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Tablet Table */}
            <div className="hidden md:block lg:hidden overflow-x-auto ">
              <div className="min-w-[800px]">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApps.map((application) => {
                      const safeStatus = application.status || "pending"
                      return (
                        <tr
                          key={application._id}
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleRowClick(application)}
                        >
                          <td className="px-4 py-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {application.firstName} {application.lastName}
                              </div>
                              <div className="text-xs text-gray-500">
                                #{application._id?.slice(-6) || 'N/A'}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm text-gray-900">{application.destination}</div>
                            <div className="text-xs text-gray-500">{application.studyLevel}</div>
                            <div className="text-xs text-gray-500">{application.startWhen}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={safeStatus}
                              onChange={(e) => handleStatusChange(application._id, e.target.value)}
                              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: 'right 8px center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '16px'
                              }}
                            >
                              <option value="pending">🟡 Pending</option>
                              <option value="processing">🔵 Processing</option>
                              <option value="approved">🟢 Approved</option>
                              <option value="rejected">🔴 Rejected</option>
                            </select>
                          </td>
                          <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleDelete(application._id)}
                              className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg text-xs font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>


            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredApps.map((application) => {
                const safeStatus = application.status || "pending"
                return (
                  <div
                    key={application._id}
                    className="p-4 cursor-pointer"
                    onClick={() => handleRowClick(application)}
                  >
                    <div className="mb-3">
                      <h3 className="text-base font-medium text-gray-900">
                        {application.firstName} {application.lastName}
                      </h3>
                      <p className="text-xs text-gray-500">#{application._id?.slice(-8) || 'N/A'}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="text-gray-500 w-24 flex-shrink-0">Email:</span>
                        <span className="text-gray-900 truncate">{application.email}</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24 flex-shrink-0">Destination:</span>
                        <span className="text-gray-900">{application.destination}</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24 flex-shrink-0">Study Level:</span>
                        <span className="text-gray-900">{application.studyLevel}</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 w-24 flex-shrink-0">Start Date:</span>
                        <span className="text-gray-900">{application.startWhen}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                      <select
                        defaultValue={safeStatus}
                        onChange={(e) => handleStatusChange(application._id, e.target.value)}
                        className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-2"
                      >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                      <button
                        onClick={() => handleDelete(application._id)}
                        className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{allApp.length}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">
            {allApp.filter(app => (app.status || "pending") === 'pending').length}
          </div>
          <div className="text-sm text-gray-500">Pending</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {allApp.filter(app => (app.status || "pending") === 'approved').length}
          </div>
          <div className="text-sm text-gray-500">Approved</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">
            {allApp.filter(app => (app.status || "pending") === 'processing').length}
          </div>
          <div className="text-sm text-gray-500">Processing</div>
        </div>
      </div>
    </div>
  )
}

export default ManageApplication
