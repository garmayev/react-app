import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator()
const MyDrawer = () => {
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName={"Home"}>
            <Drawer.Screen name={"Home"} component={HomeScreen} />
            <Drawer.Screen name={"Settings"} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default MyDrawer
