import { createContext, useState, props } from "react";

export const userContext = createContext({ user :null, setUser:null });
export default function UserContextProvider() {
    const [user, setUser] = useState(null);
    return (
    <userContext.Provider value={{user, setUser}}>
        {props.children}
    </userContext.Provider>
  );
}


