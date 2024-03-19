import { useEffect, useRef } from "react";
import { map } from "./Map";
import { Map } from "ol";


export const useMap = (): Map => {

    const mapRef = useRef<Map>();
    useEffect(() => {
        return (() => {
            mapRef.current = undefined
        })
    }, [])
    if (!mapRef.current) {
        mapRef.current = map;
    }
    return mapRef.current;
}