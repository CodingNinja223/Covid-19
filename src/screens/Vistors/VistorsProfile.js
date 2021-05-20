import React,{Component} from 'react';
import {FlatList,TouchableOpacity,View,StyleSheet,Text,ActivityIndicator} from 'react-native';
import {db} from '../../util/firebase';

class VisitorsProfile extends Component{
    constructor(){
        super()
        this.state={
           users:[],
           isloading:true
        }
    }

    async componentDidMount(){
        const snapshot = await db.collection('Visitors').get();
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this.setState({
              users:[{Data:doc.data(),id:doc.id}],
              isloading:false
          })
        });
    }

    render(){
        if(this.state.isloading){
            return(
                <View style={styles.flexContain}>
                     <ActivityIndicator  size="large" color="red"/>
                </View>
            )
        }
        return(
          <FlatList
          data={this.state.users}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
             <TouchableOpacity key={item.id}  style={styles.flexContainer}
              onPress={()=> this.props.navigation.navigate('Vistor Detail',{
                  Data:this.state.users
              })}
             
             >
             <View style={styles.align}>
             <Text>{item.Data.name}</Text>
              <Text>{'  '}</Text>
             <Text>{item.Data.lastName}</Text>
             </View>
            </TouchableOpacity>
          )}
         />
        )
    }
}

export default VisitorsProfile

const styles=StyleSheet.create({
    header:{
        backgroundColor:"#000000",
        height:100,
        justifyContent:'center',
        alignItems:'center'
    },
    textColor:{
      color:"white",
      fontSize:23
    },
    flexContainer:{
        flexDirection:'row',
        padding:40,
        borderColor:"#eee",
        borderWidth:2,
        borderRadius:20,
        margin:10,  
        backgroundColor:"white"        
    },
    align:{
        flexDirection:"row"
    },
    flexContain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})