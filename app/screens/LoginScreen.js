import {Button, StyleSheet, Text, View} from "react-native";
import {useState} from "react";


export default function LoginScreen(props) {
    const {authKey} = props
    const [user] = useState(user);

    const setUser = (data) => {
        authKey(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Login Screen</Text>
            <Button title={'login'} onPress={() => {
                setUser('asdqwe34asd')
            }}>Login</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 15,
    },
    welcomeText: {
        fontSize: 27,
    }
})

