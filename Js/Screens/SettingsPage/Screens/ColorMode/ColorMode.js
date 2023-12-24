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
import {useDispatch, useSelector} from 'react-redux'
import { darkModeReducer, setDarkMode } from '../../../../Redux/SystemReducer/darkModeReduder';

const ColorMode = () => {


  const [showConsumer,setShowConsumer] = useState(false)
  const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);

    const dispatch = useDispatch();

  const toggleColorMode = ()=>{
      const colorMode = dispatch(setDarkMode(!darkmode))
  } 

  return (
    <SafeAreaView style={[darkmode?styles.bglightblack:styles.bgLightWhite, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 25, 0, 20)]}>
        <Header2
          title1={'Change'}
          title2={' Color Mode'}
          Desc={
            'Change Color Mode between light and dark as per your intrest'
          }
        />
        <View style={[{width:widthValue(1.1),height:heightValue(1.5),},styles.spaceBetweenVertical,styles.centerHorizontal]}>
        <Text style={[styles.gr,styles.textCenter,marginPosition(20),fontSize(22)]}>{darkmode?'Dark Mode':'Light Mode'}</Text>
        <TouchableWithoutFeedback onPress={toggleColorMode}>
        <View style={[{height:180,width:180,backgroundColor:darkmode?"#e1f5f5":"#636161",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },shadowRadius:4,elevation: 8,},radius(100),styles.allCenter]}>
                  <View style={[{height:140,width:140,backgroundColor:darkmode?"#e1f5f5":"#a69d9d",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },elevation: 8},radius(80),styles.allCenter]}>
                      <View style={[{height:100,width:100,backgroundColor:darkmode?"#e1f5f5":"#c9b9b9",shadowColor:'black',shadowOpacity:0.4,shadowOffset: { width: 4, height: 4 },elevation: 8},radius(60),styles.allCenter]}>
                        <FontAwesome5 name='power-off' style={[fontSize(30),styles.white]}/>
                      </View>
                  </View>
               </View>
               </TouchableWithoutFeedback>

        <View style={[styles.allCenter]}>
          <Text style={[styles.gr,fontSize(20)]}>Click the button to enable</Text>
          <Text style={[styles.green,fontSize(22)]}>{darkmode?'Light Mode':'Dark Mode'}</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ColorMode;


