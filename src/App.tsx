import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";

function App() {
  return (
    <main className="font-kanit w-[92%] md:w-[85%] lg:w-[75%] max-w-[1024px] mx-auto">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </main>
  );
}

export default App;
