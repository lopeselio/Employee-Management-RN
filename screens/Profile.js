import React from 'react'
import { StyleSheet, View, Text, Image, Linking, Platform } from 'react-native'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import LinearGradient from 'expo-linear-gradient'

const Profile = () => {
    const openDialog = () => {
        if(Platform.OS === 'android'){
            Linking.openURL(('tel: 12345'))
        }else {
            Linking,openURL('telprompt: 12345')
        }
    }
    return(
        <View style={styles.root}>
            <LinearGradient 
                colors={["#0033ff", "#6bc1ff"]}
                style={{height: '20%'}}
            />
            <View style={{alignItems: 'center'}}>
                <Image 
                    style={{width: 140, height: 140, borderRadius: 140/2, marginTop:-50}}
                    source={{uri: 'https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}
                />

            </View>
            <View style={{alignItems:"center", margin: 15}}>
                <Title>John Doe</Title>
                <Text style={{fontSize: 18}}>Web Developer</Text>
            </View>
            <Card style={styles.mycard} onPress={() => {
                Linking.openURL('mailto: abc@abc.com')
            }
            }>
                <View style={styles.cardContent}>
                    <MaterialIcons name='email' size={32} color='#006aff' />
                    <Text style={styles.mytext}>abc@abc.com</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={() => openDialog()}>
                <View style={styles.cardContent}>
                    <Entypo name='phone' size={32} color='#006aff' />
                    <Text style={styles.mytext}>8975906909</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name='attach-money' size={32} color='#006aff' />
                    <Text style={styles.mytext}>12 LPA</Text>
                </View>
            </Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
                <Button theme={theme} icon="account-edit" mode="contained" onPress={() => console.log('Pressed')}>Edit Profile</Button>      
                <Button theme={theme} icon="delete" mode="contained" onPress={() => console.log('Pressed')}>Fire Employee</Button>
            </View>


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
    mycard: {
        margin: 3
    },
    mytext: {
        fontSize: 18, 
        marginTop: 3,
        marginLeft: 5
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    }
})

export default Profile