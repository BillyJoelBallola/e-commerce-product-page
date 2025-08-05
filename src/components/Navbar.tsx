import Cart from "./Cart";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 border-b border-neutral-900">
      <a href="/" className="text-2xl font-bold">
        sneakers
      </a>
      <Cart />
    </nav>
  );
}

export default Navbar;
