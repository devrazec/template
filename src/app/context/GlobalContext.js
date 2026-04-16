'use client';

import { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';

import jsonProduct from '../data/product.json';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dbProduct, setDbProduct] = useState(jsonProduct);

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedRange, setSelectedRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }]);

  return (
    <GlobalContext.Provider
      value={{
        darkMode,
        setDarkMode,
        mobileDevice,
        setMobileDevice,
        isLoading,
        setIsLoading,

        dbToday,
        setDbToday,
        dbYesterday,
        setDbYesterday,
        dbTomorrow,
        setDbTomorrow,

      

        dbOneDay,
        setDbOneDay,
        dbOneMonth,
        setDbOneMonth,
        dbOneYear,
        setDbOneYear,
        dbRangeDate,
        setDbRangeDate,

        dbGroupedDay,
        setDbGroupedDay,
        dbGroupedMonth,
        setDbGroupedMonth,
        dbGroupedYear,
        setDbGroupedYear,

        selectedDate,
        setSelectedDate,

        selectedMonth,
        setSelectedMonth,

        selectedYear,
        setSelectedYear,
        
        selectedRange,
        setSelectedRange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}