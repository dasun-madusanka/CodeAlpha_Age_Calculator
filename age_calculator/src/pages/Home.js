import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import baby from "../images/baby.jpeg";
import young from "../images/young.jpeg";
import father from "../images/father.jpeg";
import grandfather from "../images/grandfather.jpeg";
import schoolboy from "../images/schoolboy.jpeg";
import error from "../images/error.jpeg";
import work from "../images/work.jpeg";
import { Stack } from "@mui/material";

function BirthDatePicker({ handleDoBChange }) {
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
  let years = 0;
  let months = 0;
  let days = 0;

  const [selectedDoB, setSelectedDoB] = React.useState(dayjs("2022-04-17"));

  const handleDoBChange = (newDate) => {
    setSelectedDoB(newDate);
    console.log(newDate);
  };

  const calculateAge = (dob) => {
    const now = dayjs();
    years = now.diff(dob, "year");
    dob = dob.add(years, "year");
    months = now.diff(dob, "month");
    dob = dob.add(months, "month");
    days = now.diff(dob, "day");
    return { years, months, days };
  };

  const renderImage = (age) => {
    if (age < 5 && age >= 0) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={baby}
          alt="baby"
        />
      );
    } else if (age > 5 && age < 16) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={schoolboy}
          alt="student"
        />
      );
    } else if (age > 15 && age < 28) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={young}
          alt="young"
        />
      );
    } else if (age > 27 && age < 35) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={work}
          alt="work"
        />
      );
    } else if (age > 34 && age < 60) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={father}
          alt="father"
        />
      );
    } else if (age < 0) {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={error}
          alt="error"
        />
      );
    } else {
      return (
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={grandfather}
          alt="old"
        />
      );
    }
  };

  const age = calculateAge(selectedDoB);

  const outputTop = (age) => {
    if (age >= 0) {
      return (
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: "flex", alignItems: "center", marginBottom: "2em" }}
        >
          <Typography component="div" variant="h5" sx={{ color: "#6a6a6b" }}>
            You are
          </Typography>

          <Typography
            component="div"
            variant="h3"
            sx={{ color: "#0075db", fontWeight: 600 }}
          >
            {age}
          </Typography>

          <Typography component="div" variant="h5" sx={{ color: "#6a6a6b" }}>
            years old
          </Typography>
        </Stack>
      );
    } else {
      return (
        <Typography
          component="div"
          variant="h5"
          sx={{ color: "#fc0335", marginBottom: "2em", fontWeight: 600 }}
        >
          Enter Valid Date of Birth
        </Typography>
      );
    }

  };

  function outputBottom(years, months, days){
    if (years >= 0 && months >= 0) {
      return (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2em",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Years
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              {years}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Months
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              {months}
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Days
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              {days}
            </Typography>
          </Paper>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2em",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Years
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              --
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Months
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              --
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "20%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              Days
            </Typography>
            <Divider />
            <Typography
              component="div"
              variant="h5"
              sx={{ color: "#6a6a6b" }}
            >
              --
            </Typography>
          </Paper>
        </Box>
      );
    }
  };

  return (
    <Card sx={{ display: "flex", width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
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
          <Typography
            component="div"
            variant="h4"
            sx={{ color: "#0075db", fontWeight: 600 }}
          >
            Pick your Birthday
          </Typography>
          <BirthDatePicker handleDoBChange={handleDoBChange} />
        </CardContent>
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {outputTop(age.years)}

        {renderImage(age.years)}

        {outputBottom(age.years, age.months, age.days)}
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
        height: "100vh",
        alignItems: "center",
      }}
    >
      <AgeCard />
    </Box>
  );
};

export default Home;
