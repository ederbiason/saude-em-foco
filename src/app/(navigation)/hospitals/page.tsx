import { Map } from "@/components/Map";

export default function page() {
    return (
        <div className="w-full h-full">
            <Map center={[-23.3045, -51.1696]} />
        </div>
    )
}
