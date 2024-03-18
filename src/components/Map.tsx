"use client"

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from "react"
import L, { LatLngTuple } from "leaflet"
import { PlaceNode, fetchHospitals } from '@/utils/overpass'

import marker from "@/assets/hospital.png"

interface MapProps {
    center: LatLngTuple
}

function ChangeView({ center }: MapProps) {
    const map = useMap();
    map.setView(center);
    return null;
}

export function Map({ center }: MapProps) {
    const [coord, setCoord] = useState<LatLngTuple>([-23.3045, -51.1696])
    const [hospitals, setHospitals] = useState<PlaceNode[]>([])

    const getMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoord([position.coords.latitude, position.coords.longitude])
            })

        } else {
            console.log("Geolocation não tem suporte para este navegador.")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedHospitals = await fetchHospitals(coord)
                setHospitals(fetchedHospitals)
            } catch (error) {
                console.error('Erro ao buscar hospitais:', error)
            }
        }

        getMyLocation()
        fetchData()
    }, [])

    return (
        <div className="pb-8">
            <MapContainer
                style={{
                    height: '100vh',
                    width: '100%'
                }}
                center={center}
                zoom={13}
                scrollWheelZoom={false}
            >
                <ChangeView center={coord} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {hospitals?.map((hospital) => (
                    <Marker
                        key={hospital.id}
                        icon={
                            new L.Icon({
                                iconUrl: MarkerIcon.src,
                                iconRetinaUrl: MarkerIcon.src,
                                iconSize: [25, 41],
                                iconAnchor: [12.5, 41],
                                popupAnchor: [0, -41],
                                shadowUrl: MarkerShadow.src,
                                shadowSize: [41, 41],
                            })
                        }
                        position={[hospital.lat, hospital.lon]}
                    >
                        <Popup>
                            {hospital.tags.name}
                        </Popup>
                    </Marker>
                ))}

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={coord}>
                    <Popup>
                        Você esta aqui!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
