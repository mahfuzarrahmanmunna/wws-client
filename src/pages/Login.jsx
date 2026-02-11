import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import banner from '../assets/login.jpg'
import GoogleSign from '../component/GoogleSign'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Context } from '../AuthProvider/Provider'
import useAuth from '../Hooks/useAuth/useAuth'


const Login = () => {

  const { user } = useAuth();
  console.log(user);

  // let { loginSetup } = useContext(Context)
  let { loginSetup } = useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  let navigate = useNavigate()
  let location = useLocation()
  const redirectPath = location.state?.from || "/";

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    loginSetup(formData.email.trim().toLowerCase(), formData.password)
      .then(() => {
        toast.success("Login successfully!");
        navigate(redirectPath);
      })
      .catch((error) => {
        toast.error(error.message || "Failed to login.");
      });
  }



  return (
    <div className="grid md:grid-cols-2 gap-6 p-5 md:p-8 items-stretch">
      <Motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.08)]"
      >
        <div className="relative bg-slate-50 h-56 sm:h-64 md:h-80 lg:h-[420px]">
          <img src={banner} alt="Welcome back" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/50"></div>
          <div className="absolute left-5 bottom-4 text-white">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome back</div>
            <div className="opacity-90 text-sm sm:text-base">Sign in to continue</div>
          </div>
        </div>
        <div className="p-5 md:p-6">
          <ul className="m-0 pl-0 list-none grid gap-3">
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Sync across web and mobile</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Manage saved courses</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-[18px] h-[18px] rounded-full bg-green-600 text-white text-[12px] inline-flex items-center justify-center">✓</span>
              <span>Personalised recommendations</span>
            </li>
          </ul>
        </div>
      </Motion.aside>

      <Motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white p-5 md:p-6 rounded-xl shadow-[0_2px_14px_rgba(0,0,0,0.08)] justify-self-center"
      >
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold">Sign in</h2>

        <div className="mt-1">
          <label className="block text-sm mb-1">Email *</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
        </div>

        <div className="mt-3">
          <label className="block text-sm mb-1">Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          {errors.password && <div className="text-red-600 text-xs mt-1">{errors.password}</div>}
        </div>

        <button type="submit" className="mt-4 w-full px-4 py-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white font-semibold transition">
          Sign in
        </button>

        <div className="mt-4 flex items-center gap-2">
          <div className="h-px bg-slate-200 flex-1"></div>
          <div className="text-slate-500 text-sm">or</div>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        <GoogleSign></GoogleSign>

        <Link to="/signup" className="mt-3 inline-block w-full">
          <button type="button" className="w-full px-4 py-3 rounded-full border border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold transition">
            Create an account
          </button>
        </Link>
      </Motion.form>
    </div>
  )
}

export default Login