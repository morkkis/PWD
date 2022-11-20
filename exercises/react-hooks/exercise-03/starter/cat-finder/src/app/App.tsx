import cn from 'classnames';
import styles from './App.module.scss';

function App() {
  return (
    <div className={cn('cf', styles.cf)}>
      <header className={cn('cf-header', styles.cfHeader)}>
        CatFinder
      </header>
      <div className={cn('cf-content', styles.cfContent)}>
        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>

        <div className={cn('cf-card', styles.cfCard)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
        </div>
      </div>
      <aside className={cn('cf-sidebar', styles.cfSidebar)}>
        Sidebar
      </aside>
      <footer className={cn('cf-footer', styles.cfFooter)}>&copy; 2019</footer>
    </div>
  );
}

export default App;
