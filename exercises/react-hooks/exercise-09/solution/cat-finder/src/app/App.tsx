import { BrowserRouter } from 'react-router-dom';
import cn from 'classnames';
import { Slide, ToastContainer, ToastContainerProps } from 'react-toastify';
import { RootRoutes } from './routes';
import style from './App.module.scss'
import { CfHeader } from './components/CfHeader';
import { CfSideBar } from './components/CfSideBar';
import { CfFooter } from './components/CfFooter';

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer {...getToastContainerProps()} />
    <div className={cn('cf', style.cf)}>
      <header className={cn('cf-header', style.cfHeader)}>
        <CfHeader/>
      </header>
      <div className={cn('cf-content', style.cfContent)}>
        {<RootRoutes />}
      </div>
      <aside className={cn('cf-sidebar', style.cfSidebar)}>
        <CfSideBar/>
      </aside>
      <footer className={cn('cf-footer', style.cfFooter)}>
        <CfFooter/>
      </footer>
    </div>
  </BrowserRouter>
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
