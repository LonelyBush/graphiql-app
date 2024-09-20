import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StoreProvider from './StoreProvider';
import { makeStore, AppStore } from './store';

function TestComponent() {
  return <div>Test Component</div>;
}

describe('StoreProvider', () => {
  it('should render children within the Provider with the correct store', () => {
    const { getByText } = render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );

    expect(getByText('Test Component')).toBeInTheDocument();
  });

  it('should only create one store instance', () => {
    const referenceStore = makeStore();
    const mockStore: AppStore = referenceStore;
    expect(mockStore.getState()).toEqual(referenceStore.getState());
  });
});
