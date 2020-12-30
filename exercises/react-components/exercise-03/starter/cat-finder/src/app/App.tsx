import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={["cf", styles.cf].join(' ')}>
      <header className={["cf-header", styles.cfHeader].join(' ')}>
        CatFinder
      </header>
      <div className={["cf-content", styles.cfContent].join(' ')}>
        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={["cf-card", styles.cfCard].join(' ')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>
      </div>
      <aside className={["cf-sidebar", styles.cfSidebar].join(' ')}>
        Sidebar
      </aside>
      <footer className={["cf-footer", styles.cfFooter].join(' ')}>&copy; 2019</footer>
    </div>
  );
}

export default App;
