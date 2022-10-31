import React, { createContext } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const greeting = "Hello" + {greeting}
  
    return (
        <UserContext.Provider value={{ greeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }