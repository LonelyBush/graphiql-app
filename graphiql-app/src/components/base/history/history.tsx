import { useEffect } from 'react';
import { useNavigate, Link } from '@remix-run/react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useAuth from '../../../utils/hooks/useAuth-hook';
import { RootState } from '../../../lib/store';
import Button from '../../ui/button/button';
import styles from './history.module.scss';

function History() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate('/');
    } else {
      navigate('/history');
    }
  }, [user, loading, navigate]);

  const restHistory = useSelector(
    (state: RootState) => state.restLinks.restLinks,
  );

  const graphiQLHistory = useSelector(
    (state: RootState) => state.graphiQLLinks.graphiQLLinks,
  );

  const sortedRequests = [...restHistory, ...graphiQLHistory].sort((a, b) => {
    const dateA = new Date(a.data).getTime();
    const dateB = new Date(b.data).getTime();

    return dateA - dateB;
  });

  return (
    <div className={styles.historyBlock}>
      {sortedRequests.length === 0 ? (
        <>
          <p>{t('NoHistory')} </p>
          <div className={styles.buttonBlock}>
            {' '}
            <Button btnType="button" to="/rest-full">
              {t('RESTClient')}
            </Button>
            <Button btnType="button" to="/graphiql">
              {t('GraphiQLClient')}
            </Button>
          </div>
        </>
      ) : (
        <>
          {' '}
          <h2>{t('HistoryRequests')}</h2>
          <div className={styles.linksBlock}>
            {sortedRequests.map((result, index) => (
              /* eslint-disable react/no-array-index-key */
              <div
                key={result.requestData.method + result.urlPage + index}
                className={styles.resultBlock}
              >
                <p
                  key={result.requestData.method + index}
                  className={styles.method}
                >
                  {result.requestData.method}
                </p>
                <Link to={`/${result.urlPage}`} key={result.urlPage + index}>
                  {`${window.location.origin}/${result.urlPage}`}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default History;
