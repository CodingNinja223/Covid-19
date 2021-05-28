import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Homescreen'
import Question1Vistor from './src/screens/Vistors/Question1'
import Question1Employee from './src/screens/Employees/Question1Employee';
import Profile from './src/screens/Profile/profile';
import EmployeeDetail from './src/screens/Employees/EmployeeDetail';
import VisitorDetail from './src/screens/Vistors/VisitorDetail';
import ThankYouEmployee from './src/screens/Employees/ThankyouEmployee';
import VisitorsThanks from './src/screens/Vistors/VistorsThankyou';
import ScanFaceButton from './src/components/ScanFaceButton';
import Question from './src/screens/Questionaire';
const Stack = createStackNavigator();

const Vistors=()=>{
  return(
    <Stack.Navigator headerMode="false">
        <Stack.Screen name="Log In" component={HomeScreen}/>
        <Stack.Screen name="COVID-19 Monitor Q1 V" component={Question1Vistor}/>
        <Stack.Screen name="COVID-19 Monitor Q1 E" component={Question1Employee}/>
        <Stack.Screen name="Profiles" component={Profile}/>
        <Stack.Screen name="Employee Detail" component={EmployeeDetail}/>
        <Stack.Screen name="Vistor Detail" component={VisitorDetail}/>
        <Stack.Screen name="Employee Thanks" component={ThankYouEmployee}/>
        <Stack.Screen name="Visitors Thanks" component={VisitorsThanks}/>
        <Stack.Screen name="Scan Face" component={ScanFaceButton}/>
    </Stack.Navigator>
  )
}





export default function App() {
  return (
    <NavigationContainer>
       <Vistors/>
    </NavigationContainer>
  );
}

