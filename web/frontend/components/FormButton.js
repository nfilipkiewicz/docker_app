import { getEnforcing } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import { windowHeight } from "../utils/Dimentions";

const FormButton = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity styles = {styles.buttonContainer} { ...rest}>
            <Text style = {styles.buttonText} >{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        backgroundColor: '#f0f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#051d5f',
        //fontFamily: 'Lato-Regular',
    }
})