import { dummyTweets } from "../static/dummyData";
import { TweetActions } from "./TweetActions";
import "../styles/feed.css";

export const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const isBob = tweet.username === "Bob";

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src={tweet.picture} alt="profile-img" />
            </div>
            <div>
              <div className="tweet__content">
                <div className="tweet__userInfo">
                  {/* TODO : 유져 이름이 있어야 합니다. */}
                  <span
                    className={`tweet__username ${
                      isBob && "tweet__username--purple"
                    }`}
                  >
                    {tweet.username}
                  </span>
                  {/* TODO : 이름이 "Bob"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}

                  {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                  <span className="tweet__createdAt">{tweet.createdAt}</span>
                </div>
                <div className="tweet__message">{tweet.content}</div>
              </div>

              <TweetActions />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
