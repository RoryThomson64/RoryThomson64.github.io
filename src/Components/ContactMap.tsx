import { Map, View, layer, source, Feature, geom } from "react-ol";
import { fromLonLat } from "ol/proj";
import { useEffect, useState } from "react";
export const ContactMap = () => {
    const cambridgeCoords = fromLonLat([175.474, -37.899]);

    const boundariesUrl = "https://data-waikatolass.opendata.arcgis.com/api/download/v1/items/e88a95be878a4d0bb1664e1dfb0be071/geojson?layers=0"
    const [boundariesFetch, setBoundariesFetch] = useState([[0, 0]])

    const getBounds = async () => await fetch(boundariesUrl).then((ret) => {
        return ret.json()
    }).then((ret) => {
        ret.features.forEach((feature: Feature["feature"]) => {
            if (feature.properties.name === "CAMBRIDGE") {
                console.log(feature.geometry.coordinates[0])
                const finalCoords = feature.geometry.coordinates[0].map((geom: [number, number]) => {
                    return fromLonLat(geom)
                })
                setBoundariesFetch(finalCoords)

            }
        })
    })
    console.log(boundariesFetch)

    useEffect(() => {
        getBounds();
    }, [])

    return (
        <Map view={<View resolution={100} center={cambridgeCoords} />} >
            {/* @ts-expect-error This Package has incorrect typings, using as directed */}
            <layer.Tile>
                <source.OSM />
            </layer.Tile>
            {/* @ts-expect-error This Package has incorrect typings, using as directed */}
            <layer.Vector>
                <source.Vector>
                    <Feature id={"CambridgeBounds"} style={{ stroke: { color: [255, 0, 255, 1], width: 1 }, fill: { color: [255, 0, 255, 0.2] } }}>
                        <geom.Polygon>
                            {boundariesFetch}
                        </geom.Polygon>
                    </Feature>
                </source.Vector>
            </layer.Vector>
        </Map>
    )
}