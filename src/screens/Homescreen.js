import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,Image} from 'react-native'
import { Entypo,MaterialIcons, AntDesign  } from '@expo/vector-icons'; 
class HomeScreen extends Component{

    render(){
        return(
           <ImageBackground  source={require('../image/digital-background.jpg')}style={styles.imageContainer}>
               <View style={{margin:20}}>
                   <View style={styles.imageContainers} >
                   <Image source={require('../image/wiggle.png')} resizeMode="center"  />
                   </View>
                   <View style={styles.justifyFlex}>
                              <Image source={require('../image/Stroke-bar.png')} resizeMode="contain" style={{width:450}}/>
                            <Text style={styles.text}>COVID SCREENING</Text>
                   </View>
                   <View style={{justifyContent:'center',alignItems:'center'}}>
                       <TouchableOpacity                     
                        onPress={()=>this.props.navigation.navigate('COVID-19 Monitor Q1 V')}
                       >
                           <Entypo name="location" size={35} color="black" style={styles.icon1}/>
                            <Image source={require('../image/bar.png')}  resizeMode="center" style={{height:100}}/>
                            <View style={styles.iconspacing1}>
                               <Text style={styles.textIconFontSize}>Visitor</Text>
                            </View>
                       
                       </TouchableOpacity>
                       
                           <TouchableOpacity
                           onPress={()=> this.props.navigation.navigate('COVID-19 Monitor Q1 E')}
                           >
                               <Image source={require('../image/Staff.png')} resizeMode="center" style={styles.imageIcon}/>
                               <Image source={require('../image/bar.png')}  resizeMode="center" style={{height:100}}/>
                               <View style={styles.iconspacing2}>
                                  <Text style={styles.textIconFontSize}>Staff</Text>
                               </View>
                               
                           </TouchableOpacity>

                           <TouchableOpacity 
                           onPress={()=> this.props.navigation.navigate('Profiles')}
                           >
                               <AntDesign name="user" size={35} color="black" style={styles.icon3} />
                                <Image source={require('../image/bar.png')}  resizeMode="center" style={{height:100}}/>
                               <View style={styles.iconspacing3}>
                                  <Text style={styles.textIconFontSize}>Update Profile</Text>
                               </View>
                              
                           </TouchableOpacity>
                           <TouchableOpacity  
                           onPress={()=> this.props.navigation.navigate('Scan Face')}
                           >
                               <MaterialIcons name="qr-code-scanner" size={35} color="black" style={styles.icon4}  />
                             <Image source={require('../image/bar.png')}  resizeMode="center" style={{height:100}}/>
                               <View style={styles.iconspacing4}>
                                  <Text style={styles.textIconFontSize}>Scan Face</Text>
                               </View>
                               
                           </TouchableOpacity>
                   </View>
                   </View>
           </ImageBackground>
        )
    }
} 


export default HomeScreen;

const styles=StyleSheet.create({
imageContainer:{
    flex:1
},
Contain:{
    marginVertical:80,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    borderRadius:45,
    padding:20,
    width:400
},
justifyFlex:{
 justifyContent:'center',
 alignItems:'center'
},
text:{
    fontSize:28,
    fontWeight:"bold",
    position:'absolute',
    zIndex:1
},
flexContainer:{
    flexDirection:'row',
    padding:20,
    borderRadius:40,
    margin:10,
    width:500
    
},
imageMargin:{
margin:10
},
icon1:{
    position:'absolute',
    left:230,
    top:30,
    zIndex:2
},
icon2:{
    position:'absolute',
    left:230,
    top:40,
    zIndex:2
},
icon3:{
    position:'absolute',
    left:230,
    top:35,
    zIndex:2
},
icon4:{
    position:'absolute',
    left:230,
    top:30,
    zIndex:2
},
iconspacing1:{
margin:10,
position:'absolute',
left:280,
top:20
},
iconspacing2:{
    margin:10,
    position:'absolute',
    left:280,
    top:20
},
iconspacing3:{
    margin:10,
    position:'absolute',
    left:280,
top:20
},
iconspacing4:{
    margin:10,
    position:'absolute',
    left:280,
top:20
},
textIconFontSize:{
    fontSize:25
},
imageContainers:{
    alignItems:'center',
    justifyContent:'center'
},
imageIcon:{
    position:'absolute',
    width:50,
    left:220,
    zIndex:2,
    bottom:-40
}
})

/*
<Entypo name="location-pin" size={24} color="black" />
<MaterialIcons name="work" size={24} color="black" />
<MaterialIcons name="local-hospital" size={24} color="black" />

*/