import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth/useAuth'
import { useNavigate } from 'react-router-dom'

const enquirySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^[0-9+\-()\s]{7,20}$/i, 'Enter a valid phone number'),
  destination: z.string().min(1, 'Please select a destination'),
  startWhen: z.string().min(1, 'Please select a start time'),
  counsellingMode: z.string().min(1, 'Please select a counselling mode'),
  funding: z.string().min(1, 'Please select a funding option'),
  studyLevel: z.string().min(1, 'Please select a study level'),
  nearestOffice: z.string().min(1, 'Please select the nearest office'),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and privacy policy' })
  }),
  contactConsent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required to contact you' })
  }),
  marketingOptIn: z.boolean().optional().default(false)
})

const ContactForm = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      startWhen: '',
      counsellingMode: '',
      funding: '',
      studyLevel: '',
      nearestOffice: '',
      agreeTerms: true,
      contactConsent: true,
      marketingOptIn: false,
      status: 'pending',
    }
  })

  const onSubmit = async (values) => {
    // Check if user is logged in before submitting
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please login to submit your enquiry.',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login') // Redirect to login page
        }
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Add status to the values before sending
      const dataToSubmit = {
        ...values,
        status: 'pending',
        userEmail: user?.email
      }

      console.log(dataToSubmit)
      await axios.post('http://localhost:3000/help-from-wws', dataToSubmit)

      // Show success SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Enquiry Submitted',
        text: 'Your enquiry has been submitted successfully!',
        confirmButtonColor: '#3085d6',
      })

      reset() // Clear the form
    } catch (err) {
      console.error(err)

      // Show error SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: err?.response?.data?.message || 'Please try again later.',
        confirmButtonColor: '#d33',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLoginRedirect = () => {
    Swal.fire({
      icon: 'info',
      title: 'Login Required',
      text: 'Please login to submit your enquiry.',
      showCancelButton: true,
      confirmButtonText: 'Login Now',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/signin')
      }
    })
  }

  return (
    <>
      {/* Login Status Alert */}
      {!user && (
        <div className="mb-4 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3 mt-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Login Required:</span> You need to login to submit your enquiry.{' '}
                <button
                  type="button"
                  onClick={handleLoginRedirect}
                  className="font-medium underline hover:text-yellow-600"
                >
                  Login now
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success/Error Alerts */}
      {submitSuccess && (
        <div className="mt-4 rounded-md bg-green-50 px-4 py-3 text-green-800">
          {submitSuccess}
        </div>
      )}
      {submitError && (
        <div className="mt-4 rounded-md bg-red-50 px-4 py-3 text-red-800">
          {submitError}
        </div>
      )}

      {/* Form */}
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">First name*</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=""
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Last name*</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=""
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Email address*</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder=""
              {...register('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Mobile number*</label>
            <div className="mt-1 flex gap-2">
              <input
                type="tel"
                className="flex-1 rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                {...register('phone')}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          {/* Selects Row 1 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Your preferred study destination*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('destination')}>
              <option value="">Select</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Canada</option>
              <option>Malaysia</option>
              <option>New Zealand</option>
              <option>Others</option>
            </select>
            {errors.destination && (
              <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">When would you like to start?*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('startWhen')}>
              <option value="">Select</option>
              <option>Within 3 months</option>
              <option>3-6 months</option>
              <option>6-12 months</option>
            </select>
            {errors.startWhen && (
              <p className="mt-1 text-sm text-red-600">{errors.startWhen.message}</p>
            )}
          </div>

          {/* Selects Row 2 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred mode of counselling*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('counsellingMode')}>
              <option value="">Select</option>
              <option>In person</option>
              <option>Online</option>
            </select>
            {errors.counsellingMode && (
              <p className="mt-1 text-sm text-red-600">{errors.counsellingMode.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">How would you fund your education?*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('funding')}>
              <option value="">Select</option>
              <option>Self-funded</option>
              <option>Family support</option>
              <option>Scholarship/Loan</option>
            </select>
            {errors.funding && (
              <p className="mt-1 text-sm text-red-600">{errors.funding.message}</p>
            )}
          </div>

          {/* Selects Row 3 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred study level*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('studyLevel')}>
              <option value="">Select</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>PhD</option>
            </select>
            {errors.studyLevel && (
              <p className="mt-1 text-sm text-red-600">{errors.studyLevel.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Nearest WWS Office*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('nearestOffice')}>
              <option value="">Select</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
              <option>Sylhet</option>
            </select>
            {errors.nearestOffice && (
              <p className="mt-1 text-sm text-red-600">{errors.nearestOffice.message}</p>
            )}
          </div>

          {/* Checkboxes */}
          <div className="sm:col-span-2 space-y-3 mt-1">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('agreeTerms')} />
              <span className="text-sm text-slate-700">I agree to WWS Terms and privacy policy *</span>
            </label>
            {errors.agreeTerms && (
              <p className="-mt-2 text-sm text-red-600">{errors.agreeTerms.message}</p>
            )}

            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('contactConsent')} />
              <span className="text-sm text-slate-700">Please contact me by phone, email or SMS to assist with my enquiry*</span>
            </label>
            {errors.contactConsent && (
              <p className="-mt-2 text-sm text-red-600">{errors.contactConsent.message}</p>
            )}

            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('marketingOptIn')} />
              <span className="text-sm text-slate-700">I would like to receive updates and offers from WWS</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            {user ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Enquire now'}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleLoginRedirect}
                className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                Login to Submit Enquiry
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm