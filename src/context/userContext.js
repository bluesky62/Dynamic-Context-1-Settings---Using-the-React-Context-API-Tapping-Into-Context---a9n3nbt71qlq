import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    // const greeting = "Hello"
<<<<<<< HEAD
    const [greeting, setGreet] = useState('Hello');
=======
    const [greeting, setGreet] = useState('hello');
>>>>>>> c40b9cbb44e86faa59e78cd1514a6e0e89811d70
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
