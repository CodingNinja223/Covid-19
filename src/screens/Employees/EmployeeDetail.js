import React,{Component} from 'react';
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { Entypo } from '@expo/vector-icons'; 
const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };
class EmployeeDetail extends Component{
    constructor(){
        super();
        this.state={
            chartConfig:{
                backgroundGradientFrom: "#1E2923",
                backgroundGradientFromOpacity: 0,
                backgroundGradientTo: "#08130D",
                backgroundGradientToOpacity: 0.5,
                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                useShadowColorFromDataset: false // optional
              }
        }
    }


    render(){
        const {Data}=this.props.route.params;
        console.log(Data)
        return(
          <View style={styles.container}>
              <View>
              <Entypo name="edit" size={24} color="black" />
              </View>
            {/*<LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={this.state.chartConfig}
                    />*/}
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


export default EmployeeDetail;

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
})