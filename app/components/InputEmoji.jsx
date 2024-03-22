"use client";
import Image from "next/image";
import React, { useState } from "react";
import Emoji from "react-input-emoji";
import { FaRegSmile } from "react-icons/fa";
import Picker from "emoji-picker-react";

const Input = () => {

  const message=[{
    reactions:" "
  }];


  const [text, setText] = useState("");
  const [showReaction, setShowReaction] = useState(true);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactions, setReactions] = useState([]);

  const toggledSuggestedReact = () => {
    setShowReaction(!showReaction);
  };

  const handleReaction = (clickedEmoji, event) => {
  setSelectedEmoji(clickedEmoji);
  console.log(selectedEmoji);
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
            // onReactionClick={handleReaction}
            onEmojiClick={(emojiData) => handleReaction(emojiData)}
            emojiStyle="native"
          />
        )}
        <p>
          {selectedEmoji.length}
        </p>
      </div>
    </div>
  );
};

export default Input;
