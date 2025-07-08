import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import frame from "../assets/Frame 427319048.png";
import GoogleIcon from "../assets/google.png";
import MicrosoftIcon from "../assets/microsoft.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";

// ... imports نفس ما هي

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    role: Yup.string().required("Role is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    type: "", 
    email: "",
    password: "",
    password_confirmation: "",
  };

 const handleSubmit = async (values: typeof initialValues) => {
  try {
    const response = await fetch("https://round-4-lms-api.digital-vision-solutions.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Registration successful:", data);
    } else {
      console.error("❌ Registration failed:", data);
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
  }
};


  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 dark:bg-gray-900 min-h-[600px] transition-colors duration-300">
      <section className="flex-1 hidden md:block">
        <img
          src={frame}
          alt="frame"
          className="h-full w-full object-contain rounded-md"
        />
      </section>

      <section className="flex-1 bg-white dark:bg-gray-800 rounded-md p-10 shadow-lg transition-colors duration-300">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
          Sign Up
        </h2>

        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form className="space-y-10">
            <div className="flex gap-4 flex-wrap">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />

            {/* ⬇ Field لـ Select Role */}
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

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />

            <div className="flex gap-4 flex-wrap">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>

            <Button type="submit" className="w-fit">
              Submit <ArrowRightAltIcon />
            </Button>
          </Form>
        </Formik>

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
      </section>
    </div>
  );
};

export default Signup;

