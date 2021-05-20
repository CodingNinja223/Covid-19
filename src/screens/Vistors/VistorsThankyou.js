import React,{Component} from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

class VisitorsThanks extends Component{
    constructor(){
        super()
    }


    returnHome=()=>{
        this.props.navigation.navigate('Log In')
    }
    render(){
        return(
            <View style={styles.container}>
            <Image source={require('../../image/wiggle.png')}/>
            <View style={styles.content}>
               <Text style={styles.contentText}>Thank you for participating in the COVID-19 Screening</Text>
            </View>
            <View style={styles.content}>
               <TouchableOpacity style={styles.button}
               
               onPress={this.returnHome}
               >
                   <Text style={styles.textButtonColor}>Continue</Text>
               </TouchableOpacity>
           </View>
        </View>
        )
    }
}


export default VisitorsThanks

const styles=StyleSheet.create({
    container:{
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