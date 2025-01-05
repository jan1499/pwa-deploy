'use client'
import { store } from '@/redux/store/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface MainProps {
    children: ReactNode;
}

const Main:React.FC<MainProps> = ({ children }) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}

export default Main