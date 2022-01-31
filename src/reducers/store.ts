'use strict';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/count';

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../lib/browserStorage';

// Storeの生成
const store = configureStore({
  // https://redux.js.org/usage/structuring-reducers/initializing-state#summary
  // localStorageに保存されている値があれば、ロードする
  //  基本的にreducerによって指定されたstateより優先される
  //  それにより、reducerへ指定するデフォルトの引数（初期データ）として指定できる
  //  reduxのストア初期化時に既存データとしてロードすることもできる
  preloadedState: loadFromLocalStorage(),
  reducer: {
    counter: counterReducer,
  },
});

// https://redux.js.org/api/store#subscribelistener
// actionがdispatchされるたび、subscribeに指定されたイベントが実行される
// store.getState()で現在のstoreのオブジェクトが取得できる
store.subscribe(() => saveToLocalStorage(store.getState()));

// RootStateにStoreの型を指定する
export type RootState = ReturnType<typeof store.getState>;
// AppDispatchにStoreへdispatchするアクションの型を指定する
export type AppDispatch = typeof store.dispatch;

export { store };
