import React,{Component} from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'

class VisitorsThanks extends Component{


    returnHomeHandler=()=>{
        this.props.navigation.navigate('Log In')
    }
    render(){
        return(
            <ImageBackground source={require('../../image/digital-background.jpg')} style={styles.container}>
            <Image source={require('../../image/wiggle.png')}/>
            <View style={styles.content}>
               <Text style={styles.contentText}>Thank you for participating in the COVID-19 Screening</Text>
            </View>
            <View style={styles.content}>
               <TouchableOpacity style={styles.button} 
               onPress={this.returnHomeHandler}
               >
                   <Text style={styles.textButtonColor}>Continue</Text>
               </TouchableOpacity>
           </View>
        </ImageBackground>
        )
    }
}


export default VisitorsThanks

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:150
    },
    contentText:{
        fontSize:23
    },
    button:{
        backgroundColor:"red",
        padding:10,
        height:70,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textButtonColor:{
        color:"white"
    }
})