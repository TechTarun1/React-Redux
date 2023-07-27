import { Routes, Route } from 'react-router-dom';

import Products from '../../pages/products/Products';
import Cart from '../../pages/cart/Cart';
import SignUp from '../../pages/signup/SignUp';

const AppRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
