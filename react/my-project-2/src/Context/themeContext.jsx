import {createContext} from "react";
export  const themeContext=createContext();
const Provider=themeContext.Provider;
export const ThemeContextProvider=({children})=>{
    const [theme,setTime]=useState("Light");
    const toggleTheme=()=>{
        setTime((prev)=>(prev=="Light" ?"dark":"Light"))
    };
    return <Provider value={{theme,toggleTheme}}>
    {children}
    </Provider>
}