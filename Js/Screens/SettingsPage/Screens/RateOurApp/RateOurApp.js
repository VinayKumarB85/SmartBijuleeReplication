import { View, Text,Linking } from 'react-native'
import React,{useEffect} from 'react'
import {styles,flex} from '../../../../Utils/Styles'

const RateOurApp = () => {
  useEffect(() => {
    const openStore = () => {
      // For Android
      Linking.openURL('market://details?id=com.SMARTBIJULEE.android')
        .catch((err) => {
          console.error('Error opening Play Store:', err);
          // Handle the error as needed
        });

      // For iOS
      Linking.openURL('https://apps.apple.com/app/your-app-id')
        .catch((err) => {
          console.error('Error opening App Store:', err);
          // Handle the error as needed
        });
    };
    openStore();
  }, []);
  return (
    <View>
       <View style={[flex(1)]}></View>
    </View>
  )
}

export default RateOurApp