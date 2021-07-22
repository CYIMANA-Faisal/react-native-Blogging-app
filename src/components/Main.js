import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput  } from 'react-native-paper';
import { UsersContext } from '../context/usersContext';

export default function Main({ navigation }) {
  const {users} = useContext(UsersContext);
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [auth, setAuth] = useState(false)

  const handleLogin = (email, users, setAuth) => {
    // users.map((user) => {
    //   if (email === user.email) {
    //     setAuth(true)
    //     navigation.navigate('Dashboard')
    //   }else{
    //     setError("Please use the registered email")
    //   }
    // })
    navigation.navigate('Dashboard')
  }
  
  return (
    <View style= {styles.mainScreenContainer}>
      <Text style={styles.error}>{error}</Text>
      <TextInput
        label="Email"
        value={email}
        placeholder= "Use your email to login"
        onChangeText={(val) => setEmail(val)}
        color = "black"
        outlineColor = "#0F9D58"
        style= {styles.emailInput}
      />
      <Button 
      uppercase={true} 
      icon="login" 
      mode="contained" 
      onPress={() => {handleLogin(email, users, setAuth)}} 
      style={styles.loginButon}>
        Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    mainScreenContainer: {
        backgroundColor: '#ffffff',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButon: {
      backgroundColor: '#0F9D58',
      color: "#ffffff",
      padding: 5,
    },
    emailInput: {
      fontSize: 20,
      width: "80%",
      height: 50,
      borderColor: "#0F9D58",
      marginBottom:40,
      padding: 5
    },
    error:{
      color: 'red',
      fontSize: 20,
    }
});
