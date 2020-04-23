import React from 'react';
import {StatusBar} from 'react-native';
import productsReducer from './src/store/reducers/products';
import MainNavigation from './src/navigations/MainNavigation';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import Colors from './src/constants/Colors';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={Colors.dark} />
        <MainNavigation />
      </Provider>
    </>
  );
};

export default App;
