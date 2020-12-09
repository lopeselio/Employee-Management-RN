import React, { useState } from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Modal} from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CreateEmployee = () => {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Picture, setPicture] = useState("")
    const [Salary, setSalary] = useState("")
    const [modal, setModal] = useState("")
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
            <Button style={styles.inputStyle} icon="upload" mode="contained" onPress={() => setModal(true)}>Upload Image</Button>
            <Button style={styles.inputStyle} icon="content-save" mode="contained" onPress={() => console.log('pressed')}>Save</Button>
            
            <Modal 
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={() => {setModal(false)}}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button theme={theme} icon='camera' mode='contained' onPress={() => console.log('pressed')}>Camera</Button>
                        <Button theme={theme} icon='image-area' mode='contained' onPress={() => console.log('pressed')}>Gallery</Button>
                    </View>
                    <Button theme={theme} onPress={() => setModal(false)}>Cancel</Button>


                </View>
                
            </Modal>

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
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent:'space-around',
        padding: 10
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: 'white'

    }
})

export default CreateEmployee