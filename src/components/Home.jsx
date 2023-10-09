import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import OurClients from './OurClients';
import { OurLocation } from "./OurLocation";
import Services from "./Services/Services";

const Home = () => {
    useEffect(() => {
        AOS.init({duration: "500", delay:"0"});
    }, [])
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