import { Map, Marker } from "pigeon-maps";

export function OurLocation() {
    return (
        <div>
            <div>
                <h1 className="my-5 text-3xl font-bold text-center">Find Us Here</h1>
            </div>
            <div>
                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                    <Marker width={50} anchor={[50.879, 4.6997]} />
                </Map>
            </div>
        </div>
    )
}