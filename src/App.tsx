// import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/Product";
import Footer from "./components/Footer";
// import HomePage from "./pages/Home";

function App() {
  return (
    <main className="font-kanit w-[92%] md:w-[85%] lg:w-[75%] max-w-[1024px] mx-auto">
      <Navbar />
      <main className="min-h-dvh">
        <ProductPage />

        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes> */}
      </main>
      <Footer />
    </main>
  );
}

export default App;
