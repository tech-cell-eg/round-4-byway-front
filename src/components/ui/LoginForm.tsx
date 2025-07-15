import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('instructor');
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email is invalid';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://round-4-lms-api.digital-vision-solutions.com/api/login",
        {
          email,
          password,
          type,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, user, message } = response.data;

      // ✅ نحفظ التوكين بنفس طريقة الريجستر
      localStorage.setItem("auth", JSON.stringify({ token, user }));

      console.log("✅ Logged in:", message, token, user);
      setLoggedIn(true);
      setErrorMessage('');

      navigate(type === "instructor" ? "/seller/dashboard" : "/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("❌ Error response from API:", error.response?.data);
        setErrorMessage(
          error.response?.data?.message ||
          JSON.stringify(error.response?.data?.errors || "Login failed")
        );
      } else {
        console.error("❌ Unknown error:", error);
        setErrorMessage("Unexpected error occurred");
      }
    }
  };

  if (loggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-green-50">
        <h1 className="text-2xl font-bold text-green-700">✅ Logged in successfully!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6"
          noValidate
        >
          <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Username or Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2`}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded px-4 py-2`}
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">Select Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="instructor">Instructor</option>
              <option value="user">User</option>
            </select>
          </div>

          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Sign in →
          </button>
        </form>
      </div>

      <div className="hidden md:block md:w-1/2 h-[550px] mt-[35px]">
        <img
          src="src/components/ui/images/Frame 427319048.png"
          alt="Login visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginForm;
