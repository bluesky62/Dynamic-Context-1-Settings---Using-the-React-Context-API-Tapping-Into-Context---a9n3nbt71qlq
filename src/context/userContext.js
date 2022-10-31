import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

<<<<<<< HEAD
    const greeting = "Hello" + {greeting}
=======
    // const greeting = "Hello"
    const [greeting, setGreet] = useState('Hello');
    const changeGreeting = (e) => {
        setGreet(e.target.value);
    }
>>>>>>> 33ea35ace746b17f44fe24132ae99a2cea5202db
  
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }
