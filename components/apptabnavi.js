import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Modal,ScrollView } from 'react-native';
import firebase from 'firebase'
import db from "../config"
import {createBottomTabNavigator}from "react-navigation-tabs"
import Bookdonate from "../screens/bookdonate"
import Bookrequest from "../screens/bookrequest"
import{Image }from "react-native"
export const Apptabnavi=createBottomTabNavigator({

donatebooks:{
    screen:Bookdonate,
    navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-list.png')}/>,
        tabBarLabel:"Donate  Books"
    }
},
bookrequest:{ 
    screen:Bookdonate,
    navigationOptions:{
        tabBarIcon:<Image source={require('../assets/request-book.png')}/>,
        tabBarLabel:"  BOOK REQUEST "}
    }
    
})



















