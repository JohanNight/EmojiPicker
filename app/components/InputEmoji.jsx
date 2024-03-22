import React, { useState } from "react";
import Emoji from "react-input-emoji";
import { FaRegSmile } from "react-icons/fa";
import Picker from "emoji-picker-react";


const Input = () => {
  const [text, setText] = useState("");
  const [showReaction, setShowReaction] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState([]);

  const toggledSuggestedReact = () => {
    setShowReaction(!showReaction);
  };

  const handleReaction = (clickedEmoji, event) => {
  setSelectedEmoji(clickedEmoji);
  setShowReaction(false);
  };



  return (
    <div className="bg-white w-full h-screen">
      {/* Emoji */}
      <h4>Emoji Picker</h4>
      <br />
      <br />
      <br />
      <br />
      <Emoji
        value={text}
        onChange={setText}
        cleanOnEnter
        placeholder="Type a message"
      />
      <br />
      <br />
      <br />
      <br />

      {/* Picker */}
      <div className="flex">
        <div className=" w-96 h-20 rounded-full border-2">
        <p className="placement-end">
          {selectedEmoji.emoji}
        </p>
        </div>
        <button type="button" onClick={toggledSuggestedReact}>
          <FaRegSmile size={25} />
        </button>
        {showReaction && (
          <Picker
            reactionsDefaultOpen={true}
            onReactionClick={handleReaction}
            emojiStyle="native"
          />
        )}
      </div>
    </div>
  );
};

export default Input;
