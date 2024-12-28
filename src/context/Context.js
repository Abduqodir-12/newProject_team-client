import { createContext, useContext, useState } from "react";


const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('account')) || null)
    const [transports, setTransports] = useState([]);

    const exit = () => {
        localStorage.clear()
        setCurrentUser(null)
    };

    const value = {
        currentUser, setCurrentUser,
        transports, setTransports,
        exit
    }

    return (
        <InfoContext.Provider value={value}>
            <InfoContext.Consumer>
                {() => children}
            </InfoContext.Consumer>
        </InfoContext.Provider>
    )
}