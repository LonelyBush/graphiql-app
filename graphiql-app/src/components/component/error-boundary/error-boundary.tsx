import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import Button from '../../ui/button/button';
import styles from './error-boundary.module.scss';

interface ErrorBoundaryProps extends WithTranslation {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { t, children } = this.props;

    if (hasError) {
      return (
        <div className={styles.container}>
          <h2>{t('ErrorMessage')}</h2>
          <Button btnType="button" to="/">
            {t('BackToMain')}
          </Button>
        </div>
      );
    }

    return children;
  }
}

const ErrorBoundaryComponent = withTranslation()(ErrorBoundary);
export default ErrorBoundaryComponent;
