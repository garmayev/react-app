import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import {DropDown, MyTextInput} from "../elements";

const gases = [
    {value: 1, label: 'Кислород', moll: 0.032, density: 1.141},
    {value: 2, label: 'Аргон', moll: 0.039944, density: 1.392},
    {value: 3, label: 'Азот', moll: 0.028016, density: 0.808},
    {value: 4, label: 'Воздух', moll: 0.02896, density: 0.873},
    {value: 5, label: 'Водород', moll: 0.0020156, density: 0.0708},
    {value: 6, label: 'Гелий', moll: 0.004003, density: 0.1249},
    {value: 7, label: 'Углекислота', moll: 0.04401, density: 1.0234},
    {value: 8, label: 'Метан', moll: 0.01604, density: 0.415},
]
const scales = [
    {value: 1, label: 'Килограмм'},
    {value: 2, label: 'Литр'},
    {value: 3, label: 'Кубический метр'},
]

function isInt(n) {
    return n % 1 === 0;
}

const CalculatorScreen = () => {
    const [gas, setGas] = useState(null);
    const [scale, setScale] = useState(null);
    const [temp, setTemp] = useState(0);
    const [value, setValue] = useState(0);
    return (
        <View style={{padding: 15}}>
            <DropDown
                data={gases} placeholder={"Выберите газ"}
                searchPlaceholder={"Поиск ..."}
                value={gas}
                onChange={item => {
                    setGas(item)
                }}
            />
            <DropDown
                data={scales}
                value={scale ?? scales[0]}
                placeholder={"Выберите единицу измерения"}
                searchPlaceholder={"Поиск ..."}
                onChange={item => {
                    setScale(item)
                }}
            />
            {scale && scale.value === 3 && <MyTextInput
                returnKeyType={"next"}
                placeholder={"Температура"}
                inputMode={"decimal"}
                keyboardType="numeric"
                value={temp !== 0 ? `${temp}` : '' }
                onChangeText={(value) => {
                    setTemp(value)
                }}
            />}
            <MyTextInput
                returnKeyType={"next"}
                placeholder={"Введите значение"}
                inputMode={"decimal"}
                value={value !== 0 ? `${value}` : '' }
                onChangeText={(value) => {
                    setValue(value)
                }}
            />
            <Button title={"Calculate"} onPress={() => {
                console.log(gas)
                console.log(scale)
                console.log(temp)
                console.log(value)
            }}/>
            <Text/>
        </View>
    )
}

export default CalculatorScreen
