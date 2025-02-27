import "../styles/sidebar.css";
import {
  FaSearch,
  FaBolt,
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
import { useState } from "react";
import { dummyNotice } from "../static/dummyData";

export const Sidebar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <section className="sidebar">
        <img src={XLogo} alt="x-logo" width="24px" height="24px" />

        <div className="sidebar-icons">
          <FaHome />
          <FaSearch />
          {/* <FaRegBell /> */}
          <div className="alert-div" onClick={toggleNotifications}>
            <div className="alert" />
            <i class="far fa-bell" id="alert-icon" />
          </div>
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

      {showNotifications && (
        <>
          <div
            className="notificationOverlay"
            onClick={toggleNotifications}
          ></div>

          <div className="notificationModal">
            <div className="notificationHeader">
              <h3>Notifications</h3>
              <button className="closeBtn" onClick={toggleNotifications}>
                X
              </button>
            </div>

            <ul className="notificationContent">
              {dummyNotice.map((notice) => (
                <li className="notificationItem" key={notice.id}>
                  <div className="notifInfo">
                    <span>🔔</span>
                    <p className="notifUserName">{notice.username}</p>
                    <p className="notifDate">
                      {new Date(notice.createdAt).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                  <p className="notifContent">{notice.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
