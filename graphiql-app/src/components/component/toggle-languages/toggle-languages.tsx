import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../../lib/slices/language-slice';
import { RootState } from '../../../lib/store';
import styles from './toggle-languages.module.scss';

function ToggleLanguages() {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const currentLanguage = useSelector(
    (state: RootState) => state.language.language,
  );
  const [isLanguageToggled, setIsLanguageToggled] = useState(currentLanguage);
  const handleClick = () => {
    const newLanguage = isLanguageToggled === 'ru' ? 'en' : 'ru';
    setIsLanguageToggled(newLanguage);
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.toggleControl}>
      <span className={styles.language}>{t('En')}</span>
      <button type="button" className={styles.toggle} onClick={handleClick}>
        <div
          className={`${styles.indicator} ${
            isLanguageToggled === 'ru' ? styles.indicatorActive : ''
          }`}
        />
      </button>
      <span className={styles.language}>{t('Ru')}</span>
    </div>
  );
}

export default ToggleLanguages;
