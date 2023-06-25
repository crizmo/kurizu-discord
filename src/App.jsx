import { Box } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// info
import Home from "./pages/info/home";
import Announcements from "./pages/info/announcements";
import About from "./pages/info/about";

// general
import General from "./pages/general/general";

// projects
import AnyAnime from "./pages/projects/anyanime";
import Image2Url from "./pages/projects/image2url";
import DiscordCards from "./pages/projects/discordcards";
import Elina from "./pages/projects/elina";
import Cordle from "./pages/projects/cordle";
import Timely from "./pages/projects/timely";
import Emogit from "./pages/projects/emogit";
import Minikey from "./pages/projects/minikey";
import Type3d from "./pages/projects/type3d";
import Pixit from "./pages/projects/pixit";

import SidebarWidget from "./widgets/sidebar/sidebarWidget"

import ChannelNavbar from "./widgets/navbar/channelNav";
import Navbar from "./widgets/navbar/navbar";

import ChannelBar from "./widgets/channelBar/channelsBar";

// import Content from "./components/Routes/content.jsx";
import MessageBar from "./widgets/messagebar/messagebar";

import UserBar from "./widgets/userbar/userbar";


import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import { useState } from "react";

import "./App.css";

const Content = () => {
  return (
    <Routes>
      {/* info */}
      <Route path="/" element={<Home />} />
      <Route path="/announcements" element={<Announcements />} />
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
};

function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [navTitle, setNavTitle] = useState("Home");

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenRight: false,
  });

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      console.log('swipe', isLeftSwipe ? 'left' : 'right')
      if (isLeftSwipe) {
        setState({ isPaneOpenRight: true });
      } else {
        setState({ isPaneOpenLeft: true });
      }
    }
  }

  if (window.innerWidth < 800) {
    if (!isMobile) {
      setIsMobile(true);
    }
  }

  return (
    // <Router>
    <div>
      <BrowserRouter>
        {!isMobile ? (
          <Box width="100vw" display="flex" className="App" overflow="hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Box flexBasis="4.5rem" className="sidebar">
              <SidebarWidget />
            </Box>
            <Box flexBasis="99vw">
              <Box display="flex" >
                <Box flexBasis={!isMobile ? "15rem" : null} >
                  <ChannelNavbar />
                  <ChannelBar setNavTitle={setNavTitle} />
                </Box>
                <Box flexBasis="90vw" overflow="auto" bgcolor="#2f3136">
                  <Navbar navTitle={navTitle} />
                  <Box display="flex">
                    <Box flexBasis="75vw">
                      <Routes>
                        {/* info */}
                        <Route path="/" element={<Home />} />
                        <Route path="/announcements" element={<Announcements />} />
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
                      <MessageBar />
                    </Box>
                    <Box flexBasis="15rem">
                      <UserBar />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box width="100vw" display="flex" className="App" overflow="hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <Box flexBasis="100vw" bgcolor="#2f3136" overflow={isMobile ? "hidden" : "auto"}>
              <Navbar navTitle={navTitle} />
              <Box display="flex">
                <Box flexBasis="100vw">
                  <Routes>
                    {/* info */}
                    <Route path="/" element={<Home />} />
                    <Route path="/announcements" element={<Announcements />} />
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
                  <MessageBar />
                </Box>
              </Box>
            </Box>
            <SlidingPane
              isOpen={state.isPaneOpenLeft}
              from="left"
              width="80vw"
              onRequestClose={() => setState({ isPaneOpenLeft: false })}
              className="sliding-pane-left"
              hideHeader={true}
            >
              <Box flexBasis="100vw" bgcolor="#2f3136" overflow={isMobile ? "hidden" : "auto"}>
                <Box display="flex" flexDirection="column" height="100vh" sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <Box display="flex" >
                    <Box flexBasis="5rem">
                      <SidebarWidget />
                    </Box>
                    <Box flexBasis="95.5vw">
                      <Box flexBasis={null} >
                        <ChannelNavbar />
                        <ChannelBar setNavTitle={setNavTitle} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SlidingPane>
            <SlidingPane
              isOpen={state.isPaneOpenRight}
              from="right"
              width="70vw"
              onRequestClose={() => setState({ isPaneOpenRight: false })}
              className="sliding-pane-right"
              hideHeader={true}
            >
              <Box flexBasis="100vw" bgcolor="#fff" onClick={() => setState({ isPaneOpenRight: false })}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                <Box display="flex" >
                  <Box flexBasis="70vw">
                    <UserBar />
                  </Box>
                </Box>
              </Box>
            </SlidingPane>
          </Box>
        )}
      </BrowserRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
