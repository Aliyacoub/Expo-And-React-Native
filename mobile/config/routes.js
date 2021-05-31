import React from "react";
import {I18nManager} from "react-native";
import {createAppContainer} from "react-navigation";

import { createDrawerNavigator } from 'react-navigation-drawer';

import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/Home";

import DoctorsScreen from "../screens/Doctors";

import SignUpScreen from "../screens/SignUp";

import SignInScreen from "../screens/SignIn";

import ProfileScreen from "../screens/Profile";

import Drawer from "../components/Drawer";

const DoctorsStack =  createStackNavigator({
    DoctorsScreen:{ screen:DoctorsScreen },
})

const  ProfileStack =  createStackNavigator({
    ProfileScreen:{ screen:ProfileScreen },
})

//التنقل الجانبي 

const DrawerNavigator=createDrawerNavigator({
    Doctors:{
        screen:DoctorsStack,
        navigationOptions:{
            drawerLabel:"الاطباء",
        }
    },
    Profiles:{
        screen:ProfileStack,
        navigationOptions:{
            drawerLabel:"الملف الشخصي",
        }
    },
},{
    contentOptions: {
        itemStyle: {
            flexDirection: 'row'
        },
        labelStyle: {
            fontSize: 18,
            marginRight: 5
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#007bff'
    },
    drawerPosition: I18nManager.isRTL ? 'right' : 'left',
    drawerWidth: 300,
    contentComponent:props=>(
        <Drawer drawerProps={props} />
    )
});

//عرض التنقل بالشكل الصحيح
export default createAppContainer(
    createStackNavigator({
        Main:HomeScreen,
        SignUp:SignUpScreen,
        SignIn:SignInScreen,
        DrawerNav:DrawerNavigator,
    },{
        headerMode:"none"
    })
);

