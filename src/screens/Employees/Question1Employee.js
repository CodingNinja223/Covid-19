import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import {db,storage} from '../../util/firebase';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
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
            hasPermission:null,
            type:Camera.Constants.Type.back,
            image:null,
            isPreview:false,
            isCameraReady:false
        }
    }


     onCameraReady=()=>{
       this.setState({
         isCameraReady:true
       })
     }

      async componentDidMount(){
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({
            hasPermission:status === 'granted'
        })
      }

      takePicture = async () => {
        if (this.camera) {
          const options = {quality: 1,base64: true };
          const data = await this.camera.takePictureAsync(options);
          const source=data.base64;
  
          
          if(source){
             await this.camera.pausePreview();
             this.setState({
               isPreview:true
             })
          }
          console.log(source);
          const response=await fetch(source)
          const blob=await response.blob();
          var ref = storage.ref().child("my-image");
          return ref.put(blob);
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
      this.props.navigation.navigate('Employee Thanks')
        
    }




    render(){
        const {hasPermission,name,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature}=this.state;
        if (hasPermission === null) {
            return <View />;
          }
          if (hasPermission === false) {
            return <Text>No access to camera</Text>;
          }
        return(
          <ImageBackground source={require('../../image/digital-background.jpg')} style={styles.imageContainer}>
           <ScrollView style={styles.container}>
               <View style={styles.questionContainer}>
                 <Text style={styles.heading}>Please answer the following questions to assess your probable COVID-19 risk</Text>
                 <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Scan Your Face</Text>

                       <Camera 
                         ref={ref=>{
                           this.camera=ref
                         }}
                        onCameraReady={this.onCameraReady}
                       style={styles.camera} type={this.state.type}>
                            <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                this.setState({
                                  type:this.state.type === Camera.Constants.Type.back
                                  ? Camera.Constants.Type.front
                                  : Camera.Constants.Type.back
                                })
                                }}>
                                <Text style={styles.text}> Flip </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cameraContainer} onPress={this.takePicture}> 
                                      <Entypo name="camera" size={35} color="red" />
                            </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>
                    <View
                     style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your first name.</Text>

                        <TextInput
                         onChangeText={(e)=> this.setState({name:e.trim()})}
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
                        onChangeText={(e)=>this.setState({lastName:e.trim()})}
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
                        onChangeText={(e)=> this.setState({Department:e.trim()})}
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
                         onChangeText={(e)=>this.setState({reasonForVisit:e.trim()})}
                         placeholder="Reason for visit"
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
                        onChangeText={(e)=>this.setState({IDNumber:e.trim()})}
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
                         onChangeText={(e)=>this.setState({number:e.trim()})}
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
                        onChangeText={(e)=>this.setState({tested:e.trim()})}
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
                         onChangeText={(e)=>this.setState({temperature:e.trim()})}
                         placeholder="34.7"
                        style={styles.inputstyle}
                        value={temperature}
                        />
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View>
                        <TouchableOpacity style={styles.buttonContainers}
                        onPress={this.submitForm}
                        >
                             <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </ScrollView>
           </ImageBackground>
        )
    }
}


const styles=StyleSheet.create({
  imageContainer:{
    flex:1
},
    horizontalLine:{
        borderBottomColor: '#c2c2c2',
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
        fontSize:15,
        marginVertical:15
    },
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    inputstyle:{
        borderWidth:1,
        borderColor:"#c2c2c2",
        width:500,
        padding:15,
        marginTop:15,
        borderRadius:20
    },
    buttonContainers:{
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
    },
    camera: {
        flex: 1,
        width:400,
        height:400
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
      cameraContainer:{
        position:'absolute',
        left:160,
        justifyContent:'center',
        alignItems:'center'
      }
})

export default Question1Employee ;