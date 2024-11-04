import clsx from 'clsx'

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
        <div 
            className={clsx(
                'z-sticky sticky top-0 mx-auto h-[68px] max-w-[1216px] px-4 py-3 md:px-8 lg:h-auto xl:px-0',
                'flex items-center justify-between gap-4 lg:gap-20',
            )}>
            <div 
                className="w-[163px]">
                <img
                    src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/logo.svg"
                    alt="StyleNest's logo"
                />
            </div>
            <nav 
                className={clsx('hidden flex-1 gap-8', 'lg:flex')}>
                {links.map((link) => (
                    <Link key={link.name} to={link.href}>{link.name}</Link>
                ))}
            </nav>
            <div 
                className="flex items-center gap-4">
                <Cart disabled={false} count={count}/>
                <MobileMenu links={links}/>
            </div>
        </div>
    )
}

export default Navbar