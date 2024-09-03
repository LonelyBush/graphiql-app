/* eslint-disable react/no-array-index-key */
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoTrash } from 'react-icons/go';
import Button from '../../ui/button/button';
import styles from './headers-redactor-style.module.scss';

type Headers = {
  ['header-key']: string;
  ['header-value']: string;
};

function HeadersRedactor({
  outerSetHeader,
}: {
  outerSetHeader: React.Dispatch<SetStateAction<string>>;
}) {
  const [headers, setHeaders] = useState<Headers[]>([]);

  const handleClick = () => {
    setHeaders([...headers, { 'header-key': '', 'header-value': '' }]);
  };
  const { t } = useTranslation();
  const getHeadersJSON = (currentHeaders: Headers[]) => {
    const headersJSON = currentHeaders.reduce(
      (acc: { [key: string]: string }, header) => {
        if (header['header-key']) {
          const key = header['header-key'];
          acc[key] = header['header-value'];
        }
        return acc;
      },
      {},
    );
    return headersJSON;
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.currentTarget;
    const updateHeaders = headers.map((header, i) => {
      return i === index ? { ...header, [name]: value } : header;
    });
    setHeaders(updateHeaders);
  };
  const handleDelete = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };
  useEffect(() => {
    outerSetHeader(JSON.stringify(getHeadersJSON(headers)));
  }, [headers, outerSetHeader]);
  return (
    <div className={styles.headersWrapper}>
      <Button btnType="button" onClick={handleClick}>
        {t('AddHeader')}
      </Button>
      {headers.length > 0 && (
        <div className={styles.tableHeaders}>
          <p>{t('Key')}</p>
          <p>{t('Value')}</p>
        </div>
      )}
      <div className={styles.headersList}>
        {headers.map((header, index) => {
          return (
            <div className={styles.inputSection} key={`index-id-${index}`}>
              <input
                className={styles.inputStyle}
                type="text"
                name="header-key"
                value={header['header-key']}
                onChange={(e) => {
                  handleInputChange(index, e);
                }}
              />
              <input
                className={styles.inputStyle}
                type="text"
                name="header-value"
                value={header['header-value']}
                onChange={(e) => {
                  handleInputChange(index, e);
                }}
              />
              <button
                type="button"
                className={styles.goTrashIcon}
                onClick={() => {
                  handleDelete(index);
                }}
              >
                <GoTrash color="#e9c2c5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeadersRedactor;
