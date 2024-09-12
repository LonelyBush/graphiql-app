import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  saveRequestToLocalStorage,
  getRequestFromLocalStorage,
} from './request-ls';
import { RequestItem } from '../../types/interface';

describe('localStorage functions', () => {
  const key = 'testKey';
  const mockData: RequestItem[] = [
    {
      urlPage: 'https://example.com/page1',
      requestData: {
        url: 'https://example.com/api',
        method: 'GET',
        headers: { Authorization: 'Bearer token' },
        body: 'test body',
      },
      data: 'Some data 1',
    },
    {
      urlPage: 'https://example.com/page2',
      requestData: {
        url: 'https://example.com/api',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'test body 2',
      },
      data: 'Some data 2',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should retrieve data from localStorage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      return JSON.stringify(mockData);
    });

    const result = getRequestFromLocalStorage(key);
    expect(result).toEqual(mockData);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('should return null if no data in localStorage', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => null);

    const result = getRequestFromLocalStorage(key);
    expect(result).toBeNull();
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('should save data to localStorage', () => {
    const setItemSpy = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {});

    saveRequestToLocalStorage(key, mockData);

    expect(setItemSpy).toHaveBeenCalledWith(key, JSON.stringify(mockData));
  });

  it('should throw an error if saving to localStorage fails', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Failed to save');
    });

    expect(() => saveRequestToLocalStorage(key, mockData)).toThrow(
      'error Error: Failed to save',
    );
  });
});
