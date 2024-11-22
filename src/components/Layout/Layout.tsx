import * as React from 'react';
import { PropsWithChildren } from 'react';
import NavBarAdmin from '../NavBar/NavBarAdmin/NavBarAdmin';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <NavBarAdmin />
      </header>
      <main className='container mt-4'>
        {children}
      </main>
    </>
  );
};

export default Layout;