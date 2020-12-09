import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import { TextInput } from 'react-native-paper'

const CreateEmployee = () => {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Picture, setPicture] = useState("")
    const [Salary, setSalary] = useState("")

    return(
        <View style={styles.root}>
            <TextInput 
                style={styles.inputStyle}
                label="Name"
                value={Name}
                theme={theme}
                mode='outlined'
                onChangeText={text => setName(text)}
            />
            <TextInput 
                style={styles.inputStyle}
                label="Email"
                value={Email}
                theme={theme}
                mode='outlined'
                onChangeText={text => setEmail(text)}
            />
            <TextInput 
                style={styles.inputStyle}
                label="Phone"
                value={Phone}
                theme={theme}
                keyboardType='number-pad'
                mode='outlined'
                onChangeText={text => setPhone(text)}
            />
            <TextInput 
                style={styles.inputStyle}
                label="Salart"
                value={Salary}
                theme={theme}
                mode='outlined'
                onChangeText={text => setSalary(text)}
            />

        </View>

    )
}

const theme = {
    colors: {
        primart: "#006aff" 
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1

    },
    inputStyle: {
        margin: 5
    }
})

export default CreateEmployee