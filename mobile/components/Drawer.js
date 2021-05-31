import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import {ScrollView,View,ImageBackground,Text,StyleSheet,AsyncStorage} from "react-native";
import { ME_URL } from "../config/urls";
import axios from "../config/axios";
import {transFormName} from "../config/helpers"

class Drawer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:null,
        };
    }

    componentDidMount(){
        this._getProfile();
    }

    _getProfile=async()=>{
      const token = await AsyncStorage.getItem("accessToken");
      axios.defaults.headers.common.Authorization=`JWT ${token}`;
      const response= await axios.get(ME_URL);
      this.setState({user:response.data});
    }
    render(){
        const {user}=this.state;
        return(
            <ScrollView >
                <View style={styles.drawerHeaderContainer}>
                    <ImageBackground source={require('../assets/ac.png')} style={styles.background}>
                        {user && (
                            <View style={styles.userMeta}>
                                <View style={styles.userAvatr}>
                                    <Text style={styles.userAvatrText}>{transFormName(user.name.toUpperCase())}</Text>
                                </View>
                                <Text style={styles.username}>{user.name}</Text>
                                <Text style={styles.email}>{user.email}</Text>
                            </View>
                        )}
                    
                    </ImageBackground>
                </View>
                <DrawerItems  {...this.props.drawerProps}/>
                
            </ScrollView>
        )
    }
}

const styles =StyleSheet.create({
    drawerHeaderContainer:{
        height:180
    },
    background:{
        height:"100%",
        width:"100%",
        justifyContent:"flex-start",
        marginTop:0
    },
    userMeta:{
        marginBottom:10,
        marginLeft:15,
        alignItems:"flex-start"
    },
    userAvatr:{
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:"#007bff",
        alignSelf:"flex-start",
        marginTop:40,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center"
    },
    userAvatrText:{
        fontSize:25,
        color:"#fff",
        fontWeight:"bold"
    },
    username:{
        fontSize:20,
        color:"#fff",
        fontWeight:"bold"
    },
    email:{
        fontSize:16,
        color:"#fff",
    }
});



export default Drawer;