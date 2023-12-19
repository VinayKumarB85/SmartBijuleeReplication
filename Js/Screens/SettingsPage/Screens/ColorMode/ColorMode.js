import {View, Text, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {
  styles,
  flex,
  padding,
  marginPosition,
  widthValue,
  heightValue,
  radius,
  borderWidth,
  paddingPosition,
  fontSize,
} from '../../../../Utils/Styles';
import BackButton from '../../Backbutton/BackButton';
import Header2 from '../../../../Components/Header/Header2';
import SettingsName from '../../SettingsName/SettingsName';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ColorMode = () => {

  const [showConsumer,setShowConsumer] = useState(false)



  const goToNextPage = ()=>{
    
  }

  return (
    <SafeAreaView style={[styles.bglightblack, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 25, 0, 20)]}>
        <Header2
          title1={'Change'}
          title2={' Color Mode'}
          Desc={
            'Change Color Mode between light and dark as per your intrest'
          }
        />
        <Text style={[styles.gr,styles.textCenter,marginPosition(20),fontSize(20)]}>Dark Mode</Text>
        <View style={[styles.allCenter,{height:heightValue(2),width:widthValue(1.1)}]}>
        <TouchableOpacity>
          <View style={[{width:widthValue(3),height:widthValue(3),backgroundColor:'#ffc8dd'},radius(widthValue(1)),styles.allCenter]}>
            <FontAwesome5 name={'power-off'} style={[fontSize(30),styles.gr]} />
          </View>
        </TouchableOpacity>
        </View>

        <View style={[styles.allCenter]}>
          <Text style={[styles.gr,fontSize(20)]}>Click the button to enable</Text>
          <Text style={[styles.green,fontSize(20)]}>Light Mode</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ColorMode;


