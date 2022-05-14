import './productItem.css'

const  ProductItem = (props) => {
    const {
        _id,
        name,
        price,
        image,
        stock,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                           </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            _id,
                            name,
                            price,
                            stock,
                        })
                    }>ZAMÓW TERAZ</button>
                <span>Ilosc {stock}</span>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} złot.
                </span>
            </div>
        </div>
    );
}

export default ProductItem 