import "../styles/sidebar.css";
import {
  FaSearch,
  FaBolt,
  FaUsers,
  FaEllipsisH,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegUser,
  FaRegCheckCircle,
  FaHome,
} from "react-icons/fa";
import { HiOutlineBriefcase, HiOutlineUsers } from "react-icons/hi";
import XLogo from "../assets/x-logo.svg";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <img src={XLogo} alt="x-logo" width="24px" height="24px" />

      <div className="sidebar-icons">
        <FaHome />
        <FaSearch />
        <FaRegBell />
        <FaRegEnvelope />
        <FaRegBookmark />
        <HiOutlineBriefcase />
        <FaRegUser />
        <FaRegCheckCircle />
        <FaBolt />
        <HiOutlineUsers />
        <FaEllipsisH />

        {/* TODO : 메세지 아이콘을 작성합니다. */}
        <i class="far fa-comment-dots" />
      </div>
    </section>
  );
};
