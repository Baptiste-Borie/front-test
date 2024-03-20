import React from "react";
import "../style/components.css";
import { useModeContext } from "../Context/context";
import clair from "../assets/clair.svg";
import sombre from "../assets/sombre.svg";
import {Box} from "@chakra-ui/react";

export const ModeButton = () => {
    const { mode, setMode } = useModeContext();

    const toggleMode = () => {
        setMode(mode === "clair" ? "sombre" : "clair");
    };
    

    return (
        <Box onClick={toggleMode} className="toggleMode">
        <img
                src={mode === "clair" ? sombre : clair}
                alt={mode === "clair" ? "Image sombre" : "Image claire"}
            />
        </Box>
    );
};

