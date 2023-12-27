import React, { useContext, useEffect, createContext, useState, useCallback } from 'react';
// import { sessionMgr } from 'src/core/session-manager';
import SplashScreen from './core/SplashScreen'
// import { mcomMgr } from 'src/core/multi-com-manager';

const AppContext = createContext({ user: null });

export const useApp = () => {
    return useContext(AppContext);
};


const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            // const userSession = await sessionMgr.getUserSession();
            // setUser(userSession);
            setTimeout(() => { setLoading(false) }, 500);
            // window.addEventListener('unload', handleTabClosing)
        })();
        // return () => {
        //     window.addEventListener('unload', handleTabClosing)
        //     // Clean up function
        // };
    }, []);

    // const loginUser = useCallback(async (token, refresh_token = null, userInfo = null) => {
    //     sessionMgr.setUserSession(token, refresh_token, userInfo);
    //     let userSession = await sessionMgr.getUserSession();
    //     if (userSession)
    //         mcomMgr.registerPresence(userSession);
    //     setUser(userSession)
    // }, []);


    // const logoutUser = useCallback(() => {
    //     sessionMgr.clearUserSession();
    //     setUser(null);
    // }, []);


    const value = {
        user: "user",
        // loginUser: loginUser,
        // logoutUser: logoutUser
    }

    if (loading)
        return <SplashScreen />

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
