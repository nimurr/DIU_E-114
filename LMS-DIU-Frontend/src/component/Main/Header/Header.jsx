/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { RiNotificationFill } from "react-icons/ri";
import userImage from "/public/Auth/user.png";
import { MdNotificationsNone } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full px-5 py-3.5 bg-[#038c6d]  flex justify-between items-center text-white sticky top-0 left-0 z-10">
      <div className="flex items-center gap-3">
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>

      <div className="flex justify-between items-center gap-2">
        <Link to={"/notification"}>
          <h1 className="relative text-[#038c6d] p-2 rounded-full bg-white border-2 border-[#f13919]">
            <MdNotificationsNone className="size-8" />{" "}
            <span className="absolute top-0 right-0 w-5 h-5 text-white text-xs flex justify-center items-center bg-red-500 rounded-full">99+</span>
          </h1>
        </Link>
        <div onClick={() => navigate("/settings/personal-info")} className="flex items-center gap-1 cursor-pointer">
          <img
            src={userImage}
            className="size-12 sm:ml-5 ml-2 border-2 border-[#f13919] rounded-full cursor-pointer"
          />
          <div className="hidden md:block">
            <h1 className="">Fletch Skinner</h1>
            <span className="">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
