import { useLocation, useNavigate } from 'react-router-dom'
// import { Context } from '../AuthProvider/Provider'
import { toast } from 'react-toastify'
import useAuth from '../Hooks/useAuth/useAuth'
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure'

const GoogleSign = () => {

  //      const handleGoogleLogin = () => {
  //     alert('Google login clicked')
  //   }

  //  let {googleSign}= useContext(Context)
  let { googleSign } = useAuth()
  let navigate = useNavigate()
  let location = useLocation()
  const redirectPath = location.state?.from || "/";
  const axiosSecure = useAxiosSecure()

  const handleGoogle = async () => {
    try {
      // 1️⃣ Google authentication
      const result = await googleSign()
      const user = result.user

      // 2️⃣ Prepare user data for backend
      const userData = {
        firstName: user.displayName?.split(' ')[0] || '',
        lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
        dialCode: '+880', // Default dial code
        mobile: user.phoneNumber || '',
        email: user.email,
        password: '', // No password for Google sign-in
        agreeTerms: true, // Assume user agrees when using Google sign-in
        allowContact: false,
        allowMarketing: false,
        photoURL: user.photoURL || '',
        provider: 'google',
        role:"user", // Add provider info
        power:"false"
      }

      // 3️⃣ Post user data to backend
      await axiosSecure.post("post-users", userData)

      // 4️⃣ Success message and navigation
      toast.success("Google Sign in successfully!")
      navigate(redirectPath)

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message || "Failed to sign in with Google.")
    }
  };
  return (
    <button type="button" onClick={handleGoogle} className="mt-3 w-full px-3 py-2 rounded-lg border border-slate-300 bg-white flex items-center justify-center gap-2 hover:bg-slate-50">
      <img alt="Google" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-[18px] h-[18px]" />
      <span>Continue with Google</span>
    </button>
  )
}

export default GoogleSign