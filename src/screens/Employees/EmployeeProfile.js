import React,{Component} from 'react';
import {FlatList,TouchableOpacity,View,StyleSheet,Text,ActivityIndicator,TextInput,ScrollView} from 'react-native';
import {db} from '../../util/firebase';
class EmployeeProfile extends Component{
    constructor(){
        super()
        this.state={
           users:[],
           filteredData:[],
           isloading:true,
           search:''
        }
    }

    async componentDidMount(){
        const snapshot = await db.collection('Employee').get();
        const data=[];
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data())

          data.push({Data:doc.data(),id: doc.id })
          this.setState({
              users:[...data],
              isloading:false
          })
        })
    }

    search=(searchText)=>{
        this.setState({search:searchText})

        let filteredData=this.state.users.filter((item)=>{
            return item.Data.name.toLowerCase().includes(searchText);
        })
        this.setState({filteredData:filteredData})
    }

    render(){
        console.log(this.state.users)
        if(this.state.isloading){
            return(
                <View style={styles.flexContain}>
                     <ActivityIndicator  size="large" color="red"/>
                </View>
            )
        }
        return(
            <ScrollView>
              <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
                    <TextInput
                      onChangeText={this.search}
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Search User"
                      value={this.state.search}
                      style={{backgroundColor:'white',width:450,padding:20,borderRadius:35}}
                    />
                </View>
                    <FlatList
                     data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData :this.state.users}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=>(
                        <TouchableOpacity key={item.id} style={styles.flexContainer}
                        onPress={()=> this.props.navigation.navigate('Employee Detail',{
                            Data:[item]
                        })}
                        >
                        <View style={styles.align}>
                        <Text>{'  '}</Text>
                        <Text>{'  '}</Text>
                        <View style={styles.nameContainer}>
                            <Text>{item.Data.name}</Text>
                            <Text>{'  '}</Text>
                            <Text>{item.Data.lastName}</Text>
                        </View>
                        </View>
                        </TouchableOpacity>
                    )}
                    />
         </ScrollView>
        )
    }
}

export default EmployeeProfile

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