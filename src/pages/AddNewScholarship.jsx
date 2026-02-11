import React, { useState } from 'react'
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure"

const AddNewScholarship = () => {
  const axiosSecure = useAxiosSecure()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const studyLevel = formData.get('studyLevel')?.toString().trim()
    const destination = formData.get('destination')?.toString().trim()
    const description = formData.get('description')?.toString().trim()
    const eligibility = formData.get('eligibility')?.toString().trim()
    const duration = formData.get('duration')?.toString().trim()
    const tuitionFee = formData.get('tuitionFee')?.toString().trim()
    const coursesString = formData.get('coursesIncluded')?.toString() || ""
    const applicationLinkRaw = formData.get('applicationLink')?.toString().trim()
    const contactEmail = formData.get('contactEmail')?.toString().trim()

    if (!studyLevel || !destination || !description || !eligibility || !duration || !tuitionFee || !contactEmail) {
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

    const coursesIncluded = coursesString
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    const payload = {
      studyLevel,
      destination,
      description,
      eligibility,
      duration,
      tuitionFee,
      coursesIncluded,
      contactEmail,
    }

    if (applicationLink) {
      payload.applicationLink = applicationLink
    }

    try {
      setIsSubmitting(true)
      const res = await axiosSecure.post('/add-new-scholarship', payload)
      if (res?.status === 201) {
        setSuccess('Scholarship added successfully!')
        form.reset()
      } else {
        setError('Failed to add scholarship. Please try again.')
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to add scholarship.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-gray-100 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Add New Scholarship</h1>
          <p className="mt-1 text-slate-600">Provide details to publish a new scholarship opportunity.</p>
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Study Level<span className="text-red-500">*</span></label>
              <select name="studyLevel" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Select study level</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>PhD</option>
                <option>Diploma</option>
                <option>Certificate</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Destination<span className="text-red-500">*</span></label>
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
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description<span className="text-red-500">*</span></label>
            <textarea name="description" rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the scholarship..." required></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Eligibility<span className="text-red-500">*</span></label>
              <input name="eligibility" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., High school diploma, IELTS/TOEFL" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Duration<span className="text-red-500">*</span></label>
              <input name="duration" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 3-4 years" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tuition Fee<span className="text-red-500">*</span></label>
              <input name="tuitionFee" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., $25,000 - $55,000 per year" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email<span className="text-red-500">*</span></label>
              <input name="contactEmail" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., admissions@university.edu" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Courses Included (comma separated)</label>
            <input name="coursesIncluded" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Engineering, Business Administration, Computer Science" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Application Link (optional)</label>
            <input name="applicationLink" type="url" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://example.com/apply" />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button type="reset" className="inline-flex items-center rounded-full border-2 border-blue-500 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-60" disabled={isSubmitting}>
              Reset
            </button>
            <button type="submit" className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white text-sm font-medium transition-colors disabled:opacity-60" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Add Scholarship'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewScholarship