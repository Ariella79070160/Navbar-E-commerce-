import { RiShoppingBag3Line } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

const Cart = ({disabled, count}) => {
    return (
        <RouterLink className='cart'>
            <RiShoppingBag3Line className="size-6" aria-hidden="true" />
            {count > 0 && (
                <div>
                    {count}
                </div>
            )}
        </RouterLink>
    )
}


export default Cart;