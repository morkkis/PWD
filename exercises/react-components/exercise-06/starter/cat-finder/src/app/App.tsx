import React from 'react';
import { BrowserRouter } from "react-router-dom";
import makeRoutes from './routes'
import style from './App.module.scss'
import CfHeader from './components/CfHeader/CfHeader';
import CfSideBar from './components/CfSideBar/CfSideBar';
import CfFooter from './components/CfFooter/CfFooter';

export class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
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
    );
  };
}

export default App;
