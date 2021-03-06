import React from 'react'
import {View,Text,StyleSheet ,Button,TextInput} from 'react-native'

export default function AddBookScreen (){
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Enter Book Details </Text>
      <View>
        <Text style={styles.text}>Book Name :</Text>
        <TextInput placeholder="Enter Book Name" style={styles.inputStyle} />
        <Text style={styles.text}>Author Name :</Text>
        <TextInput placeholder="Enter Author Name" style={styles.inputStyle} />
        <Text style={styles.text}>Catagory :</Text>
        <TextInput placeholder="Enter Catagory Name" style={styles.inputStyle} />
        <Text style={styles.text}>Publisher :</Text>
        <TextInput placeholder="Enter Publisher Name" style={styles.inputStyle} />
        <Text style={styles.text}>Publication Date :</Text>
        <TextInput placeholder="Enter Publication Date" style={styles.inputStyle} />
        <Text style={styles.text}>Price :</Text>
        <TextInput placeholder="Enter Price" style={styles.inputStyle} />
      </View>
        <View style={styles.addbook}>
            <Button title="Add Book" color="#ffffff00"/>
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
    marginTop: 10,
    marginBottom:10,
    width: 380,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9d7ea',
  },
  title: {
    marginTop: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1e212d',
    fontSize: 25,
  },
  text: {
    color: '#1e212d',
    fontSize: 16,
  },
  addbook: {
    paddingTop:5,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:50/2,
    width:180,
    height:40,
    backgroundColor:'#111d5e',
    marginTop : 20,
  }
});