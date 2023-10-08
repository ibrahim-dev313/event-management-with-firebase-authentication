import Banner from "./Banner";
import Footer from "./Footer";
import { OurLocation } from "./OurLocation";
import Services from "./Services/Services";

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Services></Services>
        <OurLocation></OurLocation>
        <Footer></Footer>
        </>
    );
};

export default Home;