import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import { Entypo,MaterialIcons,FontAwesome } from '@expo/vector-icons'; 
class HomeScreen extends Component{
    constructor(){
        super();
        this.state={}
    }



    render(){
        return(
           <View style={styles.imageContainer}>
               <View style={{margin:20}}>
                   <Image source={require('../image/wiggle.png')}/>
                   <View style={styles.Contain}>
                       <Text style={styles.text}>COVID-19 SCREENING</Text>
                   </View>
                   <View>
                       <TouchableOpacity style={styles.flexContainer}                     
                        onPress={()=>this.props.navigation.navigate('COVID-19 Monitor Q1 V')}
                       >
                           <View style={styles.iconspacing}>
                              <Entypo name="location-pin" size={35} color="red" />
                           </View>
                            <View style={styles.iconspacing}>
                               <Text style={styles.textIconFontSize}>Visitor</Text>
                            </View>
                       </TouchableOpacity>
                       
                           <TouchableOpacity style={styles.flexContainer} 
                           
                           onPress={()=> this.props.navigation.navigate('COVID-19 Monitor Q1 E')}
                           >
                               <View style={styles.iconspacing}>
                                  <MaterialIcons name="work" size={35} color="red" />
                               </View>
                               <View style={styles.iconspacing}>
                                  <Text style={styles.textIconFontSize}>Staff</Text>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity style={styles.flexContainer} 
                           
                           onPress={()=> this.props.navigation.navigate('Profiles')}
                           >
                               <View style={styles.iconspacing}>
                               <FontAwesome name="user" size={35} color="red" />
                               </View>
                               <View style={styles.iconspacing}>
                                  <Text style={styles.textIconFontSize}>Update Profile</Text>
                               </View>
                           </TouchableOpacity>
                       
                   </View>
                   </View>
           </View>
        )
    }
} 


export default HomeScreen;

const styles=StyleSheet.create({
imageContainer:{
    backgroundColor:'white',
    flex:1
},
Contain:{
    marginVertical:80,
    justifyContent:'center',
    alignItems:'center'
},
text:{
    fontSize:23,
    fontWeight:"700"
},
flexContainer:{
    flexDirection:'row',
    padding:40,
    borderColor:"#eee",
    borderWidth:1,
    borderRadius:20,
    margin:10
    
},
imageMargin:{
margin:10
},
iconspacing:{
margin:10
},
textIconFontSize:{
    fontSize:18
}
})

/*
<Entypo name="location-pin" size={24} color="black" />
<MaterialIcons name="work" size={24} color="black" />
<MaterialIcons name="local-hospital" size={24} color="black" />

*/