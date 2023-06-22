import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Home from "../../pages/info/home";

const Content = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Content;