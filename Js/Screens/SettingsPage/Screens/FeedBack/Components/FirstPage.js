import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React,{useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles, flex, padding, marginPosition, widthValue, heightValue, radius, fontSize, borderWidth, paddingPosition } from '../../../../../Utils/Styles';
import Review from './Review';


const FirstPage = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);
  const [showReview,setShowReview] = useState(false);
  
  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
  };

  const getButtonColor = () => {
    return selectedIcon ? styles.green.color : styles.bgDarkBlue.backgroundColor;
  };

  const handleNextPress = () => {
    setShowReview(true)
  };
  return (
    <View>
        {!showReview ?(
      <View style={[styles.centerHorizontal,marginPosition(20,0,20,0)]}>
          <View style={[{ width: widthValue(1.15), height: 30 }, styles.bggreenish, radius(0, 20, 0, 0, 20),]}></View>
          <View style={[{ width: widthValue(1.16), height: heightValue(3.5) }, styles.bgbarback, marginPosition(-15), radius(0, 15, 30, 30, 15), styles.spaceAroundVertical]}>
            <View style={[styles.centerHorizontal, { gap: 5 }]}>
              <Text style={[styles.fontwhite, fontSize(18)]}>How was your</Text>
              <Text style={[styles.green, fontSize(24)]}>Experience ?</Text>
            </View>
            <View style={[styles.row, styles.spaceAroundVertical]}>
              <TouchableOpacity onPress={() => handleIconPress('frown')}>
                <FontAwesome5 name={'frown'} style={[styles.green, { color: selectedIcon === 'frown' ? '#0e804f' : styles.green.color }]} size={selectedIcon === 'frown' ? 80 :70} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('meh')}>
                <FontAwesome5 name={'meh'} style={[styles.green, { color: selectedIcon === 'meh' ? '#0e804f' : styles.green.color }]}size={selectedIcon === 'meh' ? 80 :70} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('smile')}>
                <FontAwesome5 name={'smile'} style={[styles.green, { color: selectedIcon === 'smile' ? '#0e804f' : styles.green.color }]}size={selectedIcon === 'smile' ? 80 :70} />
              </TouchableOpacity>
            </View>
            
          </View>
          <View style={[styles.flexEnd,marginPosition(15,20),{width:widthValue(1.15)}]}>
          <TouchableOpacity onPress={handleNextPress} style={[{ backgroundColor: getButtonColor() }, radius(30),padding(0,10, 30), marginPosition(20), styles.allCenter,styles.row,{gap:20}]}>
              <Text style={[styles.fontwhite,fontSize(18)]}>Next</Text>
              <FontAwesome5 name={'chevron-right'} style={[styles.fontwhite,fontSize(18)]} />
            </TouchableOpacity>
            </View>
        </View> ): 
        ( <View style={[marginPosition(20)]}>
         <Review  selectedIcon={selectedIcon}/>
         </View>) }
    </View>
  )
}

export default FirstPage