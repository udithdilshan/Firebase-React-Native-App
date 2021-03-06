import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
export default function WelcomeScreen({navigation}){
    return (
        <View style={styles.container}>  
        <Text style={styles.text}>Welcome to My Library</Text>  
        <View style={styles.login}>
            <Button
                color="#ffffff00"
                style="box-shadow: 0px 0px 0p;"     
            onPress={()=> navigation.navigate('Log In')}
            title="Log In"
            />
        </View>
        <View style={styles.signup}>
            <Button
                color="#ffffff00"
            onPress={()=> navigation.navigate('Sign Up')}
            title="Sign Up"
            />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      paddingTop:100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 300,
    },
    text: {
      marginBottom: 50,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00b8a9',
      fontSize: 40,
    },
    signup: {
      paddingTop:5,
      paddingLeft:10,
      paddingRight:10,
      borderRadius:50/2,
      width:180,
      height:42,
      backgroundColor:'#26001b',
      marginTop : 20,
    },
    login: {
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:50/2,
        width:180,
        height:42,
        backgroundColor:'#132743',
        marginTop : 20,
      }
  });