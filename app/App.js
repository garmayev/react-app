import {createDrawerNavigator} from "@react-navigation/drawer";
import {PreloaderScreen, CalculatorScreen} from "./screens/";
import {PaperProvider} from "react-native-paper";
import React, {useEffect, useState} from "react";

const Drawer = createDrawerNavigator()

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return (
            <PaperProvider>
                <CalculatorScreen />
            </PaperProvider>
        )
    } else {
        return (
            <PreloaderScreen loadingComplete={setIsLoading} />
        )
    }
}
