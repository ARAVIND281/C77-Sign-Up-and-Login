import React from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'

export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = ({
            emailId: '',
            password: ''
        });
    }

    signUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then((response) => {
                return Alert.alert("User added successfully")
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                return Alert.alert(errorMessage);
            });
    }

    Login = (emailId, password) => {
        firebase.auth().signInWithEmailAndPassword(emailId, password)
            .then((response) => {
                return Alert.alert("Login successfully")
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
            });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#58be85', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text style={{ color: '#ff4500', fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }}>
                        Book Santa
                    </Text></View>

                <View>
                    <TextInput keyboardType="email-address"
                        placeholder="abc@xyz.com"
                        onChangeText={(text) => { this.setState({ emailId: text }) }}
                        style={styles.textInput}
                    />
                    <TextInput secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        style={styles.textInput}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => { this.Login(this.state.emailId, password) }}>
                        style = {styles.button}
                        <Text style={style.WelcomeButtontext}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.signUp(this.state.emailId, password) }}>
                        style = {styles.button}
                        <Text style={style.WelcomeButtontext}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    textInput: {
        width: 200,
        height: 40,
        margin: 10,
        padding: 10,
        borderWidth: 1.5,
        borderRadius: 4,
        fontSize: 20,
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#ffa500',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
    },
    WelcomeButtontext: {
        color: '#3333ff',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',

    },
})

// npm install firebase@36.0.0