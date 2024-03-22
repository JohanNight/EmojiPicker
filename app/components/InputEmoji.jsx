"use client";
import Image from "next/image";
import React, { useState } from "react";
import Emoji from "react-input-emoji";
import { FaRegSmile } from "react-icons/fa";
import Picker from "emoji-picker-react";

const Input = () => {
  const message = [
    {
      reactions: " ",
    },
  ];

  const [text, setText] = useState("");
  const [showReaction, setShowReaction] = useState(true);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [reactions, setReactions] = useState([]);

  const toggledSuggestedReact = () => {
    setShowReaction(!showReaction);
  };

  const handleReaction = (emojiData) => {
    console.log(emojiData);
    setSelectedReaction(emojiData);
    setReactions([...reactions, emojiData]);
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
        <div className=" w-96 h-20 rounded-full border-2"></div>
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
        <br />
        {selectedReaction && (
          <div>
            <Image
              src={selectedReaction.imageUrl}
              width={10}
              height={10}
              alt="emoji"
            />
            <p>{selectedReaction.emoji}</p>
          </div>
        )}
        {reactions.map((reaction) => (
          <>
            <p>{reaction.emoji}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Input;
