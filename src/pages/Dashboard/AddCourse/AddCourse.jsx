import React, { useState } from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure'

const AddCourse = () => {
    const axiosSecure = useAxiosSecure()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")

        const form = e.currentTarget
        const fd = new FormData(form)

        const subject = fd.get('subject')?.toString().trim()
        const studyLevel = fd.get('studyLevel')?.toString().trim()
        const destination = fd.get('destination')?.toString().trim()
        const duration = fd.get('duration')?.toString().trim()
        const description = fd.get('description')?.toString().trim()
        const tuitionFee = fd.get('tuitionFee')?.toString().trim()
        const requirements = fd.get('requirements')?.toString().trim()
        const benefits = fd.get('benefits')?.toString().trim()
        const applicationLinkRaw = fd.get('applicationLink')?.toString().trim()
        const provider = fd.get('provider')?.toString().trim()
        const contactEmail = fd.get('contactEmail')?.toString().trim()

        if (
            !subject ||
            !studyLevel ||
            !destination ||
            !duration ||
            !description ||
            !tuitionFee ||
            !requirements ||
            !benefits ||
            !provider ||
            !contactEmail
        ) {
            setError('Please fill in all required fields.')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(contactEmail)) {
            setError('Please enter a valid email address.')
            return
        }

        let applicationLink = applicationLinkRaw
        if (applicationLink && !/^https?:\/\//i.test(applicationLink)) {
            applicationLink = `https://${applicationLink}`
        }

        const payload = {
            subject,
            studyLevel,
            destination,
            duration,
            description,
            tuitionFee,
            requirements,
            benefits,
            provider,
            contactEmail,
        }

        if (applicationLink) {
            payload.applicationLink = applicationLink
        }

        try {
            setIsSubmitting(true)
            const res = await axiosSecure.post('/add-new-course', payload)
            if (res?.status === 201) {
                setSuccess('Course added successfully!')
                form.reset()
            } else {
                setError('Failed to add course. Please try again.')
            }
        } catch (err) {
            setError(err?.response?.data?.message || 'Failed to add course.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
            <div className=" rounded-2xl shadow-md  overflow-hidden">
                <div className="px-6 sm:px-8 py-6 border-b border-gray-100">
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Add New Course</h1>
                    <p className="mt-1 text-slate-600">Enter details to list a new course.</p>
                </div>

                <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-6">
                    {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 px-4 py-3 text-sm">
                            {success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Subject<span className="text-red-500">*</span>
                            </label>
                            <input name="subject" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Business Administration" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Study Level<span className="text-red-500">*</span>
                            </label>
                            <input name="studyLevel" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Undergraduate" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Destination<span className="text-red-500">*</span>
                            </label>
                            <select name="destination" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                <option value="">Select destination</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>Ireland</option>
                                <option>New Zealand</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Duration<span className="text-red-500">*</span>
                            </label>
                            <input name="duration" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 4 years" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Description<span className="text-red-500">*</span>
                        </label>
                        <textarea name="description" rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the course..." required></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Tuition Fee<span className="text-red-500">*</span>
                            </label>
                            <input name="tuitionFee" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., CAD 12,000 - CAD 20,000 per year" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Requirements<span className="text-red-500">*</span>
                            </label>
                            <input name="requirements" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., IELTS/TOEFL, High school completion" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Benefits<span className="text-red-500">*</span>
                        </label>
                        <textarea name="benefits" rows="3" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Networking, Co-op opportunities" required></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Application Link (optional)
                            </label>
                            <input name="applicationLink" type="url" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Provider<span className="text-red-500">*</span>
                            </label>
                            <input name="provider" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., University of Toronto" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Contact Email<span className="text-red-500">*</span>
                        </label>
                        <input name="contactEmail" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., info@university.com" required />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                        <button type="reset" className="inline-flex items-center rounded-full border-2 border-blue-500 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-60" disabled={isSubmitting}>
                            Reset
                        </button>
                        <button type="submit" className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white text-sm font-medium transition-colors disabled:opacity-60" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Add Course'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddCourse
