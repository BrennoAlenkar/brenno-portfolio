import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/https:/BrennoAlenkar" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/https:/brenno-alencar-955460256/" },
  { icon: <FaInstagram />, path: "https://youtube.com/" },
  { icon: <FaDiscord />, path: "https://twitch.tv/" },
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