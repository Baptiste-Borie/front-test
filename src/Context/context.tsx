import { PropsWithChildren, createContext, useContext, useState } from "react";

export const modeContext = createContext({mode: "clair",setMode: (mode: string) => {}});

export const ModeProvider = ({ children }:PropsWithChildren<{}>) => {
    const [mode, setMode] = useState("clair"); 

return (
    <modeContext.Provider value={{ mode, setMode }}>
        {children}
    </modeContext.Provider>
    );
};

//création d'un hook perso.
export const useModeContext = () => {
    const c = useContext(modeContext);
    if (!c) {
    throw new Error("Le contexte doit etre utilisé au sein d'un provider :  ModeContext.Provider");
    }
    return c;
};