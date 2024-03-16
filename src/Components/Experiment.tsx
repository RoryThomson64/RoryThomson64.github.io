import { Layer, Rect, Stage } from "react-konva"
import { Title } from "./KonvaHome/Title"
import { LegacyRef, useEffect, useRef } from "react"

export const Experiment = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        context!.fillStyle = "red";
        context?.fillRect(0, 0, w, h);

    }, [])

    return (
        <>
            <style>
                {`
                .experiment{
                    position: absolute;
                    height: ${h}px;
                    width:${w}px;
                    top: 0px;
                    left: 0px;
                    z-index:-1;
                }
                `}
            </style>
            <canvas className="experiment" ref={canvasRef} />
        </>
    )
}