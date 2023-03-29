import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Protfolio from "../../pages/Protfolio";
import Service from "../../pages/Service";
import SingleBlog from "../blog/SingleBlog";
import Footer from "../footer/Footer";
import Nav from "../Nav/Nav";
import SinglePortfolio from "../portfolio/SinglePortfolio";
import Ai from "../services/servicepage/Ai";
import AppDev from "../services/servicepage/AppDev";
import Iot from "../services/servicepage/Iot";
import WebDev from "../services/servicepage/WebDev";

const Routing = () => {
  return (
    <>
    <Nav />
      <Routes>
        <Route element={<Home/>} path="/*" />
        <Route element={<About/>} path="/about" />
        <Route element={<Contact/>} path="/contact" />
        <Route element={<Blog/>} path="/blog" />
        <Route element={<SingleBlog/>} path="/blog/:id" />
        <Route element={<Service/>} path="/services" />
        <Route element={<WebDev/>} path="/web" />
        <Route element={<AppDev/>} path="/app" />
        <Route element={<Iot/>} path="/iot" />
        <Route element={<Ai/>} path="/ai" />
        <Route element={<Protfolio/>} path="/portfolio" />
        <Route element={<SinglePortfolio/>} path="/portfolio/:id" />
      </Routes>
      <Footer />
    </>
  )
}

export default Routing