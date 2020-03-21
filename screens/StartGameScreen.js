import React from 'react'
import { StyleSheet, Text, View, TextInput ,Button } from 'react-native'

const StartGameScreen = props  => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}} />  
                    <Button title="Confirm"  onPress={() => {}}/>  
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        flex: 1 ,
        padding: 10,
        alignItems: 'center', // Ejes Horizontales        
    },
    title:{
        fontSize: 20,
        marginVertical: 10, // Replace marginBottom  and marginTop
        
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center' , // Ejes horizontales 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},     // todos los shadowProperties sirven para IOS
        shadowRadius: 6,
        shadowOpacity: 0.26, 
        backgroundColor: 'white',  // Hay que asegurar que el fondo es blanco 
        elevation: 5 , // Solo para android 
        padding: 20,
        borderRadius: 10

    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen
