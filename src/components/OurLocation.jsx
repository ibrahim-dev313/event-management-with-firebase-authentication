import { Map, Marker } from "pigeon-maps";

export function OurLocation() {
    return (
        <>
            <div>
                <h1 className="grid mt-5 text-2xl font-bold text-white border-none rounded-none bg-neutral btn">Find Us Here</h1>
            </div>
            <div>
                <Map height={350} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={60} anchor={[50.879, 4.6997]} />
                </Map>
            </div>
        </>
    )
}