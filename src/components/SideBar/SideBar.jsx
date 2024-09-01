/* eslint-disable react/prop-types */
import "./SideBar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { v4 as uuidv4 } from "uuid";

function AsideHeader({ showSideBar }) {
  const { newChat } = useContext(Context);
  return (
    <div className="asideHeader">
      <span
        onClick={showSideBar}
        className="material-symbols-outlined collapseBtn"
      >
        menu
      </span>
      <button onClick={() => newChat()} className="newChatBtn">
        <span className="material-symbols-outlined">add</span>
        <span>New Chat</span>
      </button>
    </div>
  );
}

function RecentChat({ index, prompt }) {
  const [activeChat, setActiveChat] = useState(null);
  const [updateChat, setUpdateChat] = useState(false);
  const [pinnedChats, setPinnedChats] = useState([]); // Array to store pinned chat indices

  const { onSent, setCurrentPrompt } = useContext(Context);

  const handleSubmit = (prompt) => {
    setCurrentPrompt(prompt);
    onSent(prompt);
  };

  const handleTogglePinChat = (index) => {
    const isPinned = pinnedChats.includes(index); // Check if chat is already pinned
    setPinnedChats(
      (prevPinnedChats) =>
        isPinned
          ? prevPinnedChats.filter((pinnedIndex) => pinnedIndex !== index) // Unpin
          : [...prevPinnedChats, index] // Pin
    );
  };

  const handleToggleUpdateOptions = (index) => {
    setActiveChat(index);
    setUpdateChat(!updateChat);
  };

  return (
    <li className={`recentChat recentChat${index + 1}`}>
      <span className="material-symbols-outlined">chat_bubble</span>
      <h4 onClick={() => handleSubmit(prompt)} className="chatTitle">
        {prompt.length > 23 ? `${prompt.slice(0, 23)}...` : prompt}
      </h4>
      <button
        onClick={() => handleToggleUpdateOptions(index)}
        className={`updateBtn ${
          pinnedChats.includes(index) ? "pinnedChat" : ""
        }`}
      >
        <span className="material-symbols-outlined">
          {pinnedChats.includes(index) ? "keep" : "more_vert"}
        </span>
      </button>
      {activeChat === index && updateChat && (
        <div className="updateOptions">
          <button
            onClick={() => handleTogglePinChat(index)}
            className="pinChat"
          >
            <span className="material-symbols-outlined">
              {pinnedChats.includes(index) ? "keep_off" : "keep"}
            </span>
            <span className="text">
              {pinnedChats.includes(index) ? "Unpin" : "Pin"}
            </span>
          </button>
          <button className="renameChat">
            <span className="material-symbols-outlined">edit</span>
            <span className="text">Rename </span>
          </button>
          <div className="divider" />
          <button className="deleteChat">
            <span className="material-symbols-outlined">delete</span>
            <span className="text">Delete </span>
          </button>
        </div>
      )}
    </li>
  );
}

function ShowMoreChats({ handleShowMore }) {
  return (
    <li onClick={handleShowMore} className="showMoreChats">
      <span className="material-symbols-outlined">keyboard_arrow_down</span>
      <span>Show more</span>
    </li>
  );
}

function LoadMoreChats({ handleLoadMore }) {
  return (
    <li onClick={handleLoadMore} className="loadMoreChats">
      <span className="material-symbols-outlined">more_horiz</span>
      <span>load more</span>
    </li>
  );
}

function AsideContent() {
  let [showMore, setShowMore] = useState(false);
  let [chatToShow, setShowChatToShow] = useState(5);

  const handleShowMore = () => {
    console.log("working");
    setShowMore(!showMore);
    setShowChatToShow(
      showMore ? (recentPrompts.length >= 10 ? 10 : recentPrompts.length) : 5
    );
  };

  const handleLoadMore = () => {
    setShowChatToShow(chatToShow + 5);
  };

  const { recentPrompts } = useContext(Context);

  return (
    <div className="asideContent">
      <span className="title">Recent</span>
      <ul className="recentChatList">
        {recentPrompts.slice(0, chatToShow).map((prompt, index) => (
          <>
            <RecentChat key={uuidv4()} index={index} prompt={prompt} />
            {recentPrompts.length > 5 && index + 1 === 5 && (
              <ShowMoreChats key={uuidv4()} handleShowMore={handleShowMore} />
            )}
          </>
        ))}

        {console.log(chatToShow)}

        {chatToShow >= 10 && recentPrompts.length > chatToShow && (
          <LoadMoreChats key={uuidv4()} handleLoadMore={handleLoadMore} />
        )}
      </ul>
    </div>
  );
}

function AsideFooter() {
  return (
    <div className="asideFooter">
      <div className="chatOptions">
        <div className="chatHelp">
          <span className="material-symbols-outlined">help</span>
          <span>Help</span>
        </div>
        <div className="chatHistory">
          <span className="material-symbols-outlined">history</span>
          <span>Activity</span>
        </div>
        <div className="chatSettings">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </div>
      </div>
      <div className="chatLocation">
        <span className="material-symbols-outlined">circle</span>
        <div>
          <span>Chak 98/DNB, Pakistan</span>
          <p>
            <span>Based on your places (Home)</span>
            <span> • </span>
            <span>Update location</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  let [showSideBar, setShowSideBar] = useState(false);

  return (
    <aside className={`sideBar ${showSideBar ? "showSidebar" : "hideSidebar"}`}>
      <AsideHeader showSideBar={() => setShowSideBar(!showSideBar)} />
      <AsideContent />
      <AsideFooter />
    </aside>
  );
}

export default SideBar;
