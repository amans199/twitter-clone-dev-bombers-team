// import { PaletteColor } from "@mui/material/styles";
import React from "react";

declare module '@mui/material/styles' {

    interface Theme {
        status: {
            danger: String,
            warning: String,
            info: String,
            success: String,
        }
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: React.CSSProperties['color'],
            warning?: React.CSSProperties['color'],
            info?: React.CSSProperties['color'],
            success?: React.CSSProperties['color'] 
        }
    }

    interface palette {
        neutral?: Palette['primary'];
    }

    interface PaletteOptions {
        dimMode?: PaletteOptions['primary'];
        // neutral: PaletteOptions['color'];
    }

    
}