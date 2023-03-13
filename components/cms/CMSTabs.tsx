import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CMSTabs() {
  const [value, setValue] = React.useState(0);
  const [factTitle, setFactTitle] = React.useState("");
  const [factContent, setFactContent] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function submitFacts(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("here");
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Category Tabs"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Facts" {...a11yProps(0)} />
        <Tab label="Questions" {...a11yProps(1)} />
        <Tab label="Events" {...a11yProps(2)} />
        <Tab label="Recycling Services (House)" {...a11yProps(3)} />
        <Tab label="Recycling Services (Flat)" {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <form onSubmit={submitFacts}>
          <TextField
            fullWidth
            id="fact-title"
            label="Fact Title"
            variant="outlined"
            value={factTitle}
            onChange={(event) => setFactTitle(event.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            multiline
            id="fact-title"
            label="Fact Content"
            variant="outlined"
            value={factContent}
            onChange={(event) => setFactContent(event.target.value)}
          />
          <br />
          <br />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Submit
          </Button>
        </form>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>

      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
