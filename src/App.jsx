import { Box } from "@mui/material";

import SidebarWidget from "./widgets/sidebar/sidebarWidget"

import ChannelNavbar from "./widgets/navbar/channelNav";
import ContentNavbar from "./widgets/navbar/contentNav";
import Navbar from "./widgets/navbar/navbar";

import ChannelBar from "./widgets/channelBar/channelsBar";
import ContentWidget from "./widgets/content/contentWidget";

import Content from "./components/Routes/content.jsx";

function App() {
  return (
    <Box width="100vw" display="flex">
      <Box flexBasis="4.5rem">
        <SidebarWidget />
      </Box>
      <Box flexBasis="99vw">
        <Box display="flex">
          <Box flexBasis="15rem">
            <ChannelNavbar />
            <ChannelBar />
          </Box>
          <Box flexBasis="84vw">
            <Navbar />
            <Content />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App
