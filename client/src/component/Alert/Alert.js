import React, {useEffect} from 'react'
import './alert.css'

const Alert = (props) => {
    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} added to cart</div>
        </div>
    );
}

export default Alert