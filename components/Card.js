import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    card:{ 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},     // todos los shadowProperties sirven para IOS
        shadowRadius: 6,
        shadowOpacity: 0.26, 
        backgroundColor: 'white',  // Hay que asegurar que el fondo es blanco 
        elevation: 5 , // Solo para android 
        padding: 20,
        borderRadius: 10
    }
})

export default Card