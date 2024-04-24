import * as React from "react";
import {Appbar, Icon, IconButtonProps, Menu} from "react-native-paper";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBars, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {DrawerActions} from "@react-navigation/native";

export default function Navbar(props) {
    const [visible, setVisible] = useState(false);

    const openMenu = () => { setVisible(true) }
    const closeMenu = () => { setVisible(false) }
    const {navigation, route, title} = props
    let first = undefined,
        icon = <FontAwesomeIcon icon={faEllipsisV} />
    if (props.back) {
        first = <Appbar.BackAction />
    } else {
        first = <Appbar.Action icon={() => (<FontAwesomeIcon icon={faBars} style={{marginTop: 4, marginHorizontal: 'auto'}} />)} onPress={() => navigation.toggleDrawer()} />
    }
    return (
        <Appbar.Header mode={"small"}>
            {first}
            <Appbar.Content title={route ? route.name : title} />
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Appbar.Action icon={() => (<FontAwesomeIcon icon={faEllipsisV} style={{margin: 4, marginHorizontal: 'auto'}} />)} onPress={openMenu} />
            }>
                <Menu.Item title={"Options #1"} onPress={() => { console.log("Options #1") }} />
                <Menu.Item title={"Options #2"} onPress={() => { console.log("Options #2") }} />
                <Menu.Item title={"Options #3"} onPress={() => { console.log("Options #3") }} />
                <Menu.Item title={"Options #4"} onPress={() => { console.log("Options #4") }} />
            </Menu>
        </Appbar.Header>
    )
}
