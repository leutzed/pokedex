import React from "react";
import { colors } from './theme'

export const Context = React.createContext();

export function ThemeProvider() {

    state = {
        theme: colors,
        updateTheme: (theme) => {
            this.setState({ theme: theme })
        }
    }

    const { theme } = this.state

    return (
        <Context.Provider value={this.state} theme={theme} >
            {this.props.children}
        </Context.Provider>
    )
}