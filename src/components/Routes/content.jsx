import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// info
import Home from "../../pages/info/home";
import About from "../../pages/info/about";

// general
import General from "../../pages/general/general";

// projects
import AnyAnime from "../../pages/projects/anyanime";
import Image2Url from "../../pages/projects/image2url";
import DiscordCards from "../../pages/projects/discordcards";
import Elina from "../../pages/projects/elina";
import Cordle from "../../pages/projects/cordle";
import Timely from "../../pages/projects/timely";
import Emogit from "../../pages/projects/emogit";
import Minikey from "../../pages/projects/minikey";
import Type3d from "../../pages/projects/type3d";
import Pixit from "../../pages/projects/pixit";

const Content = () => {
    return (
        <Routes>
            {/* info */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* general */}
            <Route path="/general" element={<General />} />

            {/* projects */}
            <Route path="/anyanime" element={<AnyAnime />} />
            <Route path="/image2url" element={<Image2Url />} />
            <Route path="/discordcards" element={<DiscordCards />} />
            <Route path="/elina" element={<Elina />} />
            <Route path="/cordle" element={<Cordle />} />
            <Route path="/timely" element={<Timely />} />
            <Route path="/emogit" element={<Emogit />} />
            <Route path="/minikey" element={<Minikey />} />
            <Route path="/type3d" element={<Type3d />} />
            <Route path="/pixit" element={<Pixit />} />
        </Routes>
    );
}

export default Content;