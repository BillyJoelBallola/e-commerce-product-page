import { Link } from "react-router";
import Cart from "./Cart";

function Navbar() {
  const links = [
    { label: "Trending", path: "/" },
    { label: "Men", path: "/" },
    { label: "Women", path: "/" },
    { label: "Kids", path: "/" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 right-0">
      <div className="w-[92%] md:w-[85%] lg:w-[75%] max-w-[1024px] mx-auto bg-white pt-2 md:py-2 border-b border-neutral-900">
        <div className="flex items-center justify-between">
          <a href="/" className="size-12 grid place-items-center">
            <img src="/logo.png" alt="logo-img" />
          </a>
          <ul className="hidden md:flex items-center gap-4 text-sm">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Cart />
        </div>

        {/* mobile view */}
        <ul className="flex md:hidden items-center justify-center gap-2 text-sm border-t">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
