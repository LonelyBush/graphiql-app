import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import styles from './history.module.scss';

function History() {
  const restHistory = useSelector(
    (state: RootState) => state.restLinks.restLinks,
  );
  return (
    <div className={styles.historyBlock}>
      <h2>History</h2>
      {restHistory.map((url, index) => (
        /* eslint-disable react/no-array-index-key */
        <p key={`rest${url + index}`}>{url}</p>
      ))}
    </div>
  );
}

export default History;
