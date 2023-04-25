import { UserDTO } from '@dtos/UserDTO';
import { ReactNode, createContext, useState } from 'react';

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState({
        id: '1',
        name: 'Igor Ribeiro',
        email: 'teste@teste.com',
        avatar: 'igor.png'
    });

    function signIn(email: string, password: string) {
        setUser({
            name: '',
            email,
            id: '',
            avatar: ''
        })
    }
    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}