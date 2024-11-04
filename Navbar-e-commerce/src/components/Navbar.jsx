import {useState, useEffect} from 'react'
import Link from "./Link"
import Cart from "./Cart"
import MobileMenu from "./MobileMenu"

const links = [
    {
        name: 'Shop all',
        href: '#',
    },
    {
        name: 'Latest arrivals',
        href: '#',
    }
]

const Navbar = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const fetchCartCount = () => {
            const fakeCount = Math.floor(Math.random() * 10);
            setCount(fakeCount)
        }
        fetchCartCount()
    },[])

    return(
        <div className="navbar">
            <div className="navbar-icon">
                <img
                    src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/logo.svg"
                    alt="StyleNest's logo"
                />
            </div>
            <nav className='navbar-links'>
                {links.map((link) => (
                    <Link to={link.href}>{link.name}</Link>
                ))}
            </nav>
            <div className="navbar-mobile-menu">
                <Cart disabled={false} count={count}/>
                <MobileMenu links={links}/>
            </div>
        </div>
    )
}

export default Navbar