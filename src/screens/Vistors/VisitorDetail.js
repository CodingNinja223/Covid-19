import React,{Component} from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

class VisitorDetail extends Component{
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        const {Data}=this.props.route.params;
        return(
          <View style={styles.container}>
              <View>
              <Entypo name="edit" size={24} color="black" />
              </View>
               {
                  Data.map((item)=>(
                      <View key={item.id}>
                          <Text>{item.Data.date}</Text>
                          <Text>{item.Data.temperature}</Text>
                          <Text>{item.Data.name}</Text>
                          <Text>{item.Data.lastName}</Text>
                          <Text>{item.Data.number}</Text>
                          <Text>{item.Data.reasonForVisit}</Text>
                          <Text>{item.Data.tested}</Text>
                          <Text>{item.Data.Department}</Text>
                          <Text>{item.Data.IDNumber}</Text>
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
    }
})