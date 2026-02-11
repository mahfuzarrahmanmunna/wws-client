import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Swal from 'sweetalert2'

const ManageScholarship = () => {

	const queryClient = useQueryClient();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editData, setEditData] = useState(null);
	const [viewMode, setViewMode] = useState('card'); // "card" | "table"
	const [search, setSearch] = useState('');

	const fetchScholarships = async () => {
		const response = await axios.get(`http://localhost:3000/api/search/scholarships`);
		return response.data;
	};

	const { data, isLoading: allscholarshipLoading } = useQuery({
		queryKey: ["allscholarship"],
		queryFn: fetchScholarships,
	});

	const 	allscholarship = useMemo(() => {
		return data?.data ?? [];
	}, [data]);

	// Filter scholarships by search
	const filteredScholarships = useMemo(() => {
		const s = search.toLowerCase();
		return allscholarship.filter(sch =>
			sch.studyLevel?.toLowerCase().includes(s) ||
			sch.destination?.toLowerCase().includes(s) ||
			sch.duration?.toLowerCase().includes(s) ||
			sch.tuitionFee?.toLowerCase().includes(s) ||
			sch.description?.toLowerCase().includes(s) ||
			sch.eligibility?.toLowerCase().includes(s)
		);
	}, [allscholarship, search]);

	

	const handleOpenUpdate = (sch) => {
		setEditData({ ...sch });
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setEditData(null);
	};

	// Lock background scroll when modal is open (robust cleanup)
	useEffect(() => {
		document.body.style.overflow = isModalOpen ? 'hidden' : '';
		return () => { document.body.style.overflow = ''; };
	}, [isModalOpen]);

	const Modal = ({ children, onClose }) => {
		return createPortal(
			<div className="fixed inset-0 z-[9999] grid place-items-center bg-black/60 p-4" onClick={onClose}>
				<div className="bg-white dark:bg-gray-900 dark:text-gray-100 w-full max-w-2xl rounded-lg shadow-2xl p-6 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>,
			document.body
		);
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		try {
			const id = editData?._id;
			const formData = new FormData(e.currentTarget);
			const payload = Object.fromEntries(formData.entries());
			if (typeof payload.coursesIncluded === 'string') {
				payload.coursesIncluded = payload.coursesIncluded
					.split(',')
					.map(s => s.trim())
					.filter(Boolean);
			}
			await axios.put(`http://localhost:3000/api/scholarship/${id}`, payload);
			await queryClient.invalidateQueries({ queryKey: ["allscholarship"] });
			handleCloseModal();
			Swal.fire('Updated', 'Scholarship updated successfully', 'success');
		} catch (err) {
			console.error(err);
			Swal.fire('Error', 'Update failed', 'error');
		}
	};

	const handleDelete = async (id) => {
		try {
			const result = await Swal.fire({
				title: 'Are you sure?',
				text: 'This will permanently delete the scholarship.',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Yes, delete it!'
			});

			if (!result.isConfirmed) return;

			await axios.delete(`http://localhost:3000/api/scholarship/${id}`);
			await queryClient.invalidateQueries({ queryKey: ["allscholarship"] });
			Swal.fire('Deleted', 'Scholarship has been deleted.', 'success');
		} catch (err) {
			console.error(err);
			Swal.fire('Error', 'Delete failed', 'error');
		}
	};

	if (allscholarshipLoading) {
		return <div className="p-4">Loading scholarships...</div>;
	}

	return (
		<div className="p-4">
			<div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
				<h2 className="text-xl font-semibold">Manage Scholarships</h2>
				<input
					type="text"
					placeholder="Search scholarships..."
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
					{filteredScholarships.map((sch) => (
					<div key={sch._id} className="border rounded-lg shadow-sm p-4 bg-white flex flex-col">
						<div className="mb-2">
							<p className="text-sm text-gray-600"><span className="font-medium">Study Level:</span> {sch.studyLevel}</p>
							<p className="text-sm text-gray-600"><span className="font-medium">Destination:</span> {sch.destination}</p>
							<p className="text-sm text-gray-600"><span className="font-medium">Duration:</span> {sch.duration}</p>
							<p className="text-sm text-gray-600"><span className="font-medium">Tuition Fee:</span> {sch.tuitionFee}</p>
							{/* Showing only 3-4 key fields on card */}
						</div>
						<div className="mt-auto flex items-center gap-2">
							
							<button onClick={() => handleOpenUpdate(sch)} className="px-3 py-1.5 text-sm rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
							<button onClick={() => handleDelete(sch._id)} className="px-3 py-1.5 text-sm rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
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
								<th className="p-2">Study Level</th>
								<th className="p-2">Destination</th>
								<th className="p-2">Duration</th>
								<th className="p-2">Tuition Fee</th>
								<th className="p-2">Eligibility</th>
								<th className="p-2 text-center">Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredScholarships.map((sch) => (
								<tr key={sch._id} className="border-t">
									<td className="p-2">{sch.studyLevel || '-'}</td>
									<td className="p-2">{sch.destination || '-'}</td>
									<td className="p-2">{sch.duration || '-'}</td>
									<td className="p-2">{sch.tuitionFee || '-'}</td>
									<td className="p-2">{sch.eligibility || '-'}</td>
									<td className="p-2 text-center space-x-2 lg:flex gap-2">
										<button onClick={() => handleOpenUpdate(sch)} className="px-2 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600">Update</button>
										<button onClick={() => handleDelete(sch._id)} className="px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">Delete</button>
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
						<h3 className="text-xl font-bold text-gray-800">Update Scholarship</h3>
						<button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 text-2xl font-light leading-none">&times;</button>
					</div>
					<form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<label className="flex flex-col text-sm">
							<span className="mb-1">Study Level</span>
							<select name="studyLevel" defaultValue={editData.studyLevel || ''} className="border rounded px-2 py-2">
								<option value="">Select study level</option>
								<option>Undergraduate</option>
								<option>Postgraduate</option>
								<option>PhD</option>
								<option>Diploma</option>
								<option>Certificate</option>
							</select>
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
							<label className="flex flex-col text-sm sm:col-span-2">
								<span className="mb-1">Description</span>
								<textarea name="description" defaultValue={editData.description || ''} className="border rounded px-2 py-1 h-24" />
							</label>
						<label className="flex flex-col text-sm">
							<span className="mb-1">Eligibility</span>
							<input name="eligibility" defaultValue={editData.eligibility || ''} className="border rounded px-2 py-2" placeholder="e.g., High school diploma, IELTS/TOEFL" />
						</label>
						<label className="flex flex-col text-sm">
							<span className="mb-1">Duration</span>
							<input name="duration" defaultValue={editData.duration || ''} className="border rounded px-2 py-2" placeholder="e.g., 3-4 years" />
						</label>
						<label className="flex flex-col text-sm">
							<span className="mb-1">Tuition Fee</span>
							<input name="tuitionFee" defaultValue={editData.tuitionFee || ''} className="border rounded px-2 py-2" placeholder="e.g., $25,000 - $55,000 per year" />
						</label>
						<label className="flex flex-col text-sm sm:col-span-2">
							<span className="mb-1">Courses Included (comma separated)</span>
							<input name="coursesIncluded" defaultValue={Array.isArray(editData.coursesIncluded) ? editData.coursesIncluded.join(', ') : (editData.coursesIncluded || '')} className="border rounded px-2 py-2" placeholder="e.g., Engineering, Business Administration, Computer Science" />
						</label>
						<label className="flex flex-col text-sm">
							<span className="mb-1">Application Link (optional)</span>
							<input name="applicationLink" type="url" defaultValue={editData.applicationLink || ''} className="border rounded px-2 py-2" placeholder="https://example.com/apply" />
						</label>
						<label className="flex flex-col text-sm">
							<span className="mb-1">Contact Email</span>
							<input name="contactEmail" type="email" defaultValue={editData.contactEmail || ''} className="border rounded px-2 py-2" placeholder="e.g., admissions@university.edu" />
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

export default ManageScholarship