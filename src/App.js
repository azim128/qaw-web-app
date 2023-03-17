import { Route, Routes } from "react-router-dom";
import SingleBlog from "./components/blog/SingleBlog";
import Footer from "./components/footer/Footer";
import Nav from "./components/Nav/Nav";
import SinglePortfolio from "./components/portfolio/SinglePortfolio";
import Ai from "./components/services/servicepage/Ai";
import AppDev from "./components/services/servicepage/AppDev";
import Iot from "./components/services/servicepage/Iot";
import WebDev from "./components/services/servicepage/WebDev";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Protfolio from "./pages/Protfolio";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<SingleBlog />} path="/blog/:id" />
        <Route element={<Service/>} path="/services" />
        <Route element={<WebDev />} path="/web" />
        <Route element={<AppDev />} path="/app" />
        <Route element={<Iot />} path="/iot" />
        <Route element={<Ai />} path="/ai" />
        <Route element={<Protfolio />} path="/portfolio" />
        <Route element={<SinglePortfolio />} path="/portfolio/:id" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
