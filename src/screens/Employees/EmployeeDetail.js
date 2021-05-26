import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,TextInput,Alert,ImageBackground,Image} from 'react-native';
import { Fontisto,FontAwesome5,MaterialCommunityIcons,Entypo,EvilIcons, AntDesign } from '@expo/vector-icons'; 
import { Overlay } from 'react-native-elements';
import {db} from '../../util/firebase';

class EmployeeDetail extends Component{
    constructor(){
        super();
        this.state={
              visible:false,
              updatedTemperature:'',
              name:""
        }
    }


     toggleOverlay=()=>{
       this.setState({
         visible:!this.state.visible
       })
     }

     updateTemperateHandler= async ()=>{
       
        const {Data}=this.props.route.params;
        const{updatedTemperature,name}=this.state
        const id=Data.map(item=>{
            return item.id
        })

        await db.collection("Temperature")
        .add({
            date:new Date().toLocaleString(),
            temperature:updatedTemperature,
            name:name
        })

          this.setState({
            updatedTemperature:'',
            name:""
          })

          Alert.alert(`Thank you ${this.state.name} your Temperature has been updated`)

    }

    render(){
        const {Data}=this.props.route.params;
        console.log(Data)
        return(
          <ImageBackground source={require('../../image/Update-price.jpg')} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <View style={{flexDirection:'row'}}>
                  <Image source={require('../../image/Profile.png')} resizeMode="contain" />
                  <Text style={{color:'white',marginTop:60,fontSize:50}}>Update Profile</Text>
              </View>
            <View style={{flex:1,marginTop:50}}>
              
              {
                  Data.map((item)=>(
                      <ScrollView key={item.id}>
                        

                         <View >
                           <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                         <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                         <Fontisto name="date" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.date}</Text>
                          </View>
                         </View>

                         <View  >
                          
                            <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                             <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                            <FontAwesome5 name="temperature-high" size={24} color="black" />
                            <Text>{'  '}</Text>
                            <Text>{'  '}</Text>
                            <Text>{'  '}</Text>
                              <Text>{item.Data.temperature}</Text>
                          </View>
                         </View>


                         <View  >
                         <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                           <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                         <MaterialCommunityIcons name="face-profile" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.name}{'  '}{item.Data.lastName}</Text>
                          </View>
                         </View>

                         <View  >
                         <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                           <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                         <Entypo name="phone" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.number}</Text>
                           </View>
                        </View>

                        <View  > 
                        <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                        <View  style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                        <EvilIcons name="location" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.reasonForVisit}</Text>
                        </View>
                        </View>

                        <View  >
                        <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>

                          <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                        <Fontisto name="blood-test" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.tested}</Text>
                          </View>
                        </View>

                         <View  >
                         <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                           <View style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                         <Entypo name="location-pin" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.Department}</Text>
                          </View>
                        </View>

                        <View  >
                        <Image source={require('../../image/rectangle-bar.png')} resizeMode="contain" style={{width:700}}/>
                         <View  style={{position:'absolute',left:60,flexDirection:'row',top:70}}>
                        <AntDesign name="idcard" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.IDNumber}</Text>
                        </View>
                        </View>

                         <View style={styles.buttonContainer}>
                                <TouchableOpacity  onPress={this.toggleOverlay}>
                                    <Image source={require('../../image/red-bar.png')} resizeMode="center"/>
                                     <Text style={styles.updateText}>Update Temperature</Text>
                                </TouchableOpacity>
                         </View>

                         <Overlay   isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
                          <Text style={{textAlign:'center',fontSize:23}}>Update Temperature</Text>
                          <View style={{height:400,width:400,borderRadius:20}}>
                          <View style={{marginTop:10}}>
                              <Text>Name</Text>
                            <TextInput
                              onChangeText={(e)=>this.setState({name:e.trim()})}
                              placeholder="Please enter your Name"
                              value={this.state.name}
                              style={styles.border}
                            />
                            </View>
                            <View >
                              <Text>Temperature</Text>
                            <TextInput
                            keyboardType="number-pad"
                            style={styles.border}
                              onChangeText={(e)=>this.setState({updatedTemperature:e.trim()})}
                              placeholder="Please enter your temperature"
                              value={this.state.updatedTemperature}
                            />
                            </View>
                            <View style={{marginTop:10,marginLeft:20}}>
                            <TouchableOpacity  onPress={this.updateTemperateHandler} >
                                    <Image source={require('../../image/red-bar.png')} resizeMode="center" style={{width:350}}/>
                                     <Text style={{position:'absolute',top:60,left:90,color:'white'}}>Update Temperature</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </Overlay>
                      </ScrollView>
                  ))
              }
              </View>
         </ImageBackground>
        )
    }
}


export default EmployeeDetail;

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    header:{
      height:400,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonContainer:{
      marginTop:100,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      backgroundColor:'red',
      padding:25,
      borderRadius:40
    },
    overlay:{
      height:500
    },overlayHeight:{
      height:400,
      width:500
    },
    border:{
      borderWidth:1,
      borderColor:'black',
      marginVertical:25,
      padding:15
    },
    updateText:{
      position:'absolute',
      left:200,
      top:50,
      color:'white',
      fontSize:25
    }
})