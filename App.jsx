import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Js/Screens/StackNav/Stack'
import codePush from "react-native-code-push";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './Js/Redux/store'
import ResetPass from './Js/Screens/Forgot/ResetPass/ResetPass';


const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    {/* <ResetPass /> */}
    </PersistGate>
    </Provider>
    
  )
}

export default codePush(App)