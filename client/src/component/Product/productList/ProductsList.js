import  ProductItem  from '../productItem/ProductItem';
import './productList.css'

const ProductList = (props) => {
    const { products = [], addToBasket = Function.prototype } = props;

    if (!products.length) {
        return <h3>Nothing here</h3>;
    }

    return (
        <div className='product'>
            {products.map((item) => (
                <ProductItem key={item._id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export default ProductList ;