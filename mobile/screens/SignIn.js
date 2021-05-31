import React from "react";

import {ScrollView,KeyboardAvoidingView,AsyncStorage} from "react-native";

import styles from "./styles/authStyle";

import Container from "../components/Container"

import ScreenTitle from "../components/ScreenTitle";

import Input from "../components/Input";

import Button from "../components/Button";

import Loader from "../components/Loader";

import Alert from "../components/Alert";

import axios from "../config/axios";

import { SIGNIN_URL } from "../config/urls";


class SignInScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            isLoading:false,
            alert:{
                messages:null,
                type:""
            }

        }
    }
    componentDidMount(){
        const alert = this.props.navigation.getParam('alert');
        if(alert){
            this.setState({alert});
        }
    }

    componentDidUpdate(){
        if(this.state.alert.messages){
            setTimeout(() => {
                this.setState({alert:{messages:null}});
            }, 3000);
        }
    }

    componentWillUnmount(){
        clearTimeout();
    }


    changeEmailHabdler=value=>{
        this.setState({email:value})
    };
    changePasswordHabdler=value=>{
        this.setState({password:value})
    };

    validate() {
        const { email,password,isLoading,alert } = this.state;
        let validationErrors = [];
        let passed = true;
    
        if (!email) {
          validationErrors.push("الرجاء إدخال البريد الإلكتروني");
          passed = false;
        }
    
        if (!password) {
          validationErrors.push("الرجاء إدخال كلمة المرور");
          passed = false;
        }
    
        if (validationErrors.length > 0) {
          this.setState({ alert: { messages: validationErrors, type: "danger" } });
        }
        return passed;
      }

      _signIn=async () =>{
        if(!this.validate())return;
        this.setState({isLoading:true})

        const body={
            email:this.state.email,
            password:this.state.password
           
        };
        try{
            const response = await axios.post(SIGNIN_URL,body);
                this.setState({
                    email:"",
                    password:"",
                    isLoading:false
                });
                AsyncStorage.setItem("accessToken",response.data.accessToken);
                this.props.navigation.navigate('Doctors');
                
        }catch(e){
            this.setState({
                alert:{messages : e.response.data.message ,type:"danger"},
                isLoading:false
            })
        }
    }
      render(){
        const {email,password,isLoading,alert }=this.state;
        return(
           <Container>
                <Loader title=" جاري تسجيل الدخول " loading={isLoading}/>
                <Alert messages={alert.messages} type={alert.type}/>
                <ScrollView 
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.container}
                >

                        <ScreenTitle title=" تسجيل الدخول"  icon="md-log-in"/>
                        <KeyboardAvoidingView behavior="padding" enabled>

                            <Input 
                                placeholder="البريد الالكتروني"
                                onChangeText={this.changeEmailHabdler}
                                value={email}
                            />
                            <Input
                                onChangeText={this.changePasswordHabdler}
                                value={password}
                                placeholder="كلمة المرور" 
                                secureTextEntry
                            />
                        </KeyboardAvoidingView>
                        <Button text="تسجيل الدخول " onPress={this._signIn}/> 
                </ScrollView>
            </Container>
        )
    }
}


export default SignInScreen;