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
              updatedTemperature:''
        }
    }


     toggleOverlay=()=>{
       this.setState({
         visible:!this.state.visible
       })
     }

     updateTemperateHandler=()=>{
        const {Data}=this.props.route.params;
        const id=Data.map(item=>{
            return item.id
        })
        const {updatedTemperature}=this.state;
        db.collection('Visitors').doc(`${id}`).update({
            temperature: updatedTemperature
          })
          Alert.alert("Temperature Updated")
        console.log(id)
          
    }

    render(){
        const {Data}=this.props.route.params;
        return(
          <View >
              {
                  Data.map((item)=>(
                      <View key={item.id}>
                         <View style={styles.header}>
                              <Avatar
                               size="xlarge"
                                rounded
                                source={{
                                  uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                              />
                         </View>
                         {/* <LineChart
                          data={data}
                          width={screenWidth}
                          height={220}
                          chartConfig={this.state.chartConfig}
                          /> */}
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
                         <Overlay  isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
                          <Text>Update Temperature</Text>
                          <View>
                            <TextInput
                              onChangeText={(e)=>this.setState({updatedTemperature:e.trim()})}
                              placeholder="Please enter your temperature"
                              value={this.state.updatedTemperature}
                            />
                            <Button title="Update"  onPress={this.updateTemperateHandler}   color="#FF0000"/>
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
    }
})