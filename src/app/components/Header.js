"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "../context/GlobalContext";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerDay } from "@mui/x-date-pickers/PickerDay";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Paper from "@mui/material/Paper";

const DRAWER_WIDTH = 240;

export default function Header() {
  const {
    dbProduct,
    darkMode,
    setDarkMode,
    mobileDevice,
    selectedDate,
    setSelectedDate,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    selectedRange,
    setSelectedRange,
    menuItem,
    setMenuItem,

    headerFontDarkColor,
    setHeaderFontDarkColor,
    headerFontLightColor,
    setHeaderFontLightColor,
    headerFontSize,
    setHeaderFontSize,
    headerBackgroundSelected,
    setHeaderBackgroundSelected,

    logoSelected,
    setLogoSelected,
    logoSize,
    setLogoSize,
    logoBackgroundSelected,
    setLogoBackgroundSelected,

    logoTitle,
    setLogoTitle,
    logoTitleSize,
    setLogoTitleSize,
    logoTitleDarkColor,
    setLogoTitleDarkColor,
    logoTitleLightColor,
    setLogoTitleLightColor,

    logoSubTitle,
    setLogoSubTitle,
    logoSubTitleSize,
    setLogoSubTitleSize,
    logoSubTitleDarkColor,
    setLogoSubTitleDarkColor,
    logoSubTitleLightColor,
    setLogoSubTitleLightColor,
  } = useContext(GlobalContext);

  const pathname = usePathname();
  const router = useRouter();
  const anchorRef = useRef(null);

  const isHome = pathname === "/";
  const showBackArrow = !isHome && mobileDevice;

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        //backgroundColor: "#00a76f1f",
        //backdropFilter: "blur(4px)",
        //borderBottom: "1px solid",
        //borderColor: "divider",
        left: { xs: 0, md: DRAWER_WIDTH },
        right: 0,
        width: { xs: "100%", md: `calc(100% - ${DRAWER_WIDTH}px)` },
      }}
    >
      <Toolbar 
        sx={{ 
          padding: 0, 
          height: 70, 
          display: "flex",
          backgroundImage: `url(${headerBackgroundSelected})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Mobile Logo */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            height: 70,
            backgroundImage: `url(${logoBackgroundSelected})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingY: 0,
            paddingRight: 1,
            paddingLeft: 1,
            //borderRadius: 1,
          }}
        >
          <Image
            src={logoSelected}
            alt="Logo"
            width={logoSize.width}
            height={logoSize.height}
            style={{ objectFit: "contain" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
            <Typography
              sx={{
                fontSize: logoTitleSize,
                fontWeight: "bold",
                color: darkMode ? logoTitleLightColor : logoTitleDarkColor,
                lineHeight: 1.2,
              }}
            >
              {logoTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: logoSubTitleSize,
                color: darkMode
                  ? logoSubTitleLightColor
                  : logoSubTitleDarkColor,
                lineHeight: 1.2,
              }}
            >
              {logoSubTitle}
            </Typography>
          </Box>
        </Box>

        {/* Block 2: Header Content - Flexible width */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 70,
            paddingX: 2,
            marginLeft: { xs: 0, md: 0 },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {pathname === "/" ? "Home" : pathname.replace("/pages/", "")}
            </Typography> */}
          </Box>

          <IconButton color="primary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
