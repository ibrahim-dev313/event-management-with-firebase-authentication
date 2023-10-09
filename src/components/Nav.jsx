import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Nav = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const navLinks =
        <>
            <li> <NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </>
    if (loading) {
        return (
            <div className='flex items-center justify-center h-[40vh]'>
                <span className="w-28 loading loading-infinity"></span>
            </div>
        )
    }
    
    return (
        <>
            <div className="container mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ? <div> </div> : <><li><NavLink to="/login">Login</NavLink></li><li><NavLink to="/register">Register</NavLink></li></>
                            }
                        </ul>
                    </div>
                    <div className='flex'>

                        <Link to="/" className="text-xl normal-case btn btn-ghost"><img className='w-' src="https://yourimageshare.com/ib/I7GO1oR2s8" alt="logo" /> Eventz</Link>
                    </div>

                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {navLinks}
                        {
                            user ? <div> </div> : <><li><NavLink to="/login">Login</NavLink></li><li><NavLink to="/register">Register</NavLink></li></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-3'>
                        <div>{user?.displayName}</div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        {
                            user ?
                                <div onClick={logOut} className='btn'><a>Logout</a></div>
                                :
                                <Link to="/login" className='btn'><div>Log In</div></Link>

                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;