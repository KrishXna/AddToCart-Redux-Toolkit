import logo from "./logo.svg";
import "./App.css";
import DivScroller from "./Projects/DivScroller";
import SideSlider from "./Projects/sideSlider";
import Resizeable from "./Projects/Resizeable";
import StickyNotes from "./Projects/StickyNotes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Projects/LandingPage";
import LoginForm from "./Projects/LoginForm";
import Parallax from "./Projects/Parallax";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DivScroller />} />
          <Route path="/sideslider" element={<SideSlider />} />
          <Route path="/resizeable" element={<Resizeable />} />
          <Route path="/stickynotes" element={<StickyNotes />} />
          <Route path="/page" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/parallax" element={<Parallax />} />

          {/* <LandingPage /> */}

          {/* <DivScroller />
          <SideSlider />
          <Resizeable />
          <StickyNotes /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
