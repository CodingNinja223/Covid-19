import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';


const Questionaire =(props)=>{

    return(
       <View style={styles.container}>
           <Text>Choose whether you are a Employee or Visitor</Text>
           <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={styles.box1}
          onPress={()=>{
              props.navigation.navigate('COVID-19 Monitor Q1 V')
          }}
          >
                  <Text>Vistors</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.box2}
            
          onPress={()=>{
            props.navigation.navigate('COVID-19 Monitor Q1 E')
        }}
          >
                    <Text>Employees</Text>
          </TouchableOpacity>
          </View>
       </View>
    )
}



export default Questionaire;


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box1:{
     width:200,
     height:200,
     borderWidth:1,
     justifyContent:'center',
     alignItems:'center',
     margin:10,
     borderColor:'red',
     borderWidth:1,
     borderRadius:20
    },
    box2:{
        width:200,
        height:200,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        borderColor:'red',
        borderWidth:1,
        borderRadius:20
    }
})