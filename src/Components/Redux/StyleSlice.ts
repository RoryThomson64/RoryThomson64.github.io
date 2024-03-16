import { createSlice } from "@reduxjs/toolkit/react";
import { styles } from "./Values/Styles";
const init = styles.dark
export const StyleSlice = createSlice({
    name: 'style',
    initialState: init,
    reducers: {

    }
})

// export const { } = StyleSlice.actions