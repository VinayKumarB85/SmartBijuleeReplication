import {View, Text, SafeAreaView,TextInput} from 'react-native';
import React,{useState,useEffect} from 'react';
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
import { TouchableWithoutFeedback } from 'react-native';
import ConsumerBox from '../../../../Components/ConsumerBox/ConsumerBox';
import AddAccount from '../../../../Components/AddAccount/AddAccount';

const ManageAccount = () => {

  const [showConsumer, setShowConsumer] = useState(false);
  const [consumerId, setConsumerId] = useState('');
  const [buttonColor, setButtonColor] = useState(styles.bggreyish);

  useEffect(() => {
    const checkId = () => {
      const trimmedConsumerId = consumerId.trim();
      if (trimmedConsumerId === '') {
        setButtonColor(styles.bggreyish);
        console.log('hi');
      } else {
        setButtonColor(styles.bggreen);
      }
    };

    checkId();
  }, [consumerId]);
  const goToNextPage = ()=>{
    setShowConsumer(true)
  }

  return (
    <SafeAreaView style={[styles.bglightblack, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 25, 0, 20)]}>
        <Header2
          title1={'Manage'}
          title2={' Multiple Accounts'}
          Desc={
            'Add here your different accounts linked with your same mobile number'
          }
        />
      </View>
      {!showConsumer && (
      <View style={[styles.bggreenish,{width:widthValue(9),height:widthValue(9)},radius(widthValue(4.5)),styles.allCenter,styles.positionAbsolute,{top:155,zIndex:99,right:0}]}>
         <TouchableWithoutFeedback onPress={goToNextPage} ><FontAwesome5 name='plus' style={[styles.fontwhite,fontSize(18)]}/></TouchableWithoutFeedback>
      </View> )}

      {showConsumer ? <ConsumerBox onChangeText={(value)=>setConsumerId(value)} buttonColor={buttonColor} /> : <AddAccount/> }
      


     
    </SafeAreaView>
  );
};

export default ManageAccount;


