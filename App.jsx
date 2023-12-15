import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerApp from './Js/Screens/Drawer Nav/DrawerApp'
import StackNavigator from './Js/Screens/StackNav/Stack'
import Box2 from './Js/Components/Box1/ComparisionComp'
import GraphSheet2 from './Js/Components/Graph/GraphSheet2'
import MonthlyBox from './Js/Components/Box1/MonthlyBox'
import HistoryGraph from './Js/Components/Graph/HistoryGraph'
import HistoryMainGraph from './Js/Components/Graph/HIstoryMainGraph'
import HistoryBox from './Js/Screens/Consumption/HistoryBox'
import codePush from "react-native-code-push";
import CalendarPage from './Js/Screens/Consumption/History/CalendarPage/CalendarPage'
import DashBoard from './Js/Screens/DashBoard/DashBoard'
import Trail from './Trail.'
import LoginBox from './Js/Components/Login Box/LoginBox'
import Input from './Js/Components/Input/Input'
import ConsumerBox from './Js/Components/ConsumerBox/ConsumerBox'
import ManageAccount from './Js/Screens/SettingsPage/Screens/ManageAccount/ManageAccount'
import { Provider } from 'react-redux';

import Login from './Js/Screens/Login/Login'
import DeviceInfoChecker from './Js/Utils/DeviceInfoChecker'
import { PersistGate } from 'redux-persist/integration/react'
import UserManagement from './Js/Screens/SettingsPage/Screens/UserManagement/UserManagement'
import store, { persistor } from './Js/Redux/store'



const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </PersistGate>
    </Provider>
    
  )
}

export default codePush(App)