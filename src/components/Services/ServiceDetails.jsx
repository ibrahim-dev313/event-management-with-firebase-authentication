import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData()
    const [service, setService] = useState('')

    useEffect(() => {
        const findService = services?.find(service => service.id == id)
        setService(findService)
    }, [services, id])

    const { name, price, image, short_description, long_description } = service || {}

    return (
        <div className="container w-full mx-auto rounded card glass">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{long_description}</p>
                <div className="flex justify-between">

                    <button className="btn btn-outline ">Price: {price}</button>
                    <button className="btn btn-outline">Book now!</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;