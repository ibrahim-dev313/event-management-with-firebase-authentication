import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = useLoaderData()
    // console.log(servicesData);
    return (
       <div className='my-'>
        <h1 className="grid text-2xl font-bold text-white border-none rounded-none bg-neutral btn">Our Services</h1>
         <div className='container grid grid-cols-1 gap-5 mx-auto my-5 md:grid-cols-2 lg:grid-cols-1'>
            {
                servicesData.map(serviceData=><ServiceCard key={serviceData.id} serviceData={serviceData}></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default Services;