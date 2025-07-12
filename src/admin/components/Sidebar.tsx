import { useState, useEffect } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";
import {
  FiBook,
  FiSettings,
  FiPieChart,
  FiMessageSquare,
  FiSkipForward,
  FiSkipBack,
} from "react-icons/fi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import logo from "../../assets/logo.png";
import user from "../../assets/instructor.png";

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  end?: boolean;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    to: "/seller/dashboard",
    icon: <FiPieChart className="w-5 h-5" />,
    end: true,
  },
  {
    label: "Courses",
    to: "/seller/courses", 
    icon: <FiBook className="w-5 h-5" />,
  },
  {
    label: "Communication",
    to: "/seller/communication-reviews",
    icon: <FiMessageSquare className="w-5 h-5" />,
  },
  {
    label: "Revenue",
    to: "/seller/revenue",
    icon: <AiOutlineDollarCircle className="w-5 h-5" />,
  },
  {
    label: "Settings",
    to: "/seller/settings",
    icon: <FiSettings className="w-5 h-5" />,
  },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
      if (window.innerWidth >= 768) {
        setMobileOpen(false); // Always show sidebar on desktop
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const linkClasses: NavLinkProps["className"] = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 text-sm font-medium transition-all border-l-2 ${
      isActive
        ? "text-blue-600 border-blue-600 bg-blue-50 dark:bg-gray-700"
        : "text-gray-500 border-transparent hover:text-blue-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
    } ${collapsed && !isMobile ? "justify-center px-2" : ""}`;

  // Mobile toggle button (only shows on mobile)
  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`fixed z-30 top-4 ${
            mobileOpen ? "left-4" : "left-[-10px]"
          } p-2 rounded-md bg-gray-900 text-white md:hidden`}
        >
          {mobileOpen ? <FiSkipBack size={20} /> : <FiSkipForward size={20} />}
        </button>

        {/* Mobile sidebar overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-20 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile sidebar */}
        <aside
          className={`fixed z-20 top-0 left-0 flex flex-col gap-6 w-fit lg:w-64 md:w-64 min-h-screen bg-gray-900 border-r border-gray-800 transition-transform duration-300 transform ${
            mobileOpen ? "translate-x-0 pt-12" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          {/* Logo + Collapse Button */}
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} className="w-10 h-10 mr-2" alt="Logo" />
              <span className="text-lg font-bold text-white">Byway</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map(({ to, label, icon, end }) => (
              <NavLink
                to={to}
                key={label}
                end={end}
                className={linkClasses}
                onClick={() => setMobileOpen(false)}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="px-4 py-4 flex items-center">
            <img
              src={user}
              className="w-10 h-10 rounded-full object-cover"
              alt="User"
            />
            <div className="ml-3">
              <p className="text-sm font-semibold text-white">Hi, John Doe</p>
            </div>
          </div>
        </aside>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside
      className={`flex flex-col gap-6 ${
        collapsed ? "w-20" : "w-64"
      } min-h-screen bg-gray-900 border-r border-gray-800 transition-all duration-300`}
    >
      {/* Logo + Collapse Button */}
      <div
        className={`px-4 py-4 flex items-center ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && (
          <div className="flex items-center">
            <img src={logo} className="w-10 h-10 mr-2" alt="Logo" />
            <span className="text-lg font-bold text-white">Byway</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="cursor-pointer text-gray-200 bg-transparent transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <FiSkipForward className="w-6 h-6" />
          ) : (
            <FiSkipBack className="w-6 h-6" />
          )}
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(({ to, label, icon, end }) => (
          <NavLink to={to} key={label} end={end} className={linkClasses}>
            <span className="flex-shrink-0">{icon}</span>
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      <div
        className={`px-4 py-4 flex items-center ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <img
          src={user}
          className="w-10 h-10 rounded-full object-cover"
          alt="User"
        />
        {!collapsed && (
          <div className="ml-3">
            <p className="text-sm font-semibold text-white">Hi, John Doe</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
