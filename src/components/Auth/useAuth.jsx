import * as React from "react";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

// function useAuth() {
//   const auth = !!localStorage.getItem("userToken");

//   return {
//     auth,
//     login() {
//       return new Promise((res) => {
//         setAuthed(true);
//         res();
//       });
//     },
//     logout() {
//       return new Promise((res) => {
//         setAuthed(false);
//         res();
//       });
//     },
//   };
// }

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const auth = !!localStorage.getItem("userToken");
  React.useEffect(() => {
    if (!auth) {
      console.log("Hello");
        navigate("/");
    }
  }, [auth]);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
