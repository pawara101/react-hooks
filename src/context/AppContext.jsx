import { createContext } from "react";

export const AppContext = createContext();

// Provider function
const ContextProvider = (props)=>{
    const phone = "+1 097499892349"
    const name = "jake"
    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;