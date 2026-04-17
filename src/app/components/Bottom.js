"use client";

import { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { useRouter, usePathname } from "next/navigation";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Bottom() {
  
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
  } = useContext(GlobalContext);

  const pathname = usePathname();
  const router = useRouter();
  const scrollRef = useRef(null);
  const activeIndex = menuItem.findIndex(({ href }) => href === pathname);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 150, behavior: "smooth" });
  };

  return (
    <Paper
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      elevation={3}
    >
      <IconButton
        size="small"
        onClick={() => scroll(-1)}
        sx={{ flexShrink: 0 }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <BottomNavigation
          showLabels
          value={activeIndex}
          onChange={(_, newValue) => router.push(menuItem[newValue].href)}
          sx={{
            width: `${menuItem.length * 80}px`,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {menuItem.map(({ text, icon }) => (
            <BottomNavigationAction
              key={text}
              label={text}
              icon={icon}
              sx={{
                minWidth: 72,
                flexShrink: 0,
                "&.Mui-selected": {
                  backgroundColor: "#00a76f1f",
                  color: "primary.main",
                  "& .MuiSvgIcon-root": { color: "primary.main" },
                },
              }}
            />
          ))}
        </BottomNavigation>
      </div>

      <IconButton size="small" onClick={() => scroll(1)} sx={{ flexShrink: 0 }}>
        <ChevronRightIcon />
      </IconButton>
    </Paper>
  );
}
