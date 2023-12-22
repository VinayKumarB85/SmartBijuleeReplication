import {View, Text, SafeAreaView, Image, Alert,TouchableOpacity} from 'react-native';
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
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import AddAccount from '../../../../Components/AddAccount/AddAccount';
import DetailsScreen1 from './DetailsScreen/DetailsScreen1';

const UserManagement = () => {

  const [showConsumer,setShowConsumer] = useState(false)
  

  const goToNextPage = ()=>{
    setShowConsumer(true)
  }
  return (
    <SafeAreaView style={[styles.bglightblack, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 25, 0, 20)]}>
        <Header2
          title1={'User'}
          title2={' Management'}
          Desc={
            'You can share your account with your family members with limited access '
          }
        />
      </View>
      
      {showConsumer ? <DetailsScreen1 /> :<AddAccount /> }

{showConsumer ? '':
 <View style={[styles.bggreenish,{width:widthValue(8),height:widthValue(8)},radius(widthValue(4)),styles.allCenter,styles.positionAbsolute,{top:155,zIndex:99,right:0}]}>
 <TouchableOpacity onPress={goToNextPage}><FontAwesome5 name='plus' style={[styles.fontwhite,fontSize(20)]}/></TouchableOpacity></View> }
    </SafeAreaView>
  );

        }
export default UserManagement;


