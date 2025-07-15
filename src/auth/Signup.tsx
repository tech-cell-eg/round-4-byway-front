import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import frame from "../assets/Frame 427319048.png";
import GoogleIcon from "../assets/google.png";
import MicrosoftIcon from "../assets/microsoft.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    role: Yup.string().required("Role is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(
        8,
        "Password must contain at least one uppercase letter and one symbol and number"
      )
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Password must contain at least one uppercase letter and one symbol"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values: typeof initialValues) => {
    const payload = {
      first_name: values.firstName,
      last_name: values.lastName,
      username: values.username,
      type: values.role,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmPassword,
    };

    try {
      const response = await axios.post(
        "https://round-4-lms-api.digital-vision-solutions.com/api/register",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { message, token, user } = response.data;

      localStorage.setItem("auth", JSON.stringify({ token, user }));

      console.log(message, token, user);

      navigate("/");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const serverMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong";

        setError(serverMessage);
        console.error(
          "Server Validation Error:",
          error.response?.data?.errors || serverMessage
        );
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 dark:bg-gray-900 min-h-[600px] transition-colors duration-300">
      {/* Left Image Section */}
      <section className="flex-1 hidden md:block">
        <img
          src={frame}
          alt="frame"
          className="h-full w-full object-contain rounded-md"
        />
      </section>

      {/* Form Section */}
      <section className="flex-1 bg-white dark:bg-gray-800 rounded-md p-10 shadow-lg transition-colors duration-300">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Sign Up
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex-1">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                as="select"
                name="role"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                <option value="">Select Role</option>
                <option value="instructor">Instructor</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              <div className="flex-1">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex-1">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <Button type="submit" className="w-fit">
              Submit <ArrowRightAltIcon />
            </Button>
          </Form>
        </Formik>

        {/* Social Signups */}
        <div className="my-6 border-t text-center relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-300">
            Or Sign up with
          </span>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 flex items-center justify-center gap-2 text-gray-800">
            <FacebookOutlinedIcon color="primary" /> Facebook
          </button>
          <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 flex items-center justify-center gap-2 text-gray-800">
            <img src={GoogleIcon} className="w-5 h-5" alt="Google" />
            Google
          </button>
          <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 flex items-center justify-center gap-2 text-gray-800">
            <img src={MicrosoftIcon} className="w-5 h-5" alt="Microsoft" />
            Microsoft
          </button>
        </div>
        <p className="text-red-600 text-center mt-3">{error}</p>
      </section>
    </div>
  );
};

export default Signup;
