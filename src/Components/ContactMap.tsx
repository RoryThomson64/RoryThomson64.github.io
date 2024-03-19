
import { fromLonLat } from "ol/proj";
import { useEffect, useRef, useState } from "react";
import { useMap } from "./UseMap";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Feature } from 'ol';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { LineString, Point, } from 'ol/geom';


export const ContactMap = () => {
    const cambridgeCoords = fromLonLat([175.474, -37.899]);

    const boundariesUrl = "https://data-waikatolass.opendata.arcgis.com/api/download/v1/items/e88a95be878a4d0bb1664e1dfb0be071/geojson?layers=0"
    const [boundariesFetch, setBoundariesFetch] = useState<LineString>(new LineString([]))

    const getBounds = async () => await fetch(boundariesUrl).then((ret) => {
        return ret.json()
    }).then((ret) => {
        // setBoundariesFetch(new GeoJSON().readFeature(ret.features[1]))
        ret.features.forEach((feature: { properties: { name: string }, geometry: { coordinates: [[number, number][]] } }) => {
            if (feature.properties.name === "CAMBRIDGE") {
                // const poly = new Polygon(feature.geometry.coordinates)
                // console.log(poly)
                // setBoundariesFetch(new GeoJSON().readFeature(feature))
                console.log(feature.geometry.coordinates[0])
                const finalCoords = feature.geometry.coordinates[0].map((geom: [number, number]) => {
                    return fromLonLat(geom)
                })

                const poly = new LineString(finalCoords)
                // const feat = new Feature(poly)
                setBoundariesFetch(poly)
                return;
            }
            // setBoundariesFetch(finalCoords)

        })
    })
    console.log(boundariesFetch)

    const mapRef = useRef<HTMLDivElement>(null);
    const map = useMap();

    useEffect(() => {
        getBounds();
    }, [])

    useEffect(() => {
        if (mapRef.current) {
            map.setTarget(mapRef.current);
            map.updateSize();
            const view = map.getView()
            view.setCenter(cambridgeCoords)
            view.setZoom(10)

            map.getControls().clear()

        }
        console.log(boundariesFetch)
        if (boundariesFetch)
            map.addLayer(
                new VectorLayer({
                    style: [new Style({
                        stroke: new Stroke({
                            color: [0, 0, 255, 0.2],
                            lineJoin: "bevel",
                            width: 10
                        })
                    }),
                    new Style({
                        stroke: new Stroke({
                            color: [255, 0, 0, 0.2],
                            lineJoin: "bevel",
                            width: 1
                        })
                    })
                    ],
                    source: new VectorSource({
                        features: [new Feature(boundariesFetch), new Feature(new Point(cambridgeCoords))]
                        // features: [new Feature(new LineString([[0, 0], fromLonLat([175, -37])]))]
                    })
                })
            )

    }, [boundariesFetch, cambridgeCoords, map])

    // useEffect(() => {
    //     if (mapRef.current) {
    //         map.setTarget(mapRef.current);
    //         map.updateSize();
    //     }
    // }, [map, boundariesFetch])

    return (
        <>
            <style>
                {`
                .contactMap{
                    width:25rem;
                    height:25rem;
                }
                `}
            </style>
            <div id="map" className="contactMap" ref={mapRef}>
            </div>
        </>
        // <Map view={<View resolution={100} center={cambridgeCoords} />} >
        //     <layer.Tile>
        //         <source.OSM />
        //     </layer.Tile>
        //     <layer.Vector>
        //         <source.Vector>
        //             <Feature id={"CambridgeBounds"} style={{ stroke: { color: [255, 0, 255, 1], width: 1 }, fill: { color: [255, 0, 255, 0.2] } }}>
        //                 <geom.Polygon>
        //                     {boundariesFetch}
        //                 </geom.Polygon>
        //             </Feature>
        //         </source.Vector>
        //     </layer.Vector>
        // </Map>
    )
}