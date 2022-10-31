import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    // const greeting = "Hello"
    const [greeting, setGreet] = useState('hello');
    const changeGreeting = (e) => {
        setGreet(e.target.value);
    }
  
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }
