import React, {useState} from 'react';
import { View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                source = {require('../assets/time-to-travel.png')}
                style = {styles.logo}
            />
            <Text style = {styles.text}>Trip App</Text>   
            <FormInput 
                labelValue = {email}
                onChangeText = {(userEmail) => setEmail(userEmail)}
                placeholderText = "Email"
                iconType="user"
                keyboardType ="email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            
            <FormInput 
                labelValue = {password}
                onChangeText = {(userPassword) => setPassword(userPassword)}
                placeholderText = "Password"
                iconType="lock"
                secureTextEntry = {true}
            />
            <FormButton 
                buttonTitle = "Sign In"
                backgroundColor="#f5e7ea"
                onPress={() => alert('Sign In Clicked!')}
            />
            <TouchableOpacity 
                style = {styles.forgotButton} onPress={() => {}}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            
            <SocialButton
                buttonTitle ="Sign In with Facebook"
                btnType = "facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
            />
            <SocialButton
                buttonTitle ="Sign In with Google"
                btnType = "google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />
            <TouchableOpacity 
                style = {styles.forgotButton} 
                onPress={() => navigation.navigate('Signup')}>
                <Text>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        //fontFamily: 'Lato-Regular',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
        paddingTop: 20
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 25,
        color: '#051d5f'
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        //fontFamily: 'Lato-Regular',
      },
});