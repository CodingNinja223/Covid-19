import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {db} from '../../util/firebase';
class Question1Employee extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastName:"",
            Department:"",
            reasonForVisit:"",
            IDNumber:"",
            number:"",
            tested:"",
            temperature:"",
            errors:{
              name:"",
              lastName:"",
              Department:"",
              reasonForVisit:"",
              IDNumber:"",
              number:"",
              tested:"",
              temperature:""
            }
        }
    }


    submitForm = async () =>{
        const {name,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature}=this.state;
 
        await db.collection("Employee")
        .add({
        date:new Date().toLocaleString(),
        name:name,
        lastName:lastName,
        Department:Department,
        reasonForVisit:reasonForVisit,
        IDNumber:IDNumber,
        number:number,
        tested:tested,
        temperature:temperature
      })
      this.setState({
                name:"",
                lastName:"",
                Department:"",
                reasonForVisit:"",
                IDNumber:"",
                number:"",
                tested:"",
                temperature:"",
      })
      this.props.navigation.navigate('COVID-19 Monitor Q2 E')
        
    }

    render(){
        const {name,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature}=this.state;

        return(
           <ScrollView style={styles.container}>
               <View style={styles.questionContainer}>
                 <Text style={styles.heading}>Please answer the following questions to assess your probable COVID-19 risk</Text>
                 <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Scan Your Face</Text>

                        <TouchableOpacity style={styles.buttonScan}>
                            <Text style={styles.centerText}>Scan Face</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                     style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your first name.</Text>

                        <TextInput
                         onChangeText={(e)=> this.setState({name:e})}
                         placeholder="First Name"
                         style={styles.inputstyle}
                         value={name}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your last name.</Text>

                        <TextInput
                        onChangeText={(e)=>this.setState({lastName:e})}
                         placeholder="Last Name"
                        style={styles.inputstyle}
                         value={lastName}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please specify the location/department of your visit.</Text>

                        <TextInput
                        onChangeText={(e)=> this.setState({Department:e})}
                         placeholder="Specify location"
                        style={styles.inputstyle}
                        value={Department}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                      <View style={styles.inputContainer}>
                       <Text style={styles.question} >Person/reason for your visit.</Text>

                        <TextInput
                         onChangeText={(e)=>this.setState({reasonForVisit:e})}
                         placeholder="Last Name"
                         style={styles.inputstyle}
                         value={reasonForVisit}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your ID number.</Text>

                        <TextInput
                        onChangeText={(e)=>this.setState({IDNumber:e})}
                         placeholder="ID"
                        style={styles.inputstyle}
                        value={IDNumber}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your phone number.</Text>

                        <TextInput
                         onChangeText={(e)=>this.setState({number:e})}
                         placeholder="Number"
                        style={styles.inputstyle}
                        value={number}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                     <View style={styles.inputContainer}>
                       <Text style={styles.question} >Have you been tested for COVID-19 in the past 10 days? If so, what was the outcome of your test?</Text>

                        <TextInput
                        onChangeText={(e)=>this.setState({tested:e})}
                         placeholder="Yes or No"
                        style={styles.inputstyle}
                        value={tested}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >What is your temperature?</Text>

                        <TextInput
                         onChangeText={(e)=>this.setState({temperature:e})}
                         placeholder="34.7"
                        style={styles.inputstyle}
                        value={temperature}
                        />
                    </View>
                    <View
                      style={styles.horizontalLine}
                    />
                    <View>
                        <TouchableOpacity style={styles.buttonContainer}
                        
                        onPress={this.submitForm}
                        >
                             <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    horizontalLine:{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginVertical:15
    },
    buttonScan:{
        backgroundColor:"red",
        borderRadius:20,
        padding:15,
        marginTop:10,
        width:200
      },
      centerText:{
        textAlign:'center',
        color:"white"
      },
    heading:{
        fontSize:23,
        fontWeight:"700",
        marginTop:40,
        textAlign:'center'
    },
    question:{
        fontSize:15
    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    inputstyle:{
        borderWidth:1,
        borderColor:"#eee",
        width:500,
        padding:15,
        marginTop:15,
        borderRadius:20
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red",
        borderRadius:10,
        padding:15
    },
    buttonText:{
        color:'white'
    },
    questionContainer:{
      margin:25
    }
})

export default Question1Employee ;