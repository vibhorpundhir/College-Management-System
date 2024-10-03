import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const dashboardType = router.state && router.state.type ? `${router.state.type} Dashboard` : "Dashboard";

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        {/* Dashboard Title */}
        <p
          className="font-bold text-2xl flex items-center cursor-pointer hover:text-blue-600 transition duration-300"
          onClick={() => navigate("/")}
        >
          <RxDashboard className="mr-2 text-blue-600" />
          {dashboardType}
        </p>

        {/* Logout Button */}
        <button
          className="flex items-center bg-red-100 text-red-500 px-4 py-2 font-semibold rounded hover:bg-red-200 transition duration-300"
          onClick={() => navigate("/")}
        >
          Logout
          <FiLogOut className="ml-2" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
