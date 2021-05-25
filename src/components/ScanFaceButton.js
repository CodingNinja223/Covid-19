import React, {Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {db} from '../util/firebase'
import * as FaceDetector from 'expo-face-detector'
import { Entypo } from '@expo/vector-icons';

class ScanFaceButton extends Component {
constructor(){
  super()
  this.state={
    hasPermission:null,
    type:Camera.Constants.Type.back,
    image:null,
    isPreview:false,
    isCameraReady:false,
    faces:[],
    Vistors:[],
    Employees:[]
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

  const snapshot = await db.collection('Visitors').get();
       const data=[];
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        
          data.push({ Data:doc.data(),id: doc.id })
          this.setState({
              Vistors: [...data],
              isloading:false
          })
      });

      const snapshots = await db.collection('Employee').get();
      const datas=[];
        snapshots.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          datas.push({ Data:doc.data(),id: doc.id })
          this.setState({
              Employees: [...datas],
              isloading:false
          })
     });
}

 recognize=async(x)=>{
  const rawResponse = await fetch(`https://api.kairos.com/recognize`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
        "image": x,
        "gallery_name": "MyGallery"
    })
  });
  const content = await rawResponse.json();
  return content;
 }

takePicture = async () => {
  const {faces,Vistors,Employees}=this.state;
  if (this.camera) {
    const options = {quality: 1,base64: true };
    const data = await this.camera.takePictureAsync(options);
    const result=data.base64;
     const visitors=Vistors.map(item=>{
        return item.Data.faceId[0]
     })

     const employee=Employees.map(item=>{
       return item.Data.faceId[0]
     })
     
      const faceId=faces.map(item=>{
          return item.rollAngle
      })

    const visitorsData=Vistors.map(item=>{
      return item;
   })

   const employeeData=Employees.map(item=>{
    return item;
   })
   
  //  if(faceId !== visitors || faceId !== visitors){
  //    this.props.navigation.navigate('Questions')
  //  }
    if(faceId ===visitors ){
    this.props.navigation.navigate('Vistor Detail',{
         Data:[...visitorsData]
    })
   }else if(faceId === employee){
    this.props.navigation.navigate('Employee Detail',{
         Data:[...employeeData]
    })
   }
    

  }
}


render(){
  const {hasPermission,Vistors,Employees}=this.state;
  console.log(this.state.faces);
  if (hasPermission === null) {
    return <View />;


  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Camera 
    ratio={"16:9"}
    onFacesDetected={this.faceDetected}
    FaceDetectorSettings = {{
     mode: FaceDetector.Constants.Mode.accurate,
     detectLandmarks: FaceDetector.Constants.Landmarks.all,
     runClassifications: FaceDetector.Constants.Classifications.none,
     minDetectionInterval: 5000,
     tracking:true
   }}         
    ref={ref=>{
      this.camera=ref
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
                 <Entypo name="camera" size={50} color="red" />
       </TouchableOpacity>
       </View>
   </Camera>
  );
}
}

export default ScanFaceButton;
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
    borderColor:"#eee",
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
    width:'100%',
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
    left:350,
    top:1100,
    justifyContent:'center',
    alignItems:'center'
  }
})