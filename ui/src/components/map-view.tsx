import { useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMap } from '@/hooks/use-map';

// This is a public token so there is no risk of exposure
mapboxgl.accessToken = 'pk.eyJ1IjoibWF1cm9ydWFtIiwiYSI6ImNscWp0NjZ5eTIwdDMya282OHV6bnpvY3YifQ.AuOxYpQZ1ubfbP0stCk0Fw';

const MapView = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    useMap(mapRef)

    return <div ref={mapRef} className='map' />
}

export default MapView;
