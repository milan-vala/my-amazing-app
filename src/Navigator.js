import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

const Navigator = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/profile/:username" element={<Profile />} /> */}
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
    );
};

export default Navigator;