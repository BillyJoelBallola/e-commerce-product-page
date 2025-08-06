import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 right-0">
      <div className="w-[92%] md:w-[85%] lg:w-[75%] max-w-[1024px] mx-auto bg-white flex items-center justify-between py-4 border-b border-neutral-900">
        <a href="/" className="text-2xl font-bold">
          sneakers
        </a>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;
