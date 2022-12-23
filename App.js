import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components";

import theme from './src/global/styles/theme';
import { StatusBar } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar StatusBarStyle={'light-content'}/>
      <Routes />
    </ThemeProvider>
  );
}