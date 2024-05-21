import React, { useState } from 'react';
import Index from '../components/Index';
import New from '../components/New';
import mainPage from '../components/mainPage';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'index' && <Index navigateToPage={navigateToPage} />}
      {activePage === 'new' && <New navigateToPage={navigateToPage} />}
      {/* {activePage === 'mainPage' && <New navigateToPage={navigateToPage} />} */}
    </>
  );
}
