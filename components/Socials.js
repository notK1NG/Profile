import React from "react";

function Socials({ link, name }) {
  return (
    <a
      href={link}
      className="text-white flex justify-center items-center mb-4 h-10 bg-gray-500 rounded-2xl hover:bg-green-500 hover:text-black"
    >
      {name}
    </a>
  );
}

export default Socials;
