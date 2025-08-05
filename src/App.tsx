import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <main className="font-kanit w-[92%] md:w-[85%] lg:w-[75%] max-w-[1024px] mx-auto">
      <Navbar />
      <Product />
    </main>
  );
}

export default App;
