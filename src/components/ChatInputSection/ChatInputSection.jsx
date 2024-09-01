import { useContext } from "react";
import "./ChatInputSection.css";
import { Context } from "../../context/Context";

function ChatInputSection() {
  const {
    inputValue,
    setInputValue,
    recentPrompts,
    setRecentPrompts,
    setCurrentPrompt,
    onSent,
  } = useContext(Context);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setRecentPrompts([...recentPrompts, inputValue]);
    setCurrentPrompt(inputValue);
    setInputValue("");
    onSent(inputValue);
  };

  return (
    <div className="chatInputSection">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a prompt here"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <div className="actionBtns">
        <button className="uploadImages">
          <span className="material-symbols-outlined">add_photo_alternate</span>
        </button>
        <button className="useMicrophone">
          <span className="material-symbols-outlined">mic</span>
        </button>
        <button
          onClick={handleSubmit}
          className={`submitPrompt ${inputValue ? "sendPrompt" : ""}`}
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  );
}

export default ChatInputSection;
