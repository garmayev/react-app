import React, {useState} from "react";
import {StyleSheet, TextInput, TouchableWithoutFeedback} from "react-native";

const MyTextInput = (props) => {
    const [value, setValue] = useState(props.value ?? "");
    const [isFocus, setIsFocus] = useState(false);
    return (
        <TextInput
            {...props}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        />
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 15,
    },
})

export default MyTextInput
