import { BlinkingCursor } from "./BlinkingCursor"

export const Title = ({ x, y, width, height }) => {
    return (
        <>
            <BlinkingCursor x={x} y={y} width={width} height={height} />
        </>
    )

}