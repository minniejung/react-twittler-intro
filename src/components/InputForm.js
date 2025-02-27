import { getRandomNumber } from "../static/dummyData";
import { FaRegImage, FaRegSmile, FaRegCalendar } from "react-icons/fa";
import { HiOutlineGif, HiOutlineListBullet } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../styles/form.css";

export const InputForm = () => {
  let randomProfilePic = `https://randomuser.me/api/portraits/women/${getRandomNumber(
    1,
    98
  )}.jpg`;

  return (
    <div className="inputWrapper">
      <div className="inputProfile">
        <img src={randomProfilePic} alt="profile-img" />
      </div>

      <div className="inputArea">
        <textarea
          className="inputTextArea"
          placeholder="What is happening?!"
        ></textarea>

        <div className="inputFormIcons">
          <FaRegImage />
          <HiOutlineGif />
          <HiOutlineListBullet />
          <FaRegSmile />
          <FaRegCalendar />
          <HiOutlineLocationMarker />
        </div>

        <button className="inputSubmitBtn">Post</button>
      </div>
    </div>
  );
};
