import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UpperNavbar from "./components/Navbar/upperNavbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/Contactus";
import Projects from "./pages/Projects/Projects";
import GoToTop from "./GoToTop";
import MainNavBar from "./components/Navbar/mainNavBar";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import SingleProject from "./pages/Projects/SingleProject";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GoToTop />
        <UpperNavbar />
        <MainNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:singleBlog" element={<SingleBlog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/singleProject" element={<SingleProject />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsAndCondition" element={<TermsAndCondition />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
