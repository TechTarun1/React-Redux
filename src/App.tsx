import { useState } from 'react';
import { Provider } from 'react-redux';

import Header from './components/header/Header';
import AppRoutes from './components/routes/AppRoutes';
import { productData } from './data/Data';
import store from './store';

function App() {

  // const [cartItems, setCartItems] = useState<any>([]);

  // const handleAddProduct = (product: any) => {
  //   const productExist = cartItems.find((item: any) => item.id === product.id);
  //   if (productExist) {
  //     setCartItems(cartItems.map((item: any) => item.id === product.id
  //       ? { ...productExist, quantity: productExist.quantity + 1 }
  //       : item
  //     ))
  //   }
  //   else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }])
  //   }
  // }

  // const handleRemoveProduct = (product: any) => {
  //   const productExist = cartItems.find((item: any) => item.id === product.id);
  //   if (productExist.quantity === 1) {
  //     setCartItems(cartItems.filter((item: any) => item.id !== product.id))
  //   }
  //   else {
  //     setCartItems(cartItems.map((item: any) => item.id === product.id
  //       ? { ...productExist, quantity: productExist.quantity - 1 }
  //       : item
  //     ))
  //   }
  // }

  // const handleCartClearance = () => {
  //   setCartItems([]);
  // }

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
