import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = useLoaderData()
    // console.log(servicesData);
    return (
       <div className='my-5'>
        <h1 className="my-3 text-2xl text-center">Our Services</h1>
         <div className='container grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-1'>
            {
                servicesData.map(serviceData=><ServiceCard key={serviceData.id} serviceData={serviceData}></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default Services;