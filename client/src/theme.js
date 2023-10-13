import {createTheme} from '@mui/material/styles';

export const shades = {
   primary: {
        100: "#cccccc",
        200: "#999999",
        300: "#666667",
        400: "#333334",
        500: "#000001",
        600: "#000001",
        700: "#000001",
        800: "#000000",
        900: "#000000"
    },
    
    secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006"
},
neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929"
},
    
}
export const theme =createTheme({
    palette: {
        primary: {
            main:shades.primary[500]
        },
        secondary:{
            main: shades.secondary[500]
        },
        neutral: {
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },
    typography: {
        fontFamily: ["Fauna One", "san-serif"].join(" , ") ,
        fontSize: 11,
    h1: {
        fontFamily: ["Cinzel", "san-serif"].join(" , ") ,
        fontSize: 48,
    },
    h2 :{
        fontFamily: ["Cinzel", "san-serif"].join(" , ") ,
        fontSize: 36,
    },
    h3: {
        fontFamily: ["Cinzel", "san-serif"].join(" , ") ,
        fontSize: 20,
    },
    h4: {
        fontFamily: ["Cinzel", "san-serif"].join(" , ") ,
        fontSize: 14,
    },
    }
})
