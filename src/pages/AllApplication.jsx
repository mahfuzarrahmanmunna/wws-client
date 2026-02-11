import React, { useState } from 'react'
import useAuth from '../Hooks/useAuth/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AllApplication = () => {
    let {user} = useAuth()
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    const fetchAllApplications = async () => {
        const response = await axios.get(`http://localhost:3000/help-from-wws`);
        return response.data;
      };

    const { data: allApplications = [], isLoading: applicationsLoading } = useQuery({
        queryKey: ["allApplications"],
        queryFn: fetchAllApplications,
    });

    console.log(allApplications, user);

    // Handle row click to set search term to full name
    const handleRowClick = (application) => {
        setSearchTerm(`${application.firstName} ${application.lastName}`)
    }

    // Filter applications based on search term and status
    const filteredApps = allApplications.filter(app => {
        const matchesSearch = 
            app.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.destination?.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesStatus = statusFilter === 'all' || app.status === statusFilter
        
        return matchesSearch && matchesStatus
    })

    const getStatusBadge = (status) => {
        const statusConfig = {
            pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', text: 'Pending' },
            approved: { color: 'bg-green-100 text-green-800 border-green-200', text: 'Approved' },
            rejected: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Rejected' },
            processing: { color: 'bg-blue-100 text-blue-800 border-blue-200', text: 'Processing' }
        };
        
        const config = statusConfig[status] || statusConfig.pending;
        return (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.color}`}>
                {config.text}
            </span>
        );
    };

    if (applicationsLoading) {
  return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4 md:p-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">All Applications</h1>
                <p className="text-blue-100">View all study abroad applications and their status</p>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search Applications</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                                placeholder="Search by full name, email, or destination..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-48">
                        <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Filter by Status</label>
                        <select
                            id="status-filter"
                            className="block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Application History</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Showing {filteredApps.length} of {allApplications.length} applications</p>
                </div>

                {filteredApps.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Found</h3>
                        <p className="text-gray-500">No applications match your search criteria.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        {/* Desktop Table */}
                        <table className="hidden md:table w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Study Level</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredApps.map((application, index) => (
                                    <tr 
                                        key={application._id || index} 
                                        className="hover:bg-gray-50 cursor-pointer"
                                        onClick={() => handleRowClick(application)}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                            #{application._id?.slice(-8) || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {application.firstName} {application.lastName}
                                            </div>
                                            <div className="text-sm text-gray-500">{application.email}</div>
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
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(application.status)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile Cards */}
                        <div className="md:hidden">
                            {filteredApps.map((application, index) => (
                                <div 
                                    key={application._id || index} 
                                    className="border-b border-gray-200 p-4 last:border-b-0 cursor-pointer"
                                    onClick={() => handleRowClick(application)}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {application.firstName} {application.lastName}
                                            </h3>
                                            <p className="text-xs text-gray-500">#{application._id?.slice(-8) || 'N/A'}</p>
                                        </div>
                                        {getStatusBadge(application.status)}
                                    </div>
                                    
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Destination:</span>
                                            <span className="text-gray-900">{application.destination}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Study Level:</span>
                                            <span className="text-gray-900">{application.studyLevel}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Start Date:</span>
                                            <span className="text-gray-900">{application.startWhen}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Email:</span>
                                            <span className="text-gray-900 text-xs">{application.email}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">{allApplications.length}</div>
                    <div className="text-sm text-gray-500">Total</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-yellow-600">
                        {allApplications.filter(app => app.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-500">Pending</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">
                        {allApplications.filter(app => app.status === 'approved').length}
                    </div>
                    <div className="text-sm text-gray-500">Approved</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">
                        {allApplications.filter(app => app.status === 'processing').length}
                    </div>
                    <div className="text-sm text-gray-500">Processing</div>
                </div>
            </div>
        </div>
    );
};

export default AllApplication