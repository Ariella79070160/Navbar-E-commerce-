import { useState } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import Link from './Link';

const MobileMenu = ({links}) => {
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <>
            <button onClick={()=>setOpenMenu(!openMenu)}>
                <RiMenuLine className="size-5" aria-hidden="true" />
            </button>

            {openMenu && (
                <div className='open-menu'>
                    <nav className='nav-links-mobile'>
                        {links.map((link) => (
                            <Link key={link.name} to={link.href}>{link.name}</Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    )
}

export default MobileMenu