
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../OnBoarding/Home'
import Login from '../Login/Login'
import OnePass from '../OtpScreen/OnePass'
import Forgot from '../Forgot/Forgot'
import Create from '../ConsumerId/Create'
import NewAccount from '../NewAccount/NewAccount'
import Splash from '../Logo/Splash';
import DrawerApp from '../Drawer Nav/DrawerApp'
import PersonalInfo from '../SettingsPage/Screens/PersonalInfo/PersonalInfo'
import ManageAccount from '../SettingsPage/Screens/ManageAccount/ManageAccount'
import ChangePassword from '../SettingsPage/Screens/ChangePassword/ChangePassword'
import ColorMode from '../SettingsPage/Screens/ColorMode/ColorMode'
import ChangeLanguage from '../SettingsPage/Screens/ChangeLanguage/ChangeLanguage'
import UserManagement from '../SettingsPage/Screens/UserManagement/UserManagement'
import RateOurApp from '../SettingsPage/Screens/RateOurApp/RateOurApp'
import FeedBack from '../SettingsPage/Screens/FeedBack/FeedBack'
import Terms from '../SettingsPage/Screens/Terms/Terms'
import ResetOtp from '../Forgot/ResetOtp/ResetOtp'
import ResetPass from '../Forgot/ResetPass/ResetPass'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'Splash'}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name={'Splash'}
                component={Splash} />
            <Stack.Screen
                name={'Home'}
                component={Home} />
            <Stack.Screen
                name={'Login'}
                component={Login} />
            <Stack.Screen
                name={'OnePass'}
                component={OnePass} />
            <Stack.Screen
                name={'Forgot'}
                component={Forgot} />
            <Stack.Screen
                name={'Create'}
                component={Create} />
            <Stack.Screen
                name={'NewAccount'}
                component={NewAccount} />
            <Stack.Screen
                name={'DrawerApp'}
                component={DrawerApp} />
            <Stack.Screen
                name={'PersonalInfo'}
                component={PersonalInfo}  
                />
            <Stack.Screen
                name={'ManageAccount'}
                component={ManageAccount} />
            <Stack.Screen
                name={'ChangePassword'}
                component={ChangePassword} />
            <Stack.Screen
                name={'ColorMode'}
                component={ColorMode} />
            <Stack.Screen
                name={'ChangeLanguage'}
                component={ChangeLanguage} />
            <Stack.Screen
                name={'UserManagement'}
                component={UserManagement} />
            <Stack.Screen
                name={'RateOurApp'}
                component={RateOurApp} />
            <Stack.Screen
                name={'FeedBack'}
                component={FeedBack} />
            <Stack.Screen
                name={'Terms'}
                component={Terms} />
            <Stack.Screen
                name={'ResetOtp'}
                component={ResetOtp} />
            <Stack.Screen
                name={'ResetPass'}
                component={ResetPass} />
            
            
            
        </Stack.Navigator>
    )
}
export default StackNavigator