import React, { ReactNode, useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AppContext';
import { AuthContextType } from './models';

type Props = {
    children: JSX.Element;
}

export const AuthWrapper = (props: Props) => {
    const [user, setUser] = useState<any>(null);

    const login = (user: string) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    const value: AuthContextType = { user, login, logout };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    )
}

export const RequireAuth = (props: Props) => {
    const auth = useContext(AuthContext);
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return props.children;
}