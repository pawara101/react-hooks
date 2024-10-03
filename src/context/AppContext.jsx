import { createContext } from "react";

export const AppContext = createContext();

// Provider function
const ContextProvider = (props)=>{
    const phone = "+1 097499892349"
    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;