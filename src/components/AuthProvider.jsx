import AuthContext from "./AuthContext";
import { useState } from "react";

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return ( 
        <AuthContext.Provider value = {{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
     );
}

export default AuthProvider;