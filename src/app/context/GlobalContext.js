'use client';

import { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';

import jsonProduct from '../data/product.json';

import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dbProduct, setDbProduct] = useState(jsonProduct);

  const [selectedMonth, setSelectedMonth] = useState(dayjs());
  const [selectedWeek, setSelectedWeek] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedRange, setSelectedRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }]);

  const [menuItem, setMenuItem] = useState([
    { text: 'Home', icon: <HomeIcon />, href: '/' },
    { text: 'Settings', icon: <CalendarTodayOutlinedIcon />, href: '/pages/Settings' },

  ]);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        mobileDevice,
        setMobileDevice,
        isLoading,
        setIsLoading,

        dbProduct,
        setDbProduct,

        selectedDate,
        setSelectedDate,
        selectedWeek,
        setSelectedWeek,
        selectedMonth,
        setSelectedMonth,
        selectedRange,
        setSelectedRange,

        menuItem, setMenuItem,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}