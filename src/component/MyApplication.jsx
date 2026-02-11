import React from 'react'
import useAuth from '../Hooks/useAuth/useAuth';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyApplication = () => {
    let {user} = useAuth()
    const queryClient = useQueryClient()

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:3000/help-from-wws/${user?.email}`);
        return response.data;
      };

    const { data: myapp = [], isLoading: myappLoading } = useQuery({
        queryKey: [user?.email, "myapp"],
        queryFn: fetchUsers,
    });

    console.log(myapp,user);

    const handleDelete = async (applicationId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/help-from-wws/${applicationId}`);
                
                // Invalidate and refetch the query to update the UI
                queryClient.invalidateQueries([user?.email, "myapp"]);
                
                Swal.fire(
                    'Deleted!',
                    'Your application has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Delete error:', error);
                Swal.fire(
                    'Error!',
                    'Failed to delete the application. Please try again.',
                    'error'
                );
            }
        }
    };

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


    if (myappLoading) {
  return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">My Applications</h1>
                <p className="text-blue-100">Track your study abroad applications and their status</p>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">Application History</h2>
                    <p className="text-sm text-gray-600 mt-1">Total Applications: {myapp.length}</p>
                </div>

                {myapp.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Found</h3>
                        <p className="text-gray-500">You haven't submitted any applications yet.</p>
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {myapp.map((application, index) => (
                                    <tr key={application._id || index} className="hover:bg-gray-50">
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            {(() => {
                                                const isDeletable = application.status === 'pending'
                                                return (
                                                    <button
                                                        onClick={() => isDeletable && handleDelete(application._id)}
                                                        disabled={!isDeletable}
                                                        className={`${isDeletable ? 'text-red-600 hover:text-red-900' : 'text-gray-400 cursor-not-allowed'} mr-3`}
                                                    >
                                                        Delete
                                                    </button>
                                                )
                                            })()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Mobile Cards */}
                        <div className="md:hidden">
                            {myapp.map((application, index) => (
                                <div key={application._id || index} className="border-b border-gray-200 p-4 last:border-b-0">
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
                                    
                                    <div className="flex space-x-3 mt-4">
                                        {(() => {
                                            const isDeletable = application.status === 'pending'
                                            return (
                                                <button
                                                    onClick={() => isDeletable && handleDelete(application._id)}
                                                    disabled={!isDeletable}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${isDeletable ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                                                >
                                                    Delete
                                                </button>
                                            )
                                        })()}
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
                    <div className="text-2xl font-bold text-blue-600">{myapp.length}</div>
                    <div className="text-sm text-gray-500">Total</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-yellow-600">
                        {myapp.filter(app => app.status === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-500">Pending</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-green-600">
                        {myapp.filter(app => app.status === 'approved').length}
                    </div>
                    <div className="text-sm text-gray-500">Approved</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">
                        {myapp.filter(app => app.status === 'processing').length}
                    </div>
                    <div className="text-sm text-gray-500">Processing</div>
                </div>
            </div>
        </div>
    );
};

export default MyApplication