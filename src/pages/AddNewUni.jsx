import React, { useState } from 'react'
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure"

const AddNewUni = () => {
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

    const universityName = fd.get('universityName')?.toString().trim()
    const destination = fd.get('destination')?.toString().trim()
    const establishedStr = fd.get('established')?.toString().trim()
    const rankingStr = fd.get('ranking')?.toString().trim()
    const description = fd.get('description')?.toString().trim()
    const coursesStr = fd.get('coursesOffered')?.toString() || ""
    const tuitionFee = fd.get('tuitionFee')?.toString().trim()
    const requirements = fd.get('requirements')?.toString().trim()
    const applicationLinkRaw = fd.get('applicationLink')?.toString().trim()
    const contactEmail = fd.get('contactEmail')?.toString().trim()
    const campusLocation = fd.get('campusLocation')?.toString().trim()

    if (!universityName || !destination || !establishedStr || !rankingStr || !description || !tuitionFee || !requirements || !contactEmail || !campusLocation) {
      setError('Please fill in all required fields.')
      return
    }

    const established = Number(establishedStr)
    const ranking = Number(rankingStr)
    if (!Number.isFinite(established) || established <= 0) {
      setError('Established year must be a positive number.')
      return
    }
    if (!Number.isFinite(ranking) || ranking <= 0) {
      setError('Ranking must be a positive number.')
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

    const coursesOffered = coursesStr
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    const payload = {
      universityName,
      destination,
      established,
      ranking,
      description,
      coursesOffered,
      tuitionFee,
      requirements,
      contactEmail,
      campusLocation,
    }

    if (applicationLink) {
      payload.applicationLink = applicationLink
    }

    try {
      setIsSubmitting(true)
      const res = await axiosSecure.post('/add-new-university', payload)
      if (res?.status === 201) {
        setSuccess('University added successfully!')
        form.reset()
      } else {
        setError('Failed to add university. Please try again.')
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to add university.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="px-6 sm:px-8 py-6 border-b border-gray-100 ">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Add New University</h1>
          <p className="mt-1 text-slate-600">Enter details to list a new university.</p>
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
              <label className="block text-sm font-medium text-slate-700 mb-1">University Name<span className="text-red-500">*</span></label>
              <input name="universityName" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., University College London" required />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Established Year<span className="text-red-500">*</span></label>
              <input name="established" type="number" min="1000" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 1826" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Ranking<span className="text-red-500">*</span></label>
              <input name="ranking" type="number" min="1" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 8" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description<span className="text-red-500">*</span></label>
            <textarea name="description" rows="4" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the university..." required></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Courses Offered (comma separated)</label>
              <input name="coursesOffered" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Law, Architecture, Computer Science" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tuition Fee<span className="text-red-500">*</span></label>
              <input name="tuitionFee" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., £18,000 - £38,000 per year" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Requirements<span className="text-red-500">*</span></label>
            <textarea name="requirements" rows="3" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., English proficiency, personal statement, recommendation letters" required></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Application Link (optional)</label>
              <input name="applicationLink" type="url" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email<span className="text-red-500">*</span></label>
              <input name="contactEmail" type="email" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., admissions@ucl.ac.uk" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Campus Location<span className="text-red-500">*</span></label>
            <input name="campusLocation" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., London, UK" required />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button type="reset" className="inline-flex items-center rounded-full border-2 border-blue-500 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-60" disabled={isSubmitting}>
              Reset
            </button>
            <button type="submit" className="inline-flex items-center rounded-full bg-[#11AD00] hover:bg-[#4CADFF] px-6 py-3 text-white text-sm font-medium transition-colors disabled:opacity-60" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Add University'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewUni