import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { Card, FAB } from 'react-native-paper'

function Home(){
    
    const data = [
        {id:1, name: "John", position: "web dev"},
        {id:2, name: "Son", position: "app dev"},
        {id:3, name: "Don", position: "ML dev"},
        {id:4, name: "Ron", position: "designer"},
        {id:5, name: "Ron", position: "designer"},
        {id:6, name: "Ron", position: "designer"},
        {id:7, name: "Ron", position: "designer"},
        {id:8, name: "Ron", position: "designer"},
        {id:9, name: "Ron", position: "designer"},
        {id:10, name: "Ron", position: "designer"}



    ]

    const renderList = ((item) => {
        return(
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardView}>
                    <Image 
                        style={{width: 60, height: 60, borderRadius: 30}}
                        source={{uri:"https://images.unsplash.com/photo-1595399874399-10f2444c4eb2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text>{item.position}</Text>
                    </View>
                </View>
            </Card>

        )
    })
    
    return (
        <View>
            {/* {renderList} */}
            <FlatList
                data={data}
                renderItem={({item}) => {
                    console.log(item)
                    return renderList(item)
                }}
                keyExtractor={(item) => `${item.id}`}
            />
            <FAB
                style={styles.fab}
                small = {false}
                icon="plus"
                theme={{colors: {accent: '#006aff'}}}
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5, 
        padding: 5
    },
    cardView: {
        flexDirection: 'row'
    }, 
    text: {
        fontSize: 18,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

export default Home
