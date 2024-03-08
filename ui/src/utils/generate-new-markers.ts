import { Popup, Marker, Map } from 'mapbox-gl';

export const generateNewMarker = ({
    lat,
    lng,
    map,
    id,
    navigateToDetails
}: { lng: number, lat: number, map: Map, id: string, navigateToDetails: (id: string) => void}) => {

    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    const marker = new Marker({ color: '#63df29', scale: 1.5 })
        .setLngLat([lng, lat])
        .setPopup(popUp)
        .addTo(map)

    marker.getElement().addEventListener('click', () => {
        navigateToDetails(id);
    });
}
