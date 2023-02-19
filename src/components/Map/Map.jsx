import { load } from '@2gis/mapgl'
import { useEffect } from 'react';
import MapWrapper from './MapWrapper';


function MapComponent() {
    useEffect(() => {
        let map;
        let marker

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [37.66170, 55.720803],
                zoom: 17,
                key: '9ba17144-e332-468b-86e4-a6e653e559b1',
            });
            marker = new mapglAPI.Marker(map, {
                coordinates: [37.661796, 55.720950],
            });
        });

        // Удаляем карту при размонтировании компонента
        return () => {
            map && map.destroy();
            marker && marker.destroy()
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
}

export default MapComponent