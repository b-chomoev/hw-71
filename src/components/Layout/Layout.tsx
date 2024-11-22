import * as React from 'react';
import { PropsWithChildren } from 'react';
import NavBarAdmin from '../NavBar/NavBarAdmin/NavBarAdmin';
import NavBarClient from '../NavBar/NavBarClient/NavBarClient';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        {location.pathname === '/admin' ? <NavBarAdmin/> : <NavBarClient/>}
      </header>
      <main className='container mt-4'>
        {children}
      </main>
    </>
  );
};

export default Layout;