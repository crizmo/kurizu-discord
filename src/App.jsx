import { Box } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarWidget from "./widgets/sidebar/sidebarWidget"

import ChannelNavbar from "./widgets/navbar/channelNav";
import Navbar from "./widgets/navbar/navbar";

import ChannelBar from "./widgets/channelBar/channelsBar";

import Content from "./components/Routes/content.jsx";

import UserBar from "./widgets/userbar/userbar";

import "./App.css";

function App() {
  return (
    <Router>
      <Box width="100vw" display="flex" className="App">
        <Box flexBasis="4.5rem">
          <SidebarWidget />
        </Box>
        <Box flexBasis="99vw">
          <Box display="flex">
            <Box flexBasis="15rem">
              <ChannelNavbar />
              <ChannelBar />
            </Box>
            <Box flexBasis="90vw">
              <Navbar />
              <Box display="flex">
                <Box flexBasis="75vw">
                  <Content />
                </Box>
                <Box flexBasis="15rem">
                  <UserBar />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App
