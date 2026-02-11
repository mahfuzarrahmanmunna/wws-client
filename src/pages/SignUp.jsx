import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import banner from '../assets/sinUp.jpg'
import GoogleSign from '../component/GoogleSign'

import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../Hooks/useAuth/useAuth'
import Swal from 'sweetalert2'
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure'
import axios from 'axios'


let image_hosting_key = import.meta.env.VITE_image_Hosting_key

let image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export const SignUp = () => {
  const axiosSecure = useAxiosSecure()

  let { createRegistered, updateUserProfile } = useAuth()
  let link = useNavigate()


  const responsiveCss = `
    /* Tailwind is used for layout; this block left intentionally empty now. */
  `
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dialCode: '+880',
    mobile: '',
    email: '',
    password: '',
    agreeTerms: false,
    allowContact: false,
    allowMarketing: false,
    file: null,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    if (!/^\d{6,15}$/.test(formData.mobile.trim())) newErrors.mobile = 'Enter a valid mobile number'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms and privacy policy'

    // Image validation
    if (formData.file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
      const maxSize = 5 * 1024 * 1024 // 5MB

      if (!allowedTypes.includes(formData.file.type)) {
        newErrors.file = 'Please upload a valid image file (JPEG, PNG, GIF, or WebP)'
      } else if (formData.file.size > maxSize) {
        newErrors.file = 'Image size must be less than 5MB'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // 0️⃣ Upload image to imgbb if provided
      let photoURL = undefined;
      if (formData.file) {
        const fd = new FormData();
        fd.append('image', formData.file);
        const uploadRes = await axios.post(image_hosting_API, fd, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (uploadRes?.data?.success) {
          photoURL = uploadRes.data.data.display_url;
        } else {
          throw new Error('Image upload failed');
        }
      }

      // 1️⃣ Create Firebase account
      const userCredential = await createRegistered(formData.email, formData.password);
      const user = userCredential.user;

      // 2️⃣ Update user profile with display name and optional photo
      const displayName = `${formData.firstName} ${formData.lastName}`;
      await updateUserProfile(user, photoURL ? { displayName, photoURL } : { displayName });

      // 3️⃣ Post to backend
      const dataToSubmit = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        dialCode: formData.dialCode,
        mobile: formData.mobile.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        agreeTerms: formData.agreeTerms,
        allowContact: formData.allowContact,
        allowMarketing: formData.allowMarketing,
        photoURL: photoURL || '',
        role: "user",
        power: "false"

      };
      await axiosSecure.post("post-users", dataToSubmit);

      // 4️⃣ Success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      // 5️⃣ Reset form
      setFormData({
        firstName: "",
        lastName: "",
        dialCode: "+880",
        mobile: "",
        email: "",
        password: "",
        agreeTerms: false,
        allowContact: false,
        allowMarketing: false,
        file: null,
      });

      // 6️⃣ Redirect
      link("/");

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || error.message || "Failed to create account.",
      });
    }
  };





  return (
    <div className="signup-grid grid md:grid-cols-2 gap-6 p-5 md:p-8 items-stretch">
      <style dangerouslySetInnerHTML={{ __html: responsiveCss }} />
      <Motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
      >
        <div className="relative bg-slate-50 h-56 sm:h-64 md:h-80 lg:h-[420px]">
          <img src={banner} alt="Create account" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/50"></div>
          <div className="absolute left-5 bottom-4 text-white">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">Create your WWS account</div>
            <div className="opacity-90 text-sm sm:text-base">One account for all your study needs</div>
          </div>
        </div>
        <div className="p-5 md:p-6">
          <ul className="m-0 pl-0 list-none grid gap-3">
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Access your personalised dashboard</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Shortlist and save your favourite courses</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Same account for website and mobile app</span>
            </li>
          </ul>
          <div className="mt-3 text-xs sm:text-sm text-slate-600">
            <strong>Note:</strong> We’ll only contact you after you submit a successful enquiry form.
          </div>
        </div>
      </Motion.aside>

      <Motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white p-5 md:p-6 rounded-xl shadow-[0_2px_14px_rgba(0,0,0,0.08)] justify-self-center"
      >
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold">Create your account</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">First name *</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.firstName && <div className="text-red-600 text-xs mt-1">{errors.firstName}</div>}
          </div>
          <div>
            <label className="block text-sm mb-1">Last name *</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.lastName && <div className="text-red-600 text-xs mt-1">{errors.lastName}</div>}
          </div>
        </div>

        <div className="grid grid-cols-[140px_1fr] gap-3 mt-3 max-[420px]:grid-cols-1">
          <div>
            <label className="block text-sm mb-1">Dial code</label>
            <select name="dialCode" value={formData.dialCode} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="+880">+880</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+91">+91</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Mobile number *</label>
            <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            {errors.mobile && <div className="text-red-600 text-xs mt-1">{errors.mobile}</div>}
          </div>
        </div>

        <div className="mt-3">
          <label className="block text-sm mb-1">Email *</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
        </div>

        <div className="mt-3">
          <label className="block text-sm mb-1">Create a password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.password && <div className="text-red-600 text-xs mt-1">{errors.password}</div>}
        </div>

        <div className="mt-3">
          <label className="block text-sm mb-1">Profile Image</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.file && <div className="text-red-600 text-xs mt-1">{errors.file}</div>}
          {formData.file && (
            <div className="mt-2 text-xs text-green-600">
              Selected: {formData.file.name} ({(formData.file.size / 1024 / 1024).toFixed(2)} MB)
            </div>
          )}
        </div>

        <div className="mt-3 grid gap-2">
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mt-0.5" />
            <span>I agree to Terms and privacy policy *</span>
          </label>
          {errors.agreeTerms && <div className="text-red-600 text-xs">{errors.agreeTerms}</div>}


        </div>

        <button type="submit" className="mt-4 w-full px-4 py-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white font-semibold transition">
          Create an account
        </button>

        <div className="mt-3 text-center">Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign in</a></div>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-px bg-slate-200 flex-1"></div>
          <div className="text-slate-500 text-sm">or</div>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <GoogleSign></GoogleSign>

        {/* {submittedData && (
          <pre className="mt-4 bg-slate-50 p-3 rounded-lg overflow-auto text-xs">
{JSON.stringify(submittedData, null, 2)}
          </pre>
        )} */}
      </Motion.form>
    </div>
  )
}
