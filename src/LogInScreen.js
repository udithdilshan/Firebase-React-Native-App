import React from 'react'
import {View,Text,StyleSheet ,Button,TextInput} from 'react-native'

export default function LogInScreen ({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.formText}>Log In</Text>
      <View>
        <TextInput placeholder="Enter Email" style={styles.inputStyle} />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputStyle}
        />
      </View>
        <View style={styles.login}>
            <Button
                color="#ffffff00"
            onPress={()=> navigation.navigate('Home')}
            title="Log In"
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 300,
  },
  inputStyle: {
    marginTop: 20,
    width: 350,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#8ac4d0',
  },
  formText: {
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1e212d',
    fontSize: 30,
  },
  text: {
    color: '#1e212d',
    fontSize: 20,
  },
  login: {
    paddingTop:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:50/2,
    width:180,
    height:42,
    backgroundColor:'#163172',
    marginTop : 20,
  }
});