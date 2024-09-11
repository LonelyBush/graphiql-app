import { Children, ReactElement, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './tabs-style.module.scss';

interface TabItemInterface {
  /* eslint-disable-next-line react/no-unused-prop-types */
  label: string;
  /* eslint-disable-next-line react/no-unused-prop-types */
  index: number;
  children: ReactNode;
}

export function TabItem({ children }: TabItemInterface): ReactElement {
  return <div>{children}</div>;
}

export function Tabs({
  defaultSelect = 0,
  children,
}: {
  defaultSelect: number;
  children: ReactElement<TabItemInterface>[];
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(defaultSelect);

  const changeTab = (newIndex: number) => {
    setSelected(newIndex);
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabsNavigationSection}>
        {Children.map(children, ({ props: { index, label } }) => (
          <button
            type="button"
            onClick={() => changeTab(index)}
            className={
              selected === index
                ? `${styles.tabNav} ${styles.active}`
                : styles.tabNav
            }
          >
            {t(label)}
          </button>
        ))}
      </div>
      <div className={styles.tabContentWrapper}>
        {Children.map(children, ({ props: { index, children: tabContent } }) =>
          selected === index ? (
            <div className={`${styles.tabContent} ${styles.active}`}>
              {tabContent}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
