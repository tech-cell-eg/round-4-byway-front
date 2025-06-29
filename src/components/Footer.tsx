import logo from "../assets/logo.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 p-5 ">
      <div className="mx-auto w-full max-w-screen-xl py-6 p-4  border-red-500 ">
        <div className="md:flex md:justify-around">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex ">
              <img src={logo} className="h-8 me-3 w-fit" alt="" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Byway
              </span>
            </a>
            <p className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Empowering learners through accessible and engaging online
              education. Byway is a leading online learning platform dedicated
              to providing high-quality, flexible, and affordable educational
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get Help
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Contact Us</li>
                <li className="mb-4">Latest Articles</li>
                <li className="mb-4">FAQ</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Programs{" "}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Art & Design</li>
                <li className="mb-4">Bussiness</li>
                <li className="mb-4">IT & Software</li>
                <li className="mb-4">Languages</li>
                <li className="mb-4">Programming</li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact US
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  Adresss:123 main street ,Anytown, CA 12345
                </li>
                <li className="mb-4">
                  Tel:+(123)456-7890
                </li>
                <li className="mb-4">
                  MailMail: bywayedu@webkul.in:by
                </li>
              </ul>
              <ul className="flex  items-center justify-between">
                <li><FacebookOutlinedIcon color="primary"/></li>
                <li><GitHubIcon/></li>
                <li><img src={google} className="w-5 h-5" alt="" /></li>
                <li><XIcon/></li>
                <li><img src={microsoft} className="w-5 h-5" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
