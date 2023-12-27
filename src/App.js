import React from "react";
import AppProvider from './AppProvider'
import UnderDevelopment from './underDevelopment'


export default class App extends React.Component {
    render() {
        return (
            <AppProvider>
                <UnderDevelopment />
            </AppProvider>)
    }
}