import { I18nextProvider } from 'react-i18next';
import { describe, vi, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabItem } from './tabs';

import i18n from '../../../utils/launguages/i18n';

vi.mock('react-i18next', async () => {
  const actual = await import('react-i18next');
  return {
    ...actual,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe('Tabs Component', () => {
  test('renders tabs and allows switching between them', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tabs defaultSelect={0}>
          <TabItem index={0} label="Tab 1">
            <div>Content 1</div>
          </TabItem>
          <TabItem index={1} label="Tab 2">
            <div>Content 2</div>
          </TabItem>
        </Tabs>
      </I18nextProvider>,
    );

    const tab1Button = screen.getByText('Tab 1');
    const tab2Button = screen.getByText('Tab 2');

    expect(tab1Button).toBeInTheDocument();
    expect(tab2Button).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
    fireEvent.click(tab2Button);
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
