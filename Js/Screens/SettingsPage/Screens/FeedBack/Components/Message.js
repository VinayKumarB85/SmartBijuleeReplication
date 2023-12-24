import { View, Text,TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import { styles, flex, padding, marginPosition, widthValue, heightValue, radius, fontSize, borderWidth, paddingPosition } from '../../../../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

const Review = ({selectedIcon}) => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);

    const getEmojiIcon = (emojiName) => {
        let emojiIcon, emojiText;
        switch (emojiName) {
          case 'frown':
            emojiIcon = <FontAwesome5 name={'frown'} style={[styles.green, fontSize(40)]} />;
            emojiText = 'Sad';
            break;
          case 'meh':
            emojiIcon = <FontAwesome5 name={'meh'} style={[styles.green, fontSize(40)]} />;
            emojiText = 'Neutral';
            break;
          case 'smile':
            emojiIcon = <FontAwesome5 name={'smile'} style={[styles.green, fontSize(40)]} />;
            emojiText = 'Happy';
            break;
          default:
            emojiIcon = null;
            emojiText = '';
        }
    
        return { emojiIcon, emojiText };
      };
    
      const { emojiIcon, emojiText } = getEmojiIcon(selectedIcon);
    

    const [selectedIcons, setSelectedIcons] = useState({
        section1: null,
        section2: null,
        section3: null,
      });
    
      const handleIconPress = (section, iconName) => {
        setSelectedIcons((prevSelectedIcons) => ({
          ...prevSelectedIcons,
          [section]: iconName,
        }));
      };
    
      const getButtonColor = () => {
        // Check if at least one icon is selected in each section
        if (selectedIcons.section1 && selectedIcons.section2 && selectedIcons.section3) {
          return styles.green.color; // Change this to the color you want when all sections are selected
        } else {
          return styles.bgDarkBlue.backgroundColor;
        }
      };
    
      const handleNextPress = () => {
        // Handle next button press here
        console.log('Next button pressed');
      };
  return (
    <View>
      <View style={[styles.centerHorizontal,]}>
          
          <View style={[{ width: widthValue(1.16), height: heightValue(2.8),zIndex:99 },darkmode? styles.bgbarback:styles.bgWhite, marginPosition(0,0,0,0), radius(0, 15, 30, 30, 15), styles.spaceAroundVertical]}>
            <View style={[styles.centerHorizontal,styles.spaceEvenly, { gap: 5 },styles.row,marginPosition(20,0,20,0)]}>
              {emojiIcon}
              <View style={[styles.row,]}>
              <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(18)]}>What made you </Text>
              <Text style={[styles.green, fontSize(20)]}>{emojiText}</Text>
              </View>
            </View>
          
            <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,marginPosition(10,20,10,20),borderWidth(0,1),styles.borderGreen,paddingPosition(15,0)]}>
            <View style={[styles.centerHorizontal,marginPosition(0,30,0,30),{marginTop:10},flex(1)]}>
              <TextInput multiline={true}  placeholder={'write your feedback in less than 200 words' } style={[,{width:widthValue(1.4),height:heightValue(5),paddingVertical:5,textAlignVertical:'top'},styles.bgWhite,radius(15)]}/>
            </View>
            </View>
          </View>
          <View style={[{ width: widthValue(1.17), height: 30,zIndex:0 }, styles.bggreenish,marginPosition(-20,0), radius(0, 0, 20, 20, 0)]}></View>
          
          <View style={[styles.flexEnd,marginPosition(15,20),{width:widthValue(1.15)}]}>
          <TouchableOpacity onPress={handleNextPress} style={[{ backgroundColor: getButtonColor() }, radius(30),padding(0,10, 30),  styles.allCenter,styles.row,{gap:20}]}>
              <Text style={[styles.fontwhite,fontSize(18)]}>Send</Text>
              <FontAwesome5 name={'chevron-right'} style={[styles.fontwhite,fontSize(18)]} />
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Review



