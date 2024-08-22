import { useState } from 'react';
import styles from './toggle-languages.module.scss';

function ToggleLanguages() {
  const [isLanguageToggled, setIsLanguageToggled] = useState(false);

  const handleClick = () => {
    setIsLanguageToggled(!isLanguageToggled);
  };

  return (
    <div className={styles.toggleControl}>
      <span className={styles.language}>En</span>
      <button type="button" className={styles.toggle} onClick={handleClick}>
        <div
          className={`${styles.indicator} ${
            isLanguageToggled ? styles.indicatorActive : ''
          }`}
        />
      </button>
      <span className={styles.language}>Ru</span>
    </div>
  );
}

export default ToggleLanguages;
