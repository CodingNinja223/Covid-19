import React,{Component} from 'react';
import {FlatList,TouchableOpacity,View,StyleSheet,Text,ActivityIndicator} from 'react-native';
import {db} from '../../util/firebase';
import { Avatar } from 'react-native-elements';
class VistorProfile extends Component{
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
          const data=[]
          data.push({ ...doc.data(),id: doc.id })
          this.setState({
              users: [...data],
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
             <TouchableOpacity key={item.id} style={styles.flexContainer}
              onPress={()=> this.props.navigation.navigate('Vistor Detail',{
                  Data:this.state.users
              })}
             >
             <View style={styles.align}>
             <Avatar
                rounded
                size="large"
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                />
             <Text>{'  '}</Text>
             <Text>{'  '}</Text>
             <View style={styles.nameContainer}>
                <Text>{item.name}</Text>
                <Text>{'  '}</Text>
                <Text>{item.lastName}</Text>
             </View>
             </View>
            </TouchableOpacity>
          )}
         />
        )
    }
}

export default VistorProfile

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
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})