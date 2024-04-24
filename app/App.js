import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {LoginScreen, HomeScreen, SettingsScreen, PreloaderScreen, AboutScreen} from "./screens/";
import {Menu, PaperProvider} from "react-native-paper";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import MyDrawerContent from "./components/DrawerContent";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import {TouchableOpacity} from "react-native";
import React, {useState} from "react";

const Drawer = createDrawerNavigator()

export default function App() {
    const [authKey, setAuthKey] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [visible, setVisible] = useState(false);

    const openMenu = () => { setVisible(true) }
    const closeMenu = () => { setVisible(false) }

    const appbar = () => (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            style={{backgroundColor: 'white', elevation: 10}}
            anchor={
                <TouchableOpacity onPress={openMenu} style={{marginRight: 15}}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </TouchableOpacity>
            }>
            <Menu.Item title={"Options #1"} onPress={() => { console.log("Options #1") }} />
            <Menu.Item title={"Options #2"} onPress={() => { console.log("Options #2") }} />
            <Menu.Item title={"Options #3"} onPress={() => { console.log("Options #3") }} />
            <Menu.Item title={"Options #4"} onPress={() => { console.log("Options #4") }} />
        </Menu>
    )
    if (loaded) {
        if (authKey === "") {
            return (
                <PaperProvider>
                    <NavigationContainer>
                        <LoginScreen authKey={setAuthKey}/>
                    </NavigationContainer>
                </PaperProvider>
            )
        } else {
            return (
                <PaperProvider>
                    <NavigationContainer>
                        <Drawer.Navigator drawerContent={(props) => <MyDrawerContent {...props} />} screenOptions={{
                            swipeEnabled: true,
                            drawerHideStatusBarOnOpen: false,
                            drawerType: 'front',
                            headerRight: appbar
                        }}>
                            <Drawer.Screen
                                name={"Home"}
                                component={HomeScreen}
                                options={{
                                    headerShadowVisible: true,
                                }}
                            />
                            <Drawer.Screen name={"About"} component={AboutScreen} options={{
                                headerShadowVisible: true,
                            }}/>
                            <Drawer.Screen name={"Settings"} component={SettingsScreen} options={{
                                headerShadowVisible: true,
                            }}/>
                        </Drawer.Navigator>
                    </NavigationContainer>
                </PaperProvider>
            )
        }
    } else {
        return (
            <PaperProvider>
                <PreloaderScreen loadingComplete={setLoaded}/>
            </PaperProvider>
        )
    }
}
