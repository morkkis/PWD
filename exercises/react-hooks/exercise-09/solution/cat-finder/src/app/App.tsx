import React from 'react';
import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import makeRoutes from './routes'
import style from './App.module.scss'
import CfHeader from './components/CfHeader/CfHeader';
import CfSideBar from './components/CfSideBar/CfSideBar';
import CfFooter from './components/CfFooter/CfFooter';


const App: React.FC = () => (
  <React.Suspense fallback={<p>Loading...</p>}>
    <BrowserRouter>
      <ToastContainer {...getToastContainerProps()} />
      <div className={['cf', style.cf].join(' ')}>
        <header className={['cf-header', style.cfHeader].join(' ')}>
          <CfHeader/>
        </header>
        <div className={['cf-content', style.cfContent].join(' ')}>
          {makeRoutes()}
        </div>
        <aside className={['cf-sidebar', style.cfSidebar].join(' ')}>
          <CfSideBar/>
        </aside>
        <footer className={['cf-footer', style.cfFooter].join(' ')}>
          <CfFooter/>
        </footer>
      </div>
    </BrowserRouter>
  </React.Suspense>
);

function getToastContainerProps(): ToastContainerProps {
  return {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    transition: Slide,
  }
}

export default App;
