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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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
    { text: 'Account', icon: <AccountCircleOutlinedIcon />, href: '/pages/Account' },
    { text: 'Transactions', icon: <ReceiptOutlinedIcon />, href: '/pages/Transactions' },
    { text: 'Coupons', icon: <LocalOfferOutlinedIcon />, href: '/pages/Coupons' },
    { text: 'Cart', icon: <ShoppingCartOutlinedIcon />, href: '/pages/Cart' },
    { text: 'Settings', icon: <CalendarTodayOutlinedIcon />, href: '/pages/Settings' },
    { text: 'Contact', icon: <EmailOutlinedIcon />, href: '/pages/Contact' },
    { text: 'Terms', icon: <DescriptionOutlinedIcon />, href: '/pages/Terms' },
    { text: 'Privacy', icon: <DescriptionOutlinedIcon />, href: '/pages/Privacy' },
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