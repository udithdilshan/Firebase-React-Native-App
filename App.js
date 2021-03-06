import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './src/WelcomeScreen'
import SignUpScreen from './src/SignUpScreen'
import LogInScreen from './src/LogInScreen'
import HomeScreen from './src/HomeScreen'
import AddBookScreen from './src/AddBookScreen'
const Stack =createStackNavigator();

function App(){
  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen}/>     
      <Stack.Screen name="Log In" component={LogInScreen}/>     
      <Stack.Screen name="Home" component={HomeScreen}/>     
      <Stack.Screen name="Add Book" component={AddBookScreen}/>     
     </Stack.Navigator>
</NavigationContainer>
  );
};

export default App;
