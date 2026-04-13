import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitch, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/" },
  { icon: <FaYoutube />, path: "https://youtube.com/" },
  { icon: <FaTwitch />, path: "https://twitch.tv/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;