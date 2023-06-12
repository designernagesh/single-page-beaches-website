import { Link } from 'react-scroll';
import './NavbarStyles.scss';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
    const [ nav, setNav ] = useState(false);
    const [ navFixed, setNavFixed ] = useState(false);
    const handleNav = () => setNav(!nav);
    
    const navBg = nav ? 'navbar navbar-bg' : 'navbar';
    const navFixTop = navFixed ? 'navbar-bg navFixedTop' : 'navbar';

    const menuFixed = () => {
        if( window.scrollY > 50 ) {
            setNavFixed(true);
        } else {
            setNavFixed(false);
        }
    }

    window.addEventListener('scroll', menuFixed);

    return (
            <div name='home' className={`${navBg} ${navFixTop}`}>
        {/* <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}> */}
            <div className={nav ? 'logo dark' : 'logo'}>
                <Link to='hero' smooth={true} duration={500}><h2>BEACHES.</h2></Link>
            </div>
            <ul className="nav-menu">
                <li><Link to='hero' smooth={true} duration={500}>Home</Link></li>
                <li><Link to='destinations' smooth={true} duration={500} >Destinations</Link></li>
                <li><Link to='travel' smooth={true} duration={500} >Travel</Link></li>
                <li><Link to='book' smooth={true} duration={500} >Book</Link></li>
                <li><Link to='views' smooth={true} duration={500} >Views</Link></li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li><Link to='hero' onClick={handleNav} smooth={true} duration={500} >Home</Link></li>
                    <li><Link to='destinations' onClick={handleNav} smooth={true} duration={500} >Destinations</Link></li>
                    <li><Link to='travel' onClick={handleNav} smooth={true} duration={500} >Travel</Link></li>
                    <li><Link to='book' onClick={handleNav} smooth={true} duration={500} >Book</Link></li>
                    <li><Link to='views' onClick={handleNav} smooth={true} duration={500} >Views</Link></li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;