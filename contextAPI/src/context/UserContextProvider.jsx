import React from "react";
// what is user context? user context is an object that contains the user data and a function to update the user data.
// what can we do with it? 
// we can use it to share the user data across the components without having to pass props down manually at every level.
// for example, if we have a user object that contains the user name and email, 
// we can use the user context to share the user object across the components without having to pass props down manually at every level.
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(
        // we have to create a provider component to wrap around the components that need access to the context
        // then we have to use value prop to pass the data to the components that need access to the context
        <UserContext.Provider value={{user, setUser}}>    
            {children}  {/* children are the components that need access to the context */}
        </UserContext.Provider>
    )
}
// To sum it, UserContextProvider is a component that provides the context to its children components. 
// That means any component wrapped inside UserContextProvider can access the user context.

export default UserContextProvider;

