import React from "react";

import {ScrollView,View,Text,CheckBox,Platform,KeyboardAvoidingView} from "react-native";

import styles from "./styles/authStyle";

import ScreenTitle from "../components/ScreenTitle";

import Input from "../components/Input";

import Button from "../components/Button";

import Loader from "../components/Loader";

import Alert from "../components/Alert";

import axios from "../config/axios";

import {SIGNUP_URL} from "../config/urls";

import * as Location from 'expo-location';

class SignUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            speialization:"",
            phone:"",
            address:"",
            workingHours:"",
            userType:false,
            location:null,
            isLoading:false,
            alert:{
                message:null,
                type:""
            }

        }
    }

   
    UNSAFE_componentWillMount() {
        this._getLocation();
      }
    
      _getLocation = async () => {
        try {
          let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest});
          this.setState({location});
        }
        catch (e) {
          this.setState({location: null});
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

    changeNameHabdler=value=>{
        this.setState({name:value})
    };
    changeEmailHabdler=value=>{
        this.setState({email:value})
    };
    changePasswordHabdler=value=>{
        this.setState({password:value})
    };
    changePhoneHabdler=value=>{
        this.setState({phone:value})
    };
    changeUserTypeHabdler=()=>{
        this.setState({userType: !this.state.userType})
    };
    changeSpeializationHabdler=value=>{
        this.setState({speialization:value})
    };
    changeAddressHabdler=value=>{
        this.setState({address:value})
    };
    changeWorkingHoursHabdler=value=>{
        this.setState({workingHours:value})
    };
    
  validate() {
    const { name,email,password,speialization,userType,address,phone,workingHours } = this.state;
    let validationErrors = [];
    let passed = true;
    if (!name) {
      validationErrors.push("الرجاء إدخال اسم المستخدم");
      passed = false;
    }

    if (!email) {
      validationErrors.push("الرجاء إدخال البريد الإلكتروني");
      passed = false;
    }

    if (!password) {
      validationErrors.push("الرجاء إدخال كلمة المرور");
      passed = false;
    }

    if (userType) {
      if (!speialization) {
        validationErrors.push("الرجاء إدخال التخصص ");
        passed = false;
      }

      if (!address) {
        validationErrors.push("الرجاء إدخال العنوان");
        passed = false;
      }

      if (!workingHours) {
        validationErrors.push("الرجاء إدخال ساعات العمل");
        passed = false;
      }

      if (!phone) {
        validationErrors.push("الرجاء إدخال رقم الهاتف");
        passed = false;
      }

    }

    if (validationErrors.length > 0) {
      this.setState({ alert: { messages: validationErrors, type: "danger" } });
    }
    return passed;
  }

    _signUp=async () =>{
        if(!this.validate())return;
        this.setState({isLoading:true})
        const {name,email,password,speialization,userType,address,phone,workingHours ,location }=this.state;
        const body={
            name,
            email,
            password,
            userType:userType ? "doctor" : "normal",
            speialization,
            address,
            phone,
            workingHours,
            location:{
                latitude: location ? location.coords.latitude : null,
                longitude: location ? location.coords.longitude : null
            }
           
        };
        try{
            const response = await axios.post(SIGNUP_URL,body);
                this.setState({
                    name:"",
                    email:"",
                    password:"",
                    speialization:"",
                    phone:"",
                    address:"",
                    workingHours:"",
                    userType:false,
                    location:null,
                    isLoading:false,
                });
                this.props.navigation.navigate('SignIn',{
                    alert:{messages:'تم تسجيل حسابك بنجاح ' ,type:'success'}
                })
        }catch(e){
            this.setState({
                alert:{messages : e.response.data.message ,type:"danger"},
                isLoading:false
            })
        }
    }
    render(){
        const {name,email,speialization,userType,password,address,phone,workingHours,isLoading,alert  }=this.state;
        return(
            <ScrollView contentContainerStyle={{paddingVertical:40}}>
                <Loader title="جاري انشاء الحساب" loading={isLoading}/>
                <Alert messages={alert.messages} type={alert.type}/>
                <View style={styles.container}>

                    <ScreenTitle title="انشاء حساب جديد"  icon="md-person-add"/>
                    <KeyboardAvoidingView behavior="padding" enabled>

                        <Input
                             placeholder="الاسم" 
                            onChangeText={this.changeNameHabdler}
                            value={name}
                        />
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

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                style={styles.checkBox}
                                value={userType}
                                onChange={this.changeUserTypeHabdler}
                             />
                            <Text style={styles.checkBoxLabel}>طبيب</Text>
                        </View>
                        {userType && (

                            <React.Fragment>
                                <Input 
                                    placeholder="التخصص"
                                    onChangeText={this.changeSpeializationHabdler}
                                    value={speialization}
                                />
                                <Input 
                                    onChangeText={this.changeWorkingHoursHabdler}
                                    value={workingHours}
                                    placeholder="ساعات العمل "
                                />
                                <Input 
                                    onChangeText={this.changeAddressHabdler}
                                    value={address}
                                    placeholder="العنوان"
                                />
                                <Input 
                                    onChangeText={this.changePhoneHabdler}
                                    value={phone}
                                    placeholder=" رقم الهاتف"
                                />
                            </React.Fragment>
                            
                        )}
                     
                        <Button text=" إنشاء حساب " onPress={this._signUp}/>

                    </KeyboardAvoidingView>

                </View>
               
            </ScrollView>
        )
    }
};

export default SignUpScreen;