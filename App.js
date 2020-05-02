import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import {productsReducer} from './src/store/reducers/products';
import MainNavigation from './src/navigations/MainNavigation';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import Colors from './src/constants/Colors';
import {cartReducer} from './src/store/reducers/cart';
import {ordersReducer} from './src/store/reducers/orders';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const App: () => React$Node = () => {
  YellowBox.ignoreWarnings([
    'Picker has been',
    "Deprecation in 'navigationOptions'",
    'Animated',
  ]);
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor={Colors.mainApp} />
        <MainNavigation />
      </Provider>
    </>
  );
};

export default App;
