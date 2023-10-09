
const Banner = () => {
    return (
        <>
            <div className="min-h-[60vh] hero" style={{ backgroundImage: 'url(https://i.ibb.co/Mg7pMFY/office.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Welcome to RK Eventz</h1>
                        <p className="mb-5">We provide top notch event management system where you can hire us to manage your corporate events.</p>
                        <button className="text-white btn btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;