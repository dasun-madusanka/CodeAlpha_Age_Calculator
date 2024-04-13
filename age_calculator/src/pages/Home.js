import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function BirthDatePicker({ handleDoBChange}) {
  const [selectedDoB, setSelectedDoB] = React.useState(dayjs("2022-04-17"));

  const handleDateChange = (newDate) => {
    setSelectedDoB(newDate);
    handleDoBChange(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["StaticDatePicker"]}>
        <DemoItem>
          <StaticDatePicker onAccept={handleDateChange} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

function AgeCard() {
  const theme = useTheme();

  const [selectedDoB, setSelectedDoB] = React.useState(dayjs("2022-04-17"));

  const handleDoBChange = (newDate) => {
    setSelectedDoB(newDate);
    console.log(newDate);
  }

  const calculateAge = (dob) => {
    const now = dayjs();
    const years = now.diff(dob, 'year');
    dob = dob.add(years, 'year');
    const months = now.diff(dob, 'month');
    dob = dob.add(months, 'month');
    const days = now.diff(dob, 'day');
    return { years, months, days };
  };

  const age = calculateAge(selectedDoB);

  return (
    <Card sx={{ display: "flex", width: "fit-content" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h4">
            Pick your Birthday
          </Typography>
          <BirthDatePicker handleDoBChange={handleDoBChange} />
          <p>Age: {age.years} years, {age.months} months, {age.days} days</p>
        </CardContent>
      </Box>
    </Card>
  );
}

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <AgeCard />
    </Box>
  );
};

export default Home;
