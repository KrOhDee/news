import styles from '@/styles/Home.module.css';
import { Toolbar } from '@/components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>The Daily Tickle</h1>
        <h3>
          Reading the news has been shown to increase the risk of spontaneous
          debates with strangers by 65%.
        </h3>
      </div>
    </div>
  );
}
