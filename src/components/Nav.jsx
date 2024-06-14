import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants/index.js';

const Nav = () => {
    return (
        <div>
            <header className='padding-x py-8 z-10 w-full fixed'>
                <nav className='flex justify-between'>
                    <a href="/">
                        <img src={headerLogo} width={130} height={29}></img>
                    </a>
                    <ul className='flex flex-row gap-16 max-lg:hidden'>
                        {navLinks.map((item)=>( 
                            <li key={item.label}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}

                    </ul>
                    <img className="hidden max-lg:block" src={hamburger} width={25} height={25}></img>
                </nav>
            </header>
        </div>
    );
};

export default Nav;
