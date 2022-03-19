import React, { createContext, useEffect } from "react"
import { configure } from 'axios-hooks'
import axios from 'axios'
import { appSettings } from './appSettings'

const AppContext = createContext()

function AppContextProvider(props) {
    const { axiosConfig } = appSettings

    useEffect(() => {
        configure({
            axios: axios.create({
                ...axiosConfig
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <AppContext.Provider value={{}}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }