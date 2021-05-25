import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import {db} from '../../util/firebase'
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import * as FaceDetector from 'expo-face-detector'
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
                  isCameraReady:false,
                  faces:[],
                  errors:{
                    name:"",
                    lastName:"",
                    Department:"",
                    reasonForVisit:"",
                    IDNumber:"",
                    number:"",
                    tested:"",
                    temperature:"",
                  }
         }
    }


     faceDetected=({faces})=>{
       this.setState({
         faces:faces
       })
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
    }

 }

  errors=(name,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature)=>{
     this.setState({
       errors:{
        name:name,
        lastName:lastName,
        Department:Department,
        reasonForVisit:reasonForVisit,
        IDNumber:IDNumber,
        number:number,
        tested:tested,
        temperature:temperature,
       }
     })
  }

    submitForm= async ()=>{
        const {faces,name,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature}=this.state;
        
        
        const faceId=faces.map(item=>{
          return item.faceID
       })
 
       const rollAngle=faces.map(item=>{
         return item.rollAngle;
       })

       const required="This field is required";
       const numberLength="Please enter a 10 digit number";
       const IDNumberLength="The ID number provided needs to be 13 digits"

      //  if(name === ''){
      //   setTimeout(() => this.errors(required,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature), 1000);
      //  } 
      //  else if(lastName ===''){
      //   setTimeout(() => this.errors(name,required,Department,reasonForVisit,IDNumber,number,tested,temperature), 1000);

      //  }else if(Department === ''){
      //   setTimeout(() => this.errors(name,lastName,required,reasonForVisit,IDNumber,number,tested,temperature), 1000);

      //  }else if(reasonForVisit === ''){
      //    setTimeout(() => this.errors(name,lastName,Department,required,IDNumber,number,tested,temperature), 1000);

      //  }else if(IDNumber === '' || IDNumber){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit,required,number,tested,temperature), 1000);

      //  }else if(IDNumber<13){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit,IDNumberLength,number,tested,temperature), 1000);

      //  }
      //  else if(number === ''){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit,IDNumber,required,tested,temperature), 1000);

      //  }else if(number < 10){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit, IDNumber,numberLength,tested,temperature), 1000);

      //  }else if(tested === ''){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit,IDNumber,number,required,temperature), 1000);

      //  }else if(temperature === ''){
      //   setTimeout(() => this.errors(name,lastName,Department,reasonForVisit,IDNumber,number,tested,required), 1000);

      //  } else{
        await db.collection("Visitors")
        .add({
        faceId:faceId,
        rollAngle:rollAngle,
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
             this.props.navigation.navigate("Visitors Thanks");

      //  }
    
    }

    

    render(){
        const {name,hasPermission ,lastName,Department,reasonForVisit,IDNumber,number,tested,temperature}=this.state;
        if (hasPermission === null) {
          return <View />;
        }
        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return(
          <ImageBackground source={require('../../image/background.jpg')} style={styles.imageContainer}>
           <ScrollView style={styles.container}>
               <View style={styles.questionContainer}>
                 <Text style={styles.heading}>Please answer the following questions to assess your probable COVID-19 risk</Text>
                 <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Scan Your Face</Text>

                       <Camera 
                       ratio={"16:9"}
                       onCameraReady={this.onCameraReady}
                       onFacesDetected={this.faceDetected}
                       FaceDetectorSettings = {{
                        mode: FaceDetector.Constants.Mode.fast,
                        detectLandmarks: FaceDetector.Constants.Landmarks.all,
                        runClassifications: FaceDetector.Constants.Classifications.none,
                        minDetectionInterval: 5000,
                        tracking: false
                      }}
                       ref={ref=>{
                         this.camera=ref;
                       }}
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
                        <Text>{this.state.errors.name}</Text>
                    </View>
                    <View
                      style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your last name.</Text>

                        <TextInput
                            onChangeText={(e)=> this.setState({lastName:e.trim()})}
                            placeholder="Last Name"
                            style={styles.inputstyle}
                            value={lastName}
                        />
                         <Text>{this.state.errors.lastName}</Text>
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
                          <Text>{this.state.errors.Department}</Text>
                    </View>
                    <View
                      style={styles.horizontalLine}
                    />
                      <View style={styles.inputContainer}>
                       <Text style={styles.question} >Person/reason for your visit.</Text>

                        <TextInput
                         onChangeText={(e)=> this.setState({reasonForVisit:e.trim()})}
                         placeholder="Reason for Visit"
                         style={styles.inputstyle}
                         value={reasonForVisit}
                        />
                          <Text>{this.state.errors.reasonForVisit}</Text>
                    </View>
                    <View
                      style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your ID number.</Text>

                        <TextInput
                            onChangeText={(e)=> this.setState({IDNumber:e.trim()})}
                            placeholder="ID"
                            style={styles.inputstyle}
                            value={IDNumber}
                        />
                       <Text>{this.state.errors.IDNumber}</Text>
                    </View>
                    <View
                      style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >Please provide your phone number.</Text>

                        <TextInput
                        onChangeText={(e)=> this.setState({number:e.trim()})}
                         placeholder="Number"
                        style={styles.inputstyle}
                         value={number}
                        />
                        <Text>{this.state.errors.number}</Text>
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                     <View style={styles.inputContainer}>
                       <Text style={styles.question} >Have you been tested for COVID-19 in the past 10 days? If so, what was the outcome of your test?</Text>

                        <TextInput
                        onChangeText={(e)=> this.setState({tested:e.trim()})}
                         placeholder="Yes Or No"
                        style={styles.inputstyle}
                        value={tested}
                     
                        />
                        <Text>{this.state.errors.tested}</Text>
                    </View>
                    <View
                    style={styles.horizontalLine}
                    />
                    <View style={styles.inputContainer}>
                       <Text style={styles.question} >What is your temperature?</Text>

                        <TextInput
                         onChangeText={(e)=> this.setState({temperature:e.trim()})}
                         placeholder="34.7"
                         style={styles.inputstyle}
                         value={temperature}
                        />
                        <Text>{this.state.errors.temperature}</Text>
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
    flex:1,
    resizeMode:'contain'
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
        borderColor:"#808080",
        width:500,
        padding:15,
        marginTop:15,
        borderRadius:30
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
    errors:{
        color:"red",
        marginTop:10
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

export default Question1Employee;