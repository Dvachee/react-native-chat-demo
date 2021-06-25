import {Provider} from 'react-redux';
import React from 'react';
import AppContainer from './AppContainer';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
