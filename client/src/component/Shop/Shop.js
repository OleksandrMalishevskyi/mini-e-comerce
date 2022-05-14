import React, { useState, useEffect } from 'react';
import { getProducts } from "../../services/productServices";
import Preloader from '../Preloader/Preloader';
import Cart from '../Cart/Cart.js'
import ProductList from '../Product/productList/ProductsList';
import BasketList from '../BasketList/BasketList';
import Alert from '../Alert/Alert'

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketSow] = useState(false);
  const [alertName, setAlertName] = useState('');
  
  const addToBasket = (item) => {
    const itemIndex = order.findIndex( elem => elem._id === item._id );
    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1, };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((elem, index) => {
        if (index === itemIndex) {
          return { ...elem, quantity: elem.quantity + 1 };
        } else {
          return elem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el._id !== itemId);
    setOrder(newOrder);
};

  const handleBasketShow = () => {
    setBasketSow(!isBasketShow);
};

const closeAlert = () => {
  setAlertName('');
};

const incQuantity = (itemId) => {
  const newOrder = order.map((el) => {
      if (el._id === itemId) {
          const newQuantity = el.quantity + 1;
          return {
              ...el,
              quantity: newQuantity <= el.stock ? newQuantity : el.stock,
          };
      } else {
          return el;
      }
  });
  setOrder(newOrder);
};
const decQuantity = (itemId) => {
  const newOrder = order.map((el) => {
      if (el._id === itemId) {
          const newQuantity = el.quantity - 1;
          return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
          };
      } else {
          return el;
      }
  });
  setOrder(newOrder);
};

  useEffect(() => {
    getProducts()
      .then(resp => {
/*         console.log("Data", resp.data) */
        setProducts(resp.data);
        setLoading(false);
      })
  }, [])



  return (
    <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <ProductList products={products} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
             {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop