import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return(
        <div className='flex items-center justify-center h-[100vh]'>
            <span className="w-28 loading loading-infinity"></span>
        </div>
        )
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;