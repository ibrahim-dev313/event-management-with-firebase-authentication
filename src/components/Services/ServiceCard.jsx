import { Link } from "react-router-dom";

const ServiceCard = ({serviceData}) => {
    const {name, id, price,image , short_description, long_desciption}= serviceData || {}
    // console.log(serviceData);
    return (
        <>
            <Link to={`/service-details/${id}`} className="shadow-xl card lg:card-side bg-base-100">
                <figure><img className="lg:w-[280px]" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <div className="flex justify-between">
                        <button className="text-xs btn btn-outline">Fee: {price}</button>
                        <button className="text-xs btn btn-primary">More Details </button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ServiceCard;