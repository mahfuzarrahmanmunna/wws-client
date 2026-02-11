import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import useAdmin from '../Hooks/role/useAdmin'
import useAuth from '../Hooks/useAuth/useAuth'

const ActivityLog = () => {

    let { user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [isAdmin, adminLoading] = useAdmin()

  const fetchUsers = async () => {
    const response = await axios.get(`http://localhost:3000/users`)
    return response.data.data
  }

  

  const { data: allUsers = [], isLoading: usersLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: fetchUsers
  })

  console.log(allUsers);
  
  

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.patch(`http://localhost:3000/users/${userId}`, { role: newRole })
      queryClient.invalidateQueries(['allUsers'])
      Swal.fire({
        icon: 'success',
        title: 'Role Updated',
        text: `User role changed to ${newRole}`,
        timer: 1200,
        showConfirmButton: false
      })
    } catch (error) {
      console.error('Role update error:', error)
      Swal.fire('Error!', 'Failed to update role.', 'error')
    }
  }

  const handleDelete = async (userId) => {
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
        await axios.delete(`http://localhost:3000/users/${userId}`)
        queryClient.invalidateQueries(['allUsers'])
        Swal.fire('Deleted!', 'User has been deleted.', 'success')
      } catch (error) {
        console.error('Delete error:', error)
        Swal.fire('Error!', 'Failed to delete the user.', 'error')
      }
    }
  }

  // Handle row click to set search term to full name
  const handleRowClick = (user) => {
    setSearchTerm(`${user.firstName} ${user.lastName}`)
  }

  // Filter users based on search term and role
  const filteredUsers = allUsers.filter(user => {
    const matchesSearch = 
      user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.mobile?.includes(searchTerm)
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter
    
    return matchesSearch && matchesRole
  })

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (usersLoading || adminLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  // Check if user is admin
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Access Denied</h3>
          <p className="text-gray-500">You don't have permission to view this page.</p>
        </div>
      </div>
    )
  }
    
  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">User Activity Log</h1>
          <p className="text-gray-600 text-sm mt-1">View, manage user roles, and track activity</p>
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
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Users</label>
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
                placeholder="Search by name, email, or mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
            <select
              id="role-filter"
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="ambassador">Ambassador</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Users</h2>
          <p className="text-sm text-gray-600 mt-1">Showing {filteredUsers.length} of {allUsers.length} users</p>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Users Found</h3>
            <p className="text-gray-500">No users match your search criteria.</p>
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered</th> */}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((users) => (
                    <tr 
                      key={users._id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleRowClick(users)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        #{users._id?.slice(-6) || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img 
                              className="h-10 w-10 rounded-full object-cover" 
                              src={users.photoURL || 'https://via.placeholder.com/40'} 
                              alt={users.firstName}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {users.firstName} {users.lastName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {users.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {users.dialCode} {users.mobile}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={users.role || 'user'}
                          onChange={(e) => handleRoleChange(users._id, e.target.value)}
                          className={`w-full text-sm border rounded-lg px-3 py-2 ${
                            users.role === 'admin' ? 'border-red-400 text-red-700' :
                            users.role === 'ambassador' ? 'border-blue-400 text-blue-700' :
                            'border-gray-400 text-gray-700'
                          }`}
                        >
                          <option value="user">User</option>
                          <option value="ambassador">Ambassador</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                       {formatDate(user.metadata?.creationTime || user.createdAt || user.registeredAt)}
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => handleDelete(users._id)}
                          className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tablet Table */}
            <div className="hidden md:block lg:hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                      {/* <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registered</th> */}
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr 
                        key={user._id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleRowClick(user)}
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8">
                              <img 
                                className="h-8 w-8 rounded-full object-cover" 
                                src={user.photoURL || 'https://via.placeholder.com/32'} 
                                alt={user.firstName}
                              />
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">
                                {user.firstName} {user.lastName}
                              </div>
                              <div className="text-xs text-gray-500">
                                #{user._id?.slice(-6) || 'N/A'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-900">{user.email}</div>
                          <div className="text-xs text-gray-500">{user.dialCode} {user.mobile}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={user.role || 'user'}
                            onChange={(e) => handleRoleChange(user._id, e.target.value)}
                            className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="user">👤 User</option>
                            <option value="ambassador">🎯 Ambassador</option>
                            <option value="admin">👑 Admin</option>
                          </select>
                        </td>
                        {/* <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(user.metadata?.creationTime || user.createdAt || user.registeredAt)}
                        </td> */}
                        <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg text-xs font-medium"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <div 
                  key={user._id} 
                  className="p-4 cursor-pointer"
                  onClick={() => handleRowClick(user)}
                >
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img 
                        className="h-10 w-10 rounded-full object-cover" 
                        src={user.photoURL || 'https://via.placeholder.com/40'} 
                        alt={user.firstName}
                      />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-base font-medium text-gray-900">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-xs text-gray-500">#{user._id?.slice(-8) || 'N/A'}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-20 flex-shrink-0">Email:</span>
                      <span className="text-gray-900 truncate">{user.email}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-20 flex-shrink-0">Mobile:</span>
                      <span className="text-gray-900">{user.dialCode} {user.mobile}</span>
                    </div>
                    {/* <div className="flex">
                      <span className="text-gray-500 w-20 flex-shrink-0">Registered:</span>
                      <span className="text-gray-900">{formatDate(user.metadata?.creationTime || user.createdAt || user.registeredAt)}</span>
                    </div> */}
                  </div>
                  
                  <div className="mt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={user.role || 'user'}
                      onChange={(e) => handleRoleChange(user._id, e.target.value)}
                      className="flex-1 text-sm border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="user">User</option>
                      <option value="ambassador">Ambassador</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{allUsers.length}</div>
          <div className="text-sm text-gray-500">Total Users</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {allUsers.filter(user => user.role === 'user').length}
          </div>
          <div className="text-sm text-gray-500">Users</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">
            {allUsers.filter(user => user.role === 'ambassador').length}
          </div>
          <div className="text-sm text-gray-500">Ambassadors</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-red-600">
            {allUsers.filter(user => user.role === 'admin').length}
          </div>
          <div className="text-sm text-gray-500">Admins</div>
        </div>
      </div>
    </div>
  )
}

export default ActivityLog