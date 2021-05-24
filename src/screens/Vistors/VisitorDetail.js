import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,TextInput,Alert} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Fontisto,FontAwesome5,MaterialCommunityIcons,Entypo,EvilIcons, AntDesign } from '@expo/vector-icons'; 
import { Button, Overlay } from 'react-native-elements';
import {db} from '../../util/firebase';

class VisitorDetail extends Component{
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
        const{updatedTemperature}=this.state
        const id=Data.map(item=>{
            return item.id
        })
        await db.collection("Temperature")
        .add({
          date:new Date().toLocaleString(),
          temperature:updatedTemperature
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
          <View >
              {
                  Data.map((item)=>(
                      <View key={item.Data.id}>
                         <View style={styles.header}>
                         </View>

                         <View style={styles.flexCard}>
                         <Fontisto name="date" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.date}</Text>
                         </View>
                         <View  style={styles.flexCard}>
                         <FontAwesome5 name="temperature-high" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.temperature}</Text>
                         </View>
                         <View  style={styles.flexCard}>
                         <MaterialCommunityIcons name="face-profile" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.name}{'  '}{item.Data.lastName}</Text>
                         </View>
                         <View  style={styles.flexCard}>
                         <Entypo name="phone" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.number}</Text>
                        </View>
                        <View  style={styles.flexCard}> 
                        <EvilIcons name="location" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.reasonForVisit}</Text>
                          </View>
                        <View  style={styles.flexCard}>
                        <Fontisto name="blood-test" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.tested}</Text>
                        </View>
                         <View  style={styles.flexCard}>
                         <Entypo name="location-pin" size={24} color="black" />
                         <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.Department}</Text>
                        </View>
                        <View  style={styles.flexCard}>
                        <AntDesign name="idcard" size={24} color="black" />
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                          <Text>{item.Data.IDNumber}</Text>
                        </View>
                         <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={this.toggleOverlay}>
                                    <Text>Update Temperature</Text>
                                </TouchableOpacity>
                         </View>
                         <Overlay   isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
                          <Text style={{textAlign:'center'}}>Update Temperature</Text>
                          <View style={{height:400,width:400,borderRadius:20}}>
                            <TextInput
                            keyboardType="number-pad"
                            style={styles.border}
                              onChangeText={(e)=>this.setState({updatedTemperature:e.trim()})}
                              placeholder="Please enter your temperature"
                              value={this.state.updatedTemperature}
                            />
                            <TextInput
                              onChangeText={(e)=>this.setState({name:e.trim()})}
                              placeholder="Please enter your Name"
                              value={this.state.name}
                              style={styles.border}
                            />
                            <View style={{marginTop:200}}>
                            <Button title="Update"  onPress={this.updateTemperateHandler}   color="#FF0000"/>

                            </View>
                          </View>
                        </Overlay>
                      </View>
                  ))
              }
         </View>
        )
    }
}


export default VisitorDetail;

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
    flexCard:{
       flexDirection:'row',
       borderWidth:1,
       borderTopColor:"#6d7275",
       padding:20
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
      borderBottomWidth:1,
      borderColor:'black',
      marginVertical:25
    }
})