import { useEffect, useState } from "react"
import { Rect } from "react-konva"

export const BlinkingCursor = ({ x, y, width, height, duration = 1000 }: { x: number, y: number, width: number, height: number, duration: number }) => {

    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const int = setInterval(() => {
            console.log("awwooga")
            setVisible(prev => !prev);
        }, duration)
        // return (
        //     clearInterval(int)
        // )
    }, [])


    return (
        <Rect x={x} y={y} width={width} height={height} fill={visible ? "red" : "white"} shadowBlur={5} />
    )
}