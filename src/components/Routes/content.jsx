import { Routes, Route } from "react-router-dom";

// info
import Home from "../../pages/info/home";
import Anouncements from "../../pages/info/announcements";
import About from "../../pages/info/about";

// general
import General from "../../pages/general/general";
import Drawings from "../../pages/general/drawings";

// projects
import DiscordCards from "../../pages/projects/discordcards";
import Elina from "../../pages/projects/elina";
import Cordle from "../../pages/projects/cordle";
import Timely from "../../pages/projects/timely";
import Emojico from "../../pages/projects/emojico";
import Minikey from "../../pages/projects/minikey";
import Type3d from "../../pages/projects/type3d";
import Pixit from "../../pages/projects/pixit";
import Repler from "../../pages/projects/repler";
import Pptgen from "../../pages/projects/pptgen";
import StreamSavers from "../../pages/projects/streamsavers";

// NPM
import AnyAnime from "../../pages/npm/anyanime";
import Image2Url from "../../pages/npm/image2url";
import Jng from "../../pages/npm/jng";
import XlsxMongo from "../../pages/npm/xlsx-mongo";
import CustomJs from "../../pages/npm/customjs";

/* Threads */
import XlsxApi from "../../pages/npm/threads/xlsxapi";

const Content = () => {
    return (
        <Routes>
            {/* info */}
            <Route path="/" element={<Home />} />
            <Route path="/announcements" element={<Anouncements />} />
            <Route path="/about" element={<About />} />

            {/* general */}
            <Route path="/general" element={<General />} />
            <Route path="/drawings" element={<Drawings />} />

            {/* projects */}
            <Route path="/discordcards" element={<DiscordCards />} />
            <Route path="/elina" element={<Elina />} />
            <Route path="/cordle" element={<Cordle />} />
            <Route path="/timely" element={<Timely />} />
            <Route path="/streamsavers" element={<StreamSavers />} />
            <Route path="/emojico" element={<Emojico />} />
            <Route path="/minikey" element={<Minikey />} />
            <Route path="/type3d" element={<Type3d />} />
            <Route path="/pixit" element={<Pixit />} />
            <Route path="/repler" element={<Repler />} />
            <Route path="/pptgen" element={<Pptgen />} />

            {/* NPM */}
            <Route path="/anyanime" element={<AnyAnime />} />
            <Route path="/image2url" element={<Image2Url />} />
            <Route path="/xlsx-mongo" element={<XlsxMongo />} />
            <Route path="/jng" element={<Jng />} />
            <Route path="/customjs" element={<CustomJs />} />

            {/* Threads */}
            <Route path="/xlsx-mongo/api" element={<XlsxApi />} />
        </Routes>
    );
}

export default Content;