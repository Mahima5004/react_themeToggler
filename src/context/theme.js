//shortcut method through which we can use context in a single file only

import { createContext,useContext } from "react";

export const ThemeContext = createContext({
        themeMode : 'light',
        lightTheme : ()=>{},
        darkTheme : () =>{} 

})
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}