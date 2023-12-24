import {View, Text} from 'react-native';
import React from 'react';
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition, padding } from '../../../Utils/Styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {SettingsCardData} from '../../../Constants/SettingCardInfo/SettingsCardInfo';
import SettingsHeader from '../SettingsHeader/SettingsHeader';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
// import SettingsCardData from '../../../Constants/SettingCardInfo/SettingsCardData'

 
const SettingsCard = ({navigation}) => {
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);

    const navigateToScreen = (screen)=>{
        navigation.navigate(screen)
    }
  return (
    <View>
        <SettingsHeader settingTitle1={'Personal'} settingTitle2={' Information'}/>
    {SettingsCardData.perosnalInfoData.map((card,index)=>(
      <View>
        <TouchableWithoutFeedback
        onPress={()=>navigateToScreen(card.screen)}
        key={index}
        style={[
          styles.row,
          styles.spaceBetweenVertical,
          {width: widthValue(1.1), height: heightValue(10)},
          darkmode?styles.bgbarback:styles.bgWhite,
          styles.centerHorizontal,
          paddingPosition(20, 20, 20,20),
          radius(15),
          marginPosition(0,0,20,0)
        ]}>
    <View style={[styles.row, {gap: 10}, styles.centerHorizontal]}>
      <View
        style={[
          {width: widthValue(9), height: widthValue(9),backgroundColor:'#28b085'},
          
          radius(widthValue(4.5)),
          styles.allCenter,
        ]}>
        {/* <AntDesign name={card.icon} size={20} color="white" /> */}
        <FontAwesome5 name={card.icon} size={18} color="white" />
      </View>
      <View>
        <View>
      <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(17)]}>{card.name1}<Text style={[styles.green,fontSize(17)]}> {card.name2}</Text></Text>
      <Text style={[styles.gray,marginPosition(4),fontSize(16)]}>{card.details}</Text>
  </View>
      </View>
    </View>
    <FontAwesome5 name={'chevron-right'} size={16} color={'grey'} />
    </TouchableWithoutFeedback>
    </View>
    ))
}
<SettingsHeader settingTitle1={'App'} settingTitle2={' Settings'}/>
{SettingsCardData.appSettingsData.map((card,index)=>(
        <TouchableWithoutFeedback
        onPress={()=>navigateToScreen(card.screen)}
        key={index}
        style={[
          styles.row,
          styles.spaceBetweenVertical,
          {width: widthValue(1.1), height: heightValue(10)},
          darkmode?styles.bgbarback:styles.bgWhite,
          styles.centerHorizontal,
          paddingPosition(20, 20, 20,20),
          radius(15),
          marginPosition(0,0,20,0)
        ]}>
    <View style={[styles.row, {gap: 10}, styles.centerHorizontal]}>
      <View
        style={[
          {width: widthValue(10), height: widthValue(10),backgroundColor:'#28b085'},
          
          radius(widthValue(5)),
          styles.allCenter,
        ]}>
        <FontAwesome5 name={card.icon} size={18} color="white" />
      </View>
      <View>
        <View>
      <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(17)]}>{card.name1}<Text style={[styles.green,fontSize(17)]}> {card.name2}</Text></Text>
      <Text style={[styles.gray,marginPosition(4),fontSize(16)]}>{card.details}</Text>
  </View>
      </View>
    </View>
    <FontAwesome5 name={'chevron-right'} size={14} color={'grey'} />
    </TouchableWithoutFeedback>
    ))
}

<SettingsHeader settingTitle1={"General"} settingTitle2={' Settings'}/>
{SettingsCardData.generalSettingsData.map((card,index)=>(
        <TouchableWithoutFeedback
        onPress={()=>navigateToScreen(card.screen)}
        key={index}
        style={[
          styles.row,
          styles.spaceBetweenVertical,
          {width: widthValue(1.1), height: heightValue(10)},
          darkmode?styles.bgbarback:styles.bgWhite,
          styles.centerHorizontal,
          padding(0, 15, 20),
          radius(15),
          marginPosition(0,0,20,0)
        ]}>
    <View style={[styles.row, {gap: 10}, styles.centerHorizontal]}>
      <View
        style={[
          {width: widthValue(10), height: widthValue(10),backgroundColor:'#28b085'},
          
          radius(widthValue(5)),
          styles.allCenter,
        ]}>
        <FontAwesome5 name={card.icon} size={18} color="white" />
      </View>
      <View>
        <View>
      <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(17)]}>{card.name1}<Text style={[styles.green,fontSize(17)]}> {card.name2}</Text></Text>
      <Text style={[styles.gray,marginPosition(4),fontSize(16)]}>{card.details}</Text>
  </View>
      </View>
    </View>
    <FontAwesome5 name={'chevron-right'} size={14} color={'grey'} />
    </TouchableWithoutFeedback>
    ))
}
    </View>
  );
};

export default SettingsCard;
