/* eslint-disable react/require-default-props */
import { Children, ReactElement, ReactNode, useState } from 'react';
import styles from './tabs-style.module.scss';

interface TabItemInterface {
  label: string;
  index: number;
  children: ReactNode;
}

export function TabItem(props: TabItemInterface): ReactElement {
  return <div {...props} />;
}

export function Tabs({
  defaultSelect = 0,
  children,
}: {
  defaultSelect: number;
  children: ReactElement<TabItemInterface>[];
}) {
  const [selected, setSelected] = useState(defaultSelect);

  const changeTab = (newIndex: number) => {
    return setSelected(newIndex);
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabsNavigationSection}>
        {Children.map(children, ({ props: { index, label } }) => {
          return (
            <button
              type="button"
              onClick={() => changeTab(index)}
              className={
                selected === index
                  ? `${styles.tabNav} ${styles.active}`
                  : styles.tabNav
              }
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className={styles.tabContentWrapper}>
        {Children.map(children, ({ props: { index, ...props } }) => {
          return (
            <div
              {...props}
              className={`${styles.tabContent} ${selected === index ? styles.active : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
