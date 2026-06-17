import { Header } from '@/components/Header/Header';
import styles from './not-found.module.css';

export default function NotFoundPage() {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.heroContent}>
          <h1 className={styles.notFoundMessage}>404 :(</h1>
          <p className={styles.notFoundText}>
            La page que vous demandez est introuvable.
          </p>
        </div>
      </Header>
    </>
  );
}
