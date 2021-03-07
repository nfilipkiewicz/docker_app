import { getEnforcing } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';
import { windowHeight, windowWidth } from "../utils/Dimentions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SocialBottom = ({buttonTitle, btnType, color, backgroundColor, ...rest}) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style = {[styles.buttonContainer, {backgroundColor: bgColor}]}
        { ...rest}>
            <View style = {styles.iconWrapper}>
                <FontAwesome name = {btnType} size = {22} color = {color} />
            </View>
            <View style = {styles.btnTxtWrapper}>
                <Text style = {[styles.buttonText, {color: color}]} >{buttonTitle}</Text>
            </View> 
        </TouchableOpacity>
    );
};

export default SocialBottom;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        //fontFamily: 'Lato-Regular',
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})