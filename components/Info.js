import React from "react";

function Info() {
  return (
    <div>
      <img
        src="/images/profile.jpg"
        className="rounded-full mx-auto my-4 size-40"
      />
      <h1 className="font-medium text-2xl text-white flex justify-center">
        Sai Pranith Guddanti
      </h1>
      <h2 className="font-medium text-green-600 flex justify-center">
        Vijayawada, India
      </h2>
      <p className="font-medium text-white flex pt-2 justify-center ">
        "Full-Stack Developer"
      </p>
    </div>
  );
}

export default Info;
