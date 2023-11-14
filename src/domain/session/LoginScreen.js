import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button, Keyboard } from 'react-native';
import axios from 'axios';
import { fetchApi } from '../../common/utils/Api';
import { config } from '../../../config';
import { Message } from '../../common/components/Alertify';
import { useDispatch } from 'react-redux';
import { login } from './actions';


export default function LoginScreen ({navigation}) {
    // const navigation = useNavigation()
    // const onLogin = () => {
    //     navigation.navigate('Home')
    // }
    // const onNewRegister = () => {
    //     navigation.navigate('Register')
    // }
    // const onForgotpass = () => {
    //     Alert.alert('forget')
    // }
  const dispatch = useDispatch();

    const [logindetails, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleChange = (field, value) => {
        setLogin((prevLogin) => ({
            ...prevLogin,
            [field]: value,
        }));
    };
    // Function to handle login
    // const login = async (logindetails) => {

    //     const response = await fetchApi(config.HOST_NAME + 'user/login', logindetails,'login')
    //     // try {
    //     //     // Define your API endpoint
    //     //     const apiUrl = 'https://webbitech.co.in/testing/public/api/login';
            

    //     //     // Make a POST request to the login endpoint with credentials
    //     //     const {data} = await axios.post(apiUrl, {
    //     //         email: logindetails.email,
    //     //         password: logindetails.password,
    //     //     });
    //     //     console.log('data :>> ', data);
    //     //     // Handle the response data accordingly
    //     //     if (data.success == true) {
    //     //         // Successful login
    //     //         Alert.alert('Login successful:');

    //     //         // You can handle the authentication token here if applicable
    //     //         const authToken = response.data.token;

    //     //         // Store the authentication token or perform other actions
    //     //     } else {
    //     //         // Handle login error
    //     //         Alert.alert('Login failed:');
    //     //     }
    //     // } catch (error) {
    //     //     // Handle network or other errors
    //     //     console.error('Error during login:', error);
    //     // }
    // };
    // const handleLogin = () => {
    //     // Call the login function with the provided credentials
    //     login(logindetails);
    //   };
    const loginHandle = async (loginData) => {
        Keyboard.dismiss()
        if (loginData.email.length == 0 || loginData.password.length == 0) {
          Message('Wrong Input!', 'UserName or password field cannot be empty.');
          return;
        }
        console.log('loginData', { ...loginData,  })
        dispatch(login({ ...loginData,  }));
      };
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../common/assets/images/signup.png')} style={styles.img} />
            <Image source={require('../../common/assets/images/logo.png')} style={styles.img} />
            <Text style={styles.title}>hello again!</Text>
            <Text style={styles.subtitle}>wellcome back you’ve been missed!</Text> */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => handleChange('email', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                // secureTextEntry={true}
                onChangeText={(text) => handleChange('password', text)}
            />
            <Text style={styles.forget} >forget your password?</Text>
            <TouchableOpacity style={styles.customButton} onPress={()=>loginHandle(logindetails)} >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            {/* <Image source={require('../assets/Image/forget_pass.png')} style={styles.img} />
            <Text style={styles.new}>New to N Smart ? <Text style={styles.signup} onPress={onNewRegister}> Sign up</Text></Text> */}
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        paddingTop: 70,
        paddingBottom: 200
    },
    img: {
        marginBottom: 20,
        marginTop: 20
    },
    subtitle: {
        width: '80%',
        color: '#00091F',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Gilroy',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: 20
    },
    title: {
        width: '60%',
        color: '#00091F',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Gilroy',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: 20
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 0,
        borderColor: 'gray',
        marginBottom: 30,
        paddingLeft: 10,
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    forget: {
        fontSize: 14,
        lineHeight: 24,
        color: '#000',
        marginTop: 10,
        marginBottom: 20
    },
    customButton: {
        width: 100,
        backgroundColor: '#66B645',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    new: {
        fontSize: 20
    },
    signup: {
        color: 'green',
        fontSize: 20
    }
});
