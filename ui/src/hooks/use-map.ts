import { useContext, useEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';
import { initMap } from '@/utils/init-map';
import { generateNewMarker } from '@/utils/generate-new-markers';
import { DeviceContext } from '@/context/device-context';
import { useNavigate } from 'react-router-dom';

export const useMap = (container: React.RefObject<HTMLDivElement>) => {
    const navigate = useNavigate();
    const mapInitRef = useRef<Map | null>(null);
    const { devices } = useContext(DeviceContext);
    const intialMarkers = devices.map(item => ({ lng: item.longitude, lat: item.latitude, id: item.id.toString() }))

    useEffect(() => {
        if (container.current) {

            mapInitRef.current = initMap(
                container.current,
                [-3.680116, 40.418966]
            );
        }
    }, []);

    useEffect(() => {
        mapInitRef.current && mapInitRef.current.on(
            'load',
            () => {
                intialMarkers.forEach((marker) => {
                    generateNewMarker({
                        map: mapInitRef.current!,
                        lng: marker.lng,
                        lat: marker.lat,
                        id: marker.id,
                        navigateToDetails: (id) => {
                            navigate('/details/' + (parseInt(id)))
                        }
                    })
                })
            }
        )

        return () => { mapInitRef.current?.off('load', generateNewMarker) }
    }, [intialMarkers])
}
