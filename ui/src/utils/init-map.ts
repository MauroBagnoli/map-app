import { Map } from 'mapbox-gl';

export const initMap = (container: HTMLDivElement, coords: [number, number]) => {
    return new Map({
        container,
        center: coords,
        zoom: 12,
        accessToken: import.meta.env.VITE_KEY as string,
        doubleClickZoom: false,
    });
};
