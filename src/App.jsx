import { Box } from "@mui/material";

import SidebarWidget from "./widgets/sidebar/sidebarWidget"

import Navbar from "./widgets/navbar/navbar";

import ChannelBar from "./widgets/channelBar/channelsBar";
import ContentWidget from "./widgets/content/contentWidget";
function App() {
  return (
    <Box width="100vw" display="flex">
      <Box flexBasis="1vw">
        <SidebarWidget />
      </Box>
      <Box flexBasis="99vw">
        <Navbar />
        <Box display="flex">
          <Box flexBasis="15vw">
            <ChannelBar />
          </Box>
          <Box flexBasis="84vw">
            <ContentWidget />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App
