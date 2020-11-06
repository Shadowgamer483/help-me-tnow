import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Modal,ScrollView } from 'react-native';
import firebase from 'firebase'
import db from "../config"
export default class Login_Screen extends Component {
constructor(){
    super()
this.state={emailID:"",
Password:"",
IsModalVisible:false,
FirstName:"",
LastName:"",
address:"",
Contact:"",
ConfirmPassword:""
}}

Login=(emailID,Password)=>{
firebase.auth().signInWithEmailAndPassword(emailID,Password).then(()=>{
    this.props.navigation.navigate("donatebooks")
return Alert.alert("succesfull LOGIN")
})
.catch((error)=>{
var ErrorCode=error.code;
var errmsg=error.message;
return Alert.alert(errmsg)
})
}

sighn_up=(emailID,Password,ConfirmPassword)=>{
if(Password!==ConfirmPassword){
 return  Alert.alert("Password does not MATCH")
}else{
 firebase.auth().createUserWithEmailAndPassword(emailID,Password).then(()=>{
     db.collection("users").add({
         FirstName:this.state.FirstName,
        LastName:this.state.LastName,
        Contact:this.state.Contact,
        address:this.state.address,
        emailID:this.state.emailID})
return Alert.alert("YOU ARE NOW PART OF SOMETHING GREATER",'',
 [ {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})}, ]
)
})
.catch((error)=>{
        var ErrorCode=error.code;
        var errmsg=error.message;
        return Alert.alert(errmsg)
        
        })
        }
}
ShowModal=()=>{

return(
<Modal  animationType="fade"
transparent={true}
visible={this.state.IsModalVisible}>
<View style={styles.modalContainer}>
<ScrollView style={{width:"100%"}}>
<KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
<Text style={styles.modalTitle}>
REGISTRATION
</Text>
<TextInput style={styles.formTextInput}
placeholder={"FirstName"}
maxLength={9}
onChangeText={(text)=>{
    this.setState({FirstName:text})
}}
/>

<TextInput style={styles.formTextInput}
placeholder={"LastName"}
maxLength={9}
onChangeText={(text)=>{
    this.setState({LastName:text})
}}
/>

<TextInput style={styles.formTextInput}
placeholder={"Contact"}
maxLength={10}
keyboardType={"numeric"}
onChangeText={(text)=>{
    this.setState({Contact:text})
}}
/>
<TextInput style={styles.formTextInput}
placeholder={"address"}
multiline={true}
onChangeText={(text)=>{
    this.setState({address:text})
}}
/>

<TextInput style={styles.formTextInput}
placeholder={"EmailD"}
keyboardType={"email-address"}
onChangeText={(text)=>{
    this.setState({emailID:text})
}}
/>

<TextInput style={styles.formTextInput}
placeholder={"Password"}
secureTextEntry={true}
onChangeText={(text)=>{
    this.setState({Password:text})
}}
/>
<TextInput style={styles.formTextInput}
placeholder={"ConfirmPassword"}
secureTextEntry={true}
onChangeText={(text)=>{
    this.setState({ConfirmPassword:text})
}}
/>
<View>
    <TouchableOpacity style={styles.registerButton}onPress={()=>{
       this.sighn_up(this.state.emailID,this.state.Password,this.state.ConfirmPassword) }}>
        <Text>
            Register
        </Text>
    </TouchableOpacity>
</View>
<View>

<TouchableOpacity style={styles.cancelButton}onPress={()=>this.setState({"IsModalVisible":false})}><Text>CANCEL</Text></TouchableOpacity>

</View>
</KeyboardAvoidingView>

</ScrollView>
    
</View>
</Modal>
)
}
render(){

return(<View style={styles.container}>
    {this.ShowModal()}
    <View><Text style={styles.title}>
        
        BOOK SANTA HOHOHOHOHOHOHOH
        
        </Text></View>
        <View>   
<TextInput style={styles.loginBox}

placeholder="Name@example.com"
keyboardType='email-address'
onChangeText={(text)=>{
this.setState({emailID:text})
}}
/>
<TextInput style={styles.loginBox}

placeholder="ENTER UR PASSWORD"
secureTextEntry={true}
onChangeText={(text)=>{
this.setState({Password:text})
}}
/>
<TouchableOpacity style={styles.button}onPress={()=>{this.Login(this.state.emailID,this.state.Password)}}>
<Text> Login</Text>


</TouchableOpacity>
<TouchableOpacity style={styles.button}onPress={()=>{this.setState({isModalVisible:true})}}>
<Text> Sighn UP</Text>


</TouchableOpacity>
        </View>
</View>)


}

}


















const styles = StyleSheet.create({ container:{ flex:1, backgroundColor:'#F8BE85' }, profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', }, title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
 loginBox:{ width: 300, height: 40,
     borderBottomWidth: 1.5, 
     borderColor : '#ff8a65', 
     fontSize: 20,
      margin:10,
       paddingLeft:10 },
       button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32,
     elevation: 16,
     }, container:{ flex:1, backgroundColor:'#F8BE85', alignItems: 'center', justifyContent: 'center' },
      profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
       title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
     KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' },
      modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 },
      formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10 },
       registerButton:{ width:200, height:40, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:10, marginTop:30 },
        registerButtonText:{ color:'#ff5722', fontSize:15, fontWeight:'bold' },
       cancelButton:{ width:200, height:30, justifyContent:'center', alignItems:'center', marginTop:5, },
       modalContainer:{ flex:1, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:"#ffff", marginRight:30, marginLeft : 30, marginTop:80, marginBottom:80, },
     buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 },
      buttonContainer:{ flex:1, alignItems:'center' } })