/* eslint-disable react/no-array-index-key */
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { GoTrash } from 'react-icons/go';
import Button from '../../ui/button/button';
import styles from './headers-redactor-style.module.scss';
import searchParamURLConverter from '../../../utils/search-params-converter/search-params-converter';

function HeadersRedactor({
  outerSetHeader,
}: {
  outerSetHeader: React.Dispatch<SetStateAction<string>>;
}) {
  const location = useLocation();
  const creatingState = () => {
    return searchParamURLConverter(location.search);
  };
  const { t } = useTranslation();

  const [, setSearchParams] = useSearchParams();
  const [headers, setHeaders] =
    useState<{ [key: string]: string }[]>(creatingState);

  const handleClick = () => {
    setHeaders([...headers, { 'header-key': '', 'header-value': '' }]);
  };
  const getHeadersJSON = (currentHeaders: { [key: string]: string }[]) => {
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
    setSearchParams(JSON.parse(JSON.stringify(getHeadersJSON(headers))));
  }, [headers, outerSetHeader, setSearchParams, location.search]);
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
