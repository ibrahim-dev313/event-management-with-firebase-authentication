import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import { AuthContext } from '../providers/AuthProvider';
import Banner from "./Banner";
import Footer from "./Footer";
import OurClients from './OurClients';
import { OurLocation } from "./OurLocation";
import Services from "./Services/Services";

const Home = () => {
    const {loading}=useContext(AuthContext)
    
    useEffect(() => {
        AOS.init({duration: "500", delay:"0"});
    }, [])
    if (loading) {
        return (
            <div className='flex items-center justify-center h-[40vh]'>
                <span className="w-28 loading loading-infinity"></span>
            </div>
        )
    }
    return (
        <>
        
        <Banner></Banner>
        <Services></Services>
        <OurLocation></OurLocation>
        <OurClients></OurClients>
        <Footer></Footer>
        </>
    );
};

export default Home;