/* eslint-disable @typescript-eslint/no-unused-vars */
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import frame from "../assets/Frame 427319048.png";
import GoogleIcon from "../assets/google.png";
import MicrosoftIcon from "../assets/microsoft.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("signup.validation.firstName")),
    lastName: Yup.string().required(t("signup.validation.lastName")),
    username: Yup.string().required(t("signup.validation.username")),
    email: Yup.string()
      .email(t("signup.validation.invalidEmail"))
      .required(t("signup.validation.email")),
    password: Yup.string()
      .min(6, t("signup.validation.passwordMin"))
      .required(t("signup.validation.password")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("signup.validation.passwordsNotMatch"))
      .required(t("signup.validation.confirmPassword")),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <>
      <header>
        <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
          <div className="flex gap-2">
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              AR
            </button>
          </div>
        </div>
      </header>
      <div className="flex flex-col md:flex-row gap-4 p-6 bg-gray-100 dark:bg-gray-900 min-h-[600px]  transition-colors duration-300">
        <section className="flex-1 hidden md:block">
          <img
            src={frame}
            alt="frame"
            className="h-full w-full object-contain rounded-md"
          />
        </section>

        <section className="flex-1 bg-white dark:bg-gray-800 rounded-md p-10 shadow-lg transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
            {t("signup.title")}
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
                  placeholder={t("signup.firstName")}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder={t("signup.lastName")}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <Field
                type="text"
                name="username"
                placeholder={t("signup.username")}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />

              <Field
                type="email"
                name="email"
                placeholder={t("signup.email")}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />

              <div className="flex gap-4 flex-wrap">
                <Field
                  type="password"
                  name="password"
                  placeholder={t("signup.password")}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder={t("signup.confirmPassword")}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <Button type="submit" className="w-fit">
                {t("signup.submit")}{" "}
                {i18n.language === "ar" ? (
                  <KeyboardBackspaceIcon />
                ) : (
                  <ArrowRightAltIcon />
                )}
              </Button>
            </Form>
          </Formik>

          <div className="my-6 border-t text-center relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-300">
              {t("signup.signupWith")}
            </span>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 text-gray-800  transition-all">
              <FacebookOutlinedIcon color="primary" />
              <span>{t("signup.facebook")}</span>
            </button>
            <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 text-gray-800  transition-all">
              <img src={GoogleIcon} className="w-5 h-5" alt="Google" />
              <span>{t("signup.google")}</span>
            </button>
            <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded py-2 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2 text-gray-800  transition-all">
              <img src={MicrosoftIcon} className="w-5 h-5" alt="Microsoft" />
              <span>{t("signup.microsoft")}</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
