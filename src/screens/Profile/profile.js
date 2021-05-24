import React,{Component} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EmployeeProfile from '../Employees/EmployeeProfile';
import VistorsProfile from '../Vistors/VistorsProfile';
const Tab = createMaterialTopTabNavigator();

class Profile extends Component{
    

    render(){
        return(
            <Tab.Navigator>
                  <Tab.Screen name="Staff" component={EmployeeProfile}/>
                  <Tab.Screen name="Vistors" component={VistorsProfile}/>
            </Tab.Navigator>
        )
    }
}


export default Profile;


