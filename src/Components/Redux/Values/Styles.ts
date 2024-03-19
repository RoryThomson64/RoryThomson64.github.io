export type styleType = typeof styles.dark



export const styles = {
    dark: {
        BodyText: {
            Colour: "white",
            Size: "1rem"
        },
        HeaderText: {
            Colour: "white",

        },
        Container: {
            // Colour: "#f5f5f5"
            Colour: "hsl(231, 10%, 14%)"
        },
        Background: {
            Colour: "hsl(240, 7%, 11%)"
        },
        Details: {
            shadowColour: "hsl(240, 10%, 10%)",
            hoverVioletShadowColour: "hsl(280, 40%, 40%)",
            hoverCyanShadowColour: "hsl(220, 50%, 40%)",
        }
    }
}
