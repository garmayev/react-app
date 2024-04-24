import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import React, {StyleSheet} from "react-native";
import {View} from "react-native";
import {Avatar, Caption, Drawer, Paragraph, Title} from "react-native-paper";

const DrawerContent = createDrawerNavigator()
const MyDrawerContent = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <Drawer.Section>
                        <View style={styles.userInfoSection} >
                            <View style={{margin: 15}}>
                                <Avatar.Image size={60} style={styles.avatar} source={require('../assets/avatar.svg')} />
                            </View>
                            <View style={{marginLeft: 9, marginTop: 15}}>
                                <Title style={styles.title}>AMG Company</Title>
                                <Caption style={styles.caption}>support@amgcompany.ru</Caption>
                            </View>
                        </View>
                        <View style={[styles.userSection, styles.row, {marginLeft: 15}]}>
                            <View style={[styles.row, styles.userInfoSection]}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100500 <Caption style={styles.caption}>Followers</Caption></Paragraph>
                            </View>
                            <View style={[styles.row, styles.userInfoSection]}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100500 <Caption style={styles.caption}>Following</Caption></Paragraph>
                            </View>
                        </View>
                    </Drawer.Section>
                    <Drawer.Section style={{flex: 1, marginTop: 15}}>
                        <DrawerItem label={"Home"} onPress={() => {
                            props.navigation.navigate('Home')}} />
                        <DrawerItem label={"About"} onPress={() => {
                            props.navigation.navigate('About')}} />
                        <DrawerItem label={"Services"} onPress={() => {
                            props.navigation.navigate('Services')}} />
                        <DrawerItem label={"Work"} onPress={() => {
                            props.navigation.navigate('Work')}} />
                    </Drawer.Section>
                    <Drawer.Section>
                        <DrawerItem label={"Settings"} onPress={() => {
                            props.navigation.navigate('Settings')}} />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerToBottom}>
                        <DrawerItem label={"Logout"} onPress={() => {}} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {},
    userInfoSection: {
        flexDirection: 'row'
    },
    avatar: {
        width: '100%',
    },
})

export default MyDrawerContent
