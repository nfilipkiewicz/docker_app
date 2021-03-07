import React from 'react';
import { View, Text, Button, Image, Dimensions, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from "../utils/Dimentions";

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
            pages={[
                {   
                    backgroundColor: '#fff',
                    image: <Image style = {styles.image} source={require('./images/beauty.jpg')} />,
                    title: 'Onboarding 1',
                    subtitle: ' ',
                    resizeMode: 'contain'
                },
                {
                    backgroundColor: '#fff',
                    image: <Image  style = {styles.image} source={require('./images/beauty3.png')}/>,
                    title: 'Onboarding 2',
                    subtitle: 'Take even more from trips with Madafaka App',  
                    resizeMode: 'contain'
                },
                {
                    backgroundColor: '#fff',
                    image: <Image  style = {styles.image} source={require('./images/beauty2.jpg')}/>,
                    title: 'Onboarding 2',
                    subtitle: 'Take even more from trips with Madafaka App',  
                    resizeMode: 'contain'
                },
                
            ]}

        />
    );

};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 0,
        alignItems: 'center',
        width: windowWidth,
        height: windowHeight
    },
    text: {
        flex: 1,
        position: 'absolute',
        fontSize: 25
    },
});