import React, {Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector'
import { Entypo } from '@expo/vector-icons';

class ScanFaceButton extends Component {
constructor(){
  super()
  this.state={
    hasPermission:null,
    type:Camera.Constants.Type.back
  }
}

async componentDidMount(){
  const { status } = await Camera.requestPermissionsAsync();
  this.setState({
      hasPermission:status === 'granted'
  })
}

takePicture = async () => {
  if (this.camera) {
    const options = {quality: 1, base64: true};
    const data = await this.camera.takePictureAsync(options);
    console.log(data);
}
  console.log("Sam World")
}


render(){
  const {hasPermission}=this.state;
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    //<View style={{ flex: 1 }}>
    <Camera 
                       
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
    //</View>
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