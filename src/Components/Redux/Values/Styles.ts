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
            Colour: "hsl(231, 20%, 14%)"
        },
        Background: {
            Colour: "hsl(240, 20%, 20%)"
        },
        Details: {
            quadrantBackgroundColour: "hsl(240, 20%, 20%)",
            shadowColour: "hsl(240, 10%, 10%)",
            hoverVioletShadowColour: "hsl(280, 40%, 40%)",
            hoverCyanShadowColour: "hsl(220, 50%, 40%)",
        }
    }
}
