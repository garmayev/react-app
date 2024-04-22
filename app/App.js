import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name={"Home"} component={HomeScreen}/>
                <Drawer.Screen name={"Settings"} component={SettingsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
