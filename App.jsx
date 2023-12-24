import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Js/Screens/StackNav/Stack'
import codePush from "react-native-code-push";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './Js/Redux/store'
import ResetPass from './Js/Screens/Forgot/ResetPass/ResetPass';
import CalendarPage from './Js/Screens/Consumption/History/CalendarPage/CalendarPage';


const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    {/* <ResetPass /> */}
    {/* <CalendarPage /> */}
    </PersistGate>
    </Provider>
    
  )
}

export default codePush(App)