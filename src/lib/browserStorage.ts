'use strict';

const KEY = 'redux';

// localStorageから値を取得する
const loadFromLocalStorage = (): any => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

// localStorageに値を保存する
const saveToLocalStorage = (state: any): any => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.warn(e);
  }
};

export { loadFromLocalStorage, saveToLocalStorage };
