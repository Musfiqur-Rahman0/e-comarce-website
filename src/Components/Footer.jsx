import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../consents";

const Footer = () => {
  return (
    <div className=" py-10 mt-6 bg-[#003049] text-white ">
      <div className="flex gap-6 justify-center items-center">
        {SOCIAL_MEDIA_LINKS.map((data, index) => (
          <a
            key={index}
            href={data.href}
            target="_blank"
            rel="noopener
          noreferrer"
          >
            {data.icon}
          </a>
        ))}
      </div>
      <p className="text-center mt-5 text-xl tracking-tight text-[#669bbc]">
        &copy;BlackMonster. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
