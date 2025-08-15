import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router";

function MobileNav({ links }: { links: { path: string; label: string }[] }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsNavOpen(true)}
        className="block md:hidden p-1.5 cursor-pointer hover:bg-neutral-200 duration-150 ease-in-out rounded-full"
      >
        <RiMenu2Fill className="size-5" />
      </button>

      {isNavOpen && (
        <div className="absolute z-[999] inset-0 min-h-dvh w-full bg-white shadow-xl p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Menu</h2>
            <button
              onClick={() => setIsNavOpen(false)}
              className="cursor-pointer p-1 hover:bg-neutral-200 duration-150 ease-in-out rounded-full"
            >
              <IoClose className="size-6" />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {links.map((link) => (
              <li key={link.label} className="text-4xl hover:underline">
                <Link to={link.path} onClick={() => setIsNavOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
