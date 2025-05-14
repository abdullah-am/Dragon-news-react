import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us On</h2>
        <div className="join join-vertical w-full">
          <button className="btn join-item gap-2 bg-base-100 justify-start">
            <FaFacebook />
                Facebook
          </button>
          <button className="btn join-item gap-2 bg-base-100 justify-start">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn join-item gap-2 bg-base-100 justify-start">
            <FaInstagram />
            Instagram
          </button>
        </div>
    </div>
  );
};

export default FindUs;
