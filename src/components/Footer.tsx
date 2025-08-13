import { AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "react-router";

function Footer() {
  const links = [
    { label: "Trending", path: "/" },
    { label: "Men", path: "/" },
    { label: "Women", path: "/" },
    { label: "Kids", path: "/" },
  ];
  return (
    <footer className="border-t">
      <div className="py-10 md:py-12 grid gap-8 md:gap-0 md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="w-20 grid place-items-center">
            <img src="/logo.png" alt="logo-img" />
          </a>
          <span className="text-lg font-semibold">Sneaker Drop</span>
          <p className="text-neutral-700 text-sm w-1/2 md:w-full text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
            explicabo.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 mx-auto">
          <h3 className="font-semibold">Menu</h3>
          <ul className="grid items-center text-center md:text-left gap-1 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 mx-auto">
          <h3 className="font-semibold">Socials</h3>
          <ul className="flex items-center gap-2">
            <li className="p-1.5 rounded-full bg-neutral-900 text-neutral-50">
              <RiFacebookCircleLine className="size-5" />
            </li>
            <li className="p-1.5 rounded-full bg-neutral-900 text-neutral-50">
              <AiOutlineInstagram className="size-5" />
            </li>
            <li className="p-1.5 rounded-full bg-neutral-900 text-neutral-50">
              <FiYoutube className="size-5" />
            </li>
            <li className="p-1.5 rounded-full bg-neutral-900 text-neutral-50">
              <PiTiktokLogo className="size-5" />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-300 text-center py-2">
        <span className="text-sm text-neutral-500">
          © {new Date().getFullYear()} SneakerDrop, Inc. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
