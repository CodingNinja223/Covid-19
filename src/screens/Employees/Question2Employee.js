import React,{Component} from 'react';
import {View,Text,StyleSheet,Picker,ScrollView,TouchableOpacity} from 'react-native';
import {db} from '../../util/firebase';
class Question2Employee extends Component{
    constructor(){
        super();
        this.state={
            question1:'',
            question2:'',
            question3:'',
            question4:'',
            question5:'',
            question6:'',
            question7:'',
            question8:'',
            question9:'',
            question10:'',
            question12:'',
            question11:'',
            question13:'',
        }
    }


    submitForm= async()=>{
   const {question1,question2,question3,question4,question5,question6,question7,question8,question9,question10,question12,question11,question13}=this.state;
        
//    await db.collection("Employee")
//         .add({
//             question1:question1,
//             question2:question2,
//             question3:question3,
//             question4:question4,
//             question5:question5,
//             question6:question6,
//             question7:question7,
//             question8:question8,
//             question9:question9,
//             question10:question10,
//             question11:question11,
//             question12:question12,
//             question13:question13,
//       })
        this.props.navigation.navigate('Employee Thanks')
    }

    render(){
        console.log(this.state);
        return(
           <ScrollView style={styles.container}>
                <View style={{margin:25}}>
                 <Text style={styles.heading}>Please answer the following questions to assess your probable COVID-19 risk</Text>
                 <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have a fever or high temperature (37.8°C or above)?</Text>
                        <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question1}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question1:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have a persistent cough?</Text>
                        <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question2}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question2:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have a sore throat?</Text>
                         <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question3}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question3:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                      <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have recent loss of taste and/or smell?</Text>
                          <View style={styles.flexcontainer}>
                                <Picker
                                    selectedValue={this.state.question4}
                                    style={styles.pickerstyle}
                                    onValueChange={(itemValue,itemIndex)=> this.setState({question4:itemValue})}
                                >
                                    <Picker.Item label="Select" value="Select a Value" />
                                    <Picker.Item label="Yes" value="Yes" />
                                    <Picker.Item label="No" value="No" />
                                </Picker>
                            </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have redness of the eyes?</Text>
                        <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question5}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question5:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you have a headache?</Text>
                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question6}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question6:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                     <View style={styles.inputContainer}>
                       <Text style={styles.question} >Are you having diarrhea and/or nausea or vomiting?</Text>

                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question7}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question7:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Are you experiencing muscle pain/body aches?</Text>

                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question8}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question8:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                     <View style={styles.inputContainer}>
                       <Text style={styles.question} >Are you having difficulty breathing/shortness of breath?</Text>

                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question9}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question9:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Are you experiencing fatigue (feeling of tiredness)?</Text>
                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question10}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question10:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Have you travelled outside of the country/province recently (in the past 30 days)?</Text>
                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question11}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question11:itemValue})}
                            >
                                <Picker.Item label="Select" value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Do you currently reside in an area known to be high risk/hot-spot at this time?</Text>

                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question12}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question12:itemValue})}
                            >
                                <Picker.Item label="Select " value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                     style={styles.horizontalStyle}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Have you had close contact or are you taking care of a COVID-19 positive patient or family/household member?</Text>

                       <View style={styles.flexcontainer}>
                            <Picker
                                selectedValue={this.state.question13}
                                style={styles.pickerstyle}
                                onValueChange={(itemValue,itemIndex)=> this.setState({question13:itemValue})}
                            >
                                <Picker.Item label="Select " value="Select a Value" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />
                            </Picker>
                        </View>
                    </View>
                    <View
                    style={styles.horizontalStyle}
                    />
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity style={styles.buttonContainer}
                        
                        onPress={this.submitForm}
                        >
                             <Text style={styles.buttonText2}>Continue</Text>
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
        backgroundColor:'white'
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
    buttonText2:{
        color:'white',
        textAlign:'center'
    },
    flexcontainer:{
        flexDirection:'row'
    },
    buttonText:{
        margin:20,
        padding:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:"#eee",
        width:200
    },
    aligningText:{
       textAlign:'center'
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"red",
        borderRadius:10,
        padding:15,
        width:200
    },
    pickerstyle:{
        height: 50, width: 150, marginTop:15
    },
    horizontalStyle:{
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
         marginVertical:15
    }
})

export default Question2Employee;