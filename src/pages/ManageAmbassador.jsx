import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageAmbassador = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoutes, setSelectedRoutes] = useState({});
  const [updatingPermissions, setUpdatingPermissions] = useState({});

  const fetchAmbassadors = async () => {
		const response = await axios.get(`http://localhost:3000/user/ambassador`);
		return response.data;
	};

  const { data: ambassadors = [], isLoading: ambassadorsLoading } = useQuery({
    queryKey: ["manageAmbassador"],
    queryFn: fetchAmbassadors,
  });

  // Initialize selectedRoutes with actual permission data from server
  React.useEffect(() => {
    if (ambassadors.length > 0) {
      const initialPermissions = {};
      ambassadors.forEach(ambassador => {
        initialPermissions[ambassador._id] = {
          scholarships: ambassador.scholarships || false,
          courses: ambassador.courses || false,
          events: ambassador.events || false,
          universities: ambassador.universities || false,
           show: ambassador.show ?? false // 🔥 NEW
        };
      });
      setSelectedRoutes(initialPermissions);
    }
  }, [ambassadors]);


  const handleShowToggle = async (ambassadorId) => {
  try {
    setUpdatingPermissions(prev => ({
      ...prev,
      [`${ambassadorId}-show`]: true
    }));

    const currentValue = selectedRoutes[ambassadorId]?.show ?? true;
    const newValue = !currentValue;

    // Optimistic UI
    setSelectedRoutes(prev => ({
      ...prev,
      [ambassadorId]: {
        ...prev[ambassadorId],
        show: newValue
      }
    }));

    await axios.patch(
      `http://localhost:3000/user/ambassador/${ambassadorId}/show`,
      { show: newValue }
    );

    Swal.fire({
      icon: 'success',
      title: 'Updated',
      text: `Show status ${newValue ? 'enabled' : 'disabled'}`,
      timer: 1200,
      showConfirmButton: false
    });

    // queryClient.invalidateQueries(['manageAmbassador']);
  } catch (err) {
    // revert on error
    setSelectedRoutes(prev => ({
      ...prev,
      [ambassadorId]: {
        ...prev[ambassadorId],
        show: !prev[ambassadorId]?.show
      }
    }));

    Swal.fire({
      icon: 'error',
      title: 'Failed',
      text: 'Could not update show status'
    });
  } finally {
    setUpdatingPermissions(prev => ({
      ...prev,
      [`${ambassadorId}-show`]: false
    }));
  }
};


  const handleRouteToggle = async (ambassadorId, route) => {
    try {
      // Set loading state
      setUpdatingPermissions(prev => ({
        ...prev,
        [`${ambassadorId}-${route}`]: true
      }));

      // Update local state first for immediate UI feedback
      setSelectedRoutes(prev => ({
        ...prev,
        [ambassadorId]: {
          ...prev[ambassadorId],
          [route]: !prev[ambassadorId]?.[route]
        }
      }));

      // Prepare the permission object
      const currentPermissions = selectedRoutes[ambassadorId] || {};
      const newPermissionValue = !currentPermissions[route];
      
      const permissionUpdate = {
        [route]: newPermissionValue
      };

      // Send PATCH request to update database
      await axios.patch(`http://localhost:3000/user/ambassador/${ambassadorId}`, permissionUpdate);
      
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Permission Updated',
        text: `${route} permission ${newPermissionValue ? 'granted' : 'revoked'} successfully`,
        timer: 1500,
        showConfirmButton: false
      });

      // Refresh the data to get updated permissions from server
      // queryClient.invalidateQueries(['manageAmbassador']);
      
    } catch (error) {
      console.error('Permission update error:', error);
      
      // Revert local state on error
      setSelectedRoutes(prev => ({
        ...prev,
        [ambassadorId]: {
          ...prev[ambassadorId],
          [route]: !prev[ambassadorId]?.[route] // Revert the change
        }
      }));
      
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Failed to update permission. Please try again.',
        timer: 2000,
        showConfirmButton: false
      });
    } finally {
      // Clear loading state
      setUpdatingPermissions(prev => ({
        ...prev,
        [`${ambassadorId}-${route}`]: false
      }));
    }
  };

  const handleRouteAccess = (route) => {
    navigate(`/admin/${route}`);
  };

  // Handle row click to set search term to full name
  const handleRowClick = (ambassador) => {
    setSearchTerm(`${ambassador.firstName} ${ambassador.lastName}`);
  };

  // Filter ambassadors based on search term
  const filteredAmbassadors = ambassadors.filter(ambassador => {
    const matchesSearch = 
      ambassador.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambassador.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambassador.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ambassador.mobile.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  if (ambassadorsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }
    
  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Manage Ambassadors</h1>
          <p className="text-gray-600 text-sm mt-1">View, update status, and manage ambassadors</p>
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
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Ambassadors</label>
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
        </div>
      </div>

      {/* Ambassadors Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Ambassadors</h2>
          <p className="text-sm text-gray-600 mt-1">Showing {filteredAmbassadors.length} of {ambassadors.length} ambassadors</p>
        </div>

        {filteredAmbassadors.length === 0 ? (
          <div className="p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Ambassadors Found</h3>
            <p className="text-gray-500">No ambassadors match your search criteria.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr><th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Show</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Access Control</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAmbassadors.map((ambassador) => (
                    <tr 
                      key={ambassador._id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleRowClick(ambassador)}
                    >
                      <td
  className="px-6 py-4 whitespace-nowrap"
  onClick={(e) => e.stopPropagation()}
>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={!!selectedRoutes[ambassador._id]?.show}
      disabled={updatingPermissions[`${ambassador._id}-show`]}
      onChange={() => handleShowToggle(ambassador._id)}
    />

    {/* Track */}
    <div
      className="
        w-11 h-6 bg-gray-300 rounded-full
        peer peer-checked:bg-green-500
        peer-focus:ring-2 peer-focus:ring-green-300
        transition-all
      "
    ></div>

    {/* Thumb */}
    <div
      className="
        absolute left-1 top-1
        w-4 h-4 bg-white rounded-full
        transition-all
        peer-checked:translate-x-5
      "
    ></div>
  </label>

  {updatingPermissions[`${ambassador._id}-show`] && (
    <span className="ml-2 text-xs text-gray-400">Updating...</span>
  )}
</td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        #{ambassador._id?.slice(-6) || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {ambassador.firstName} {ambassador.lastName}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {ambassador.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {ambassador.dialCode} {ambassador.mobile}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="relative">
                          <select
                            className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                            onChange={(e) => {
                              const [action, route] = e.target.value.split('-');
                              if (action === 'toggle') {
                                handleRouteToggle(ambassador._id, route);
                              } else if (action === 'access') {
                                handleRouteAccess(route);
                              }
                            }}
                          >
                            <option value="">Select Access Control</option>
                            
                            <optgroup label="Permission Control">
                              <option value="toggle-scholarships" disabled={updatingPermissions[`${ambassador._id}-scholarships`]}>
                                {updatingPermissions[`${ambassador._id}-scholarships`] ? '⏳' : (selectedRoutes[ambassador._id]?.scholarships ? '✅' : '☐')} Scholarships
                              </option>
                              <option value="toggle-courses" disabled={updatingPermissions[`${ambassador._id}-courses`]}>
                                {updatingPermissions[`${ambassador._id}-courses`] ? '⏳' : (selectedRoutes[ambassador._id]?.courses ? '✅' : '☐')} Courses
                              </option>
                              <option value="toggle-events" disabled={updatingPermissions[`${ambassador._id}-events`]}>
                                {updatingPermissions[`${ambassador._id}-events`] ? '⏳' : (selectedRoutes[ambassador._id]?.events ? '✅' : '☐')} Events
                              </option>
                              <option value="toggle-universities" disabled={updatingPermissions[`${ambassador._id}-universities`]}>
                                {updatingPermissions[`${ambassador._id}-universities`] ? '⏳' : (selectedRoutes[ambassador._id]?.universities ? '✅' : '☐')} Universities
                              </option>
                            </optgroup>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
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
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ambassador</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Access Control</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAmbassadors.map((ambassador) => (
                      <tr 
                        key={ambassador._id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleRowClick(ambassador)}
                      >
                        <td className="px-4 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {ambassador.firstName} {ambassador.lastName}
                            </div>
                            <div className="text-xs text-gray-500">
                              #{ambassador._id?.slice(-6) || 'N/A'}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="text-sm text-gray-900">{ambassador.email}</div>
                          <div className="text-xs text-gray-500">{ambassador.dialCode} {ambassador.mobile}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="relative">
                            <select
                              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                              onChange={(e) => {
                                const [action, route] = e.target.value.split('-');
                                if (action === 'toggle') {
                                  handleRouteToggle(ambassador._id, route);
                                } else if (action === 'access') {
                                  handleRouteAccess(route);
                                }
                              }}
                            >
                              <option value="">Select Access Control</option>
                              
                              <optgroup label="Permission Control">
                                <option value="toggle-scholarships" disabled={updatingPermissions[`${ambassador._id}-scholarships`]}>
                                  {updatingPermissions[`${ambassador._id}-scholarships`] ? '⏳' : (selectedRoutes[ambassador._id]?.scholarships ? '✅' : '☐')} Scholarships
                                </option>
                                <option value="toggle-courses" disabled={updatingPermissions[`${ambassador._id}-courses`]}>
                                  {updatingPermissions[`${ambassador._id}-courses`] ? '⏳' : (selectedRoutes[ambassador._id]?.courses ? '✅' : '☐')} Courses
                                </option>
                                <option value="toggle-events" disabled={updatingPermissions[`${ambassador._id}-events`]}>
                                  {updatingPermissions[`${ambassador._id}-events`] ? '⏳' : (selectedRoutes[ambassador._id]?.events ? '✅' : '☐')} Events
                                </option>
                                <option value="toggle-universities" disabled={updatingPermissions[`${ambassador._id}-universities`]}>
                                  {updatingPermissions[`${ambassador._id}-universities`] ? '⏳' : (selectedRoutes[ambassador._id]?.universities ? '✅' : '☐')} Universities
                                </option>
                              </optgroup>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {filteredAmbassadors.map((ambassador) => (
                <div 
                  key={ambassador._id} 
                  className="p-4 cursor-pointer"
                  onClick={() => handleRowClick(ambassador)}
                >
                  <div className="mb-3">
                    <h3 className="text-base font-medium text-gray-900">
                      {ambassador.firstName} {ambassador.lastName}
                    </h3>
                    <p className="text-xs text-gray-500">#{ambassador._id?.slice(-8) || 'N/A'}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-16 flex-shrink-0">Email:</span>
                      <span className="text-gray-900 truncate">{ambassador.email}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-16 flex-shrink-0">Mobile:</span>
                      <span className="text-gray-900">{ambassador.dialCode} {ambassador.mobile}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                      <select
                        className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                        onChange={(e) => {
                          const [action, route] = e.target.value.split('-');
                          if (action === 'toggle') {
                            handleRouteToggle(ambassador._id, route);
                          } else if (action === 'access') {
                            handleRouteAccess(route);
                          }
                        }}
                      >
                        <option value="">Select Access Control</option>
                        
                        <optgroup label="Permission Control">
                          <option value="toggle-scholarships" disabled={updatingPermissions[`${ambassador._id}-scholarships`]}>
                            {updatingPermissions[`${ambassador._id}-scholarships`] ? '⏳' : (selectedRoutes[ambassador._id]?.scholarships ? '✅' : '☐')} Scholarships
                          </option>
                          <option value="toggle-courses" disabled={updatingPermissions[`${ambassador._id}-courses`]}>
                            {updatingPermissions[`${ambassador._id}-courses`] ? '⏳' : (selectedRoutes[ambassador._id]?.courses ? '✅' : '☐')} Courses
                          </option>
                          <option value="toggle-events" disabled={updatingPermissions[`${ambassador._id}-events`]}>
                            {updatingPermissions[`${ambassador._id}-events`] ? '⏳' : (selectedRoutes[ambassador._id]?.events ? '✅' : '☐')} Events
                          </option>
                          <option value="toggle-universities" disabled={updatingPermissions[`${ambassador._id}-universities`]}>
                            {updatingPermissions[`${ambassador._id}-universities`] ? '⏳' : (selectedRoutes[ambassador._id]?.universities ? '✅' : '☐')} Universities
                          </option>
                        </optgroup>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
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
          <div className="text-2xl font-bold text-blue-600">{ambassadors.length}</div>
          <div className="text-sm text-gray-500">Total Ambassadors</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {Object.keys(selectedRoutes).length}
          </div>
          <div className="text-sm text-gray-500">With Permissions</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">
            {Object.values(selectedRoutes).reduce((acc, routes) => {
              return acc + Object.values(routes).filter(Boolean).length;
            }, 0)}
          </div>
          <div className="text-sm text-gray-500">Total Permissions</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">
            {filteredAmbassadors.length}
          </div>
          <div className="text-sm text-gray-500">Filtered Results</div>
        </div>
      </div>
    </div>
  );
};

export default ManageAmbassador;