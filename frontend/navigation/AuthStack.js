import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

 
const Stack = createStackNavigator();


const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(true);
      }//add some error handling, can do simply setIsFirstLaunch(null)
    })
  }, []);

  if (isFirstLaunch == null){
    return null;
  } else if ( isFirstLaunch == true ) {
    routeName = "Onboarding"; 
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName = {routeName}>
      <Stack.Screen 
        name = "Onboarding"
        component  = {OnboardingScreen}
        options = {{ header: () => null }}
        />
         <Stack.Screen 
        name = "Login"
        component  = {LoginScreen}
        options = {{ header: () => null }}
        />
        <Stack.Screen 
        name = "Signup"
        component  = {SignupScreen}
        options = {({navigation})=> ({
            title: '',
            headerStyle:  {
              backgroundColor: 'transparent',
              shadowColor: 'transparent',
              elevation: 0
            },
            headerLeft:() => (
              <View style = {{marginLeft: 10}}>
                <FontAwesome.Button
                name = "angle-left"
                size = {25}
                backgroundColor='transparent'
                color="#333"
                onPress = {() => navigation.navigate('Login')}
                />
              </View>
            )

        })}
        />
      
    </Stack.Navigator>

  )
  /*const App = () => {
    return (
      <NavigationContainer>
      <AppStack.Navigator headerMode="none">
       <AppStack.Screen name="Onboarding" component ={OnboardingScreen} />
       <AppStack.Screen name="Login" component ={LoginScreen} />
       </AppStack.Navigator> 
      </NavigationContainer>
    )
    
  
};*/
};

export default AuthStack;
