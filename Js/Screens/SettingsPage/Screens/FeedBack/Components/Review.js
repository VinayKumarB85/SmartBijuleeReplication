import { View, Text,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles, flex, padding, marginPosition, widthValue, heightValue, radius, fontSize, borderWidth, paddingPosition } from '../../../../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Message from './Message'
import FirstPage from './FirstPage';

const Review = ({selectedIcon}) => {
    const [showMessage,setShowMessage] = useState(false);
    const [showFeedback,setShowFeedback] = useState(false);

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
        setShowMessage(true)
      };

      const handleBackPress = () => {
        if (showFeedback) {
          setShowFeedback(false);
        } else {
          setShowMessage(false);
        }
      };
      
      


return (
    <View>
{!showMessage  && !showFeedback?(
      <View style={[styles.centerHorizontal,]}>
          
          <View style={[{ width: widthValue(1.16), height: heightValue(2.8),zIndex:99 }, styles.bgbarback, marginPosition(0,0,0,0), radius(0, 15, 30, 30, 15), styles.spaceAroundVertical]}>
            <View style={[styles.centerHorizontal,styles.spaceEvenly, { gap: 5 },styles.row,marginPosition(20,0,20,0)]}>
              {emojiIcon}
              <View style={[styles.row,]}>
              <Text style={[styles.fontwhite, fontSize(18)]}>What made you </Text>
              <Text style={[styles.green, fontSize(20)]}>{emojiText}</Text>
              </View>
            </View>
          
            <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,marginPosition(10,20,10,20),borderWidth(0,1),styles.borderGreen,paddingPosition(15,0)]}>
            <Text style={[styles.fontwhite]}>Clarity of Info</Text>
            <View style={[styles.row, styles.spaceBetweenVertical,{gap:12}]}>
              <TouchableOpacity onPress={() => handleIconPress('section1','frown')}>
                <FontAwesome5 name={'frown'} style={[styles.green, { color: selectedIcons.section1 === 'frown' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section1 === 'frown' ? 45 :40} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section1','meh')}>
                <FontAwesome5 name={'meh'} style={[styles.green, { color:selectedIcons.section1  === 'meh' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section1 === 'meh' ? 45 :40} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section1','smile')}>
                <FontAwesome5 name={'smile'} style={[styles.green, { color: selectedIcons.section1 === 'smile' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section1 === 'smile' ? 45 :40} />
              </TouchableOpacity>
            </View>
            </View>
            <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,marginPosition(10,20,10,20)]}>
            <Text style={[styles.fontwhite]}>Ease of Navigation</Text>
            <View style={[styles.row, styles.spaceBetweenVertical,{gap:12}]}>
              <TouchableOpacity onPress={() => handleIconPress('section2','frown')}>
                <FontAwesome5 name={'frown'} style={[styles.green, { color: selectedIcons.section2 === 'frown' ? '#0e804f' : styles.green.color }]}size={selectedIcons.section2 === 'frown' ? 45 :40} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section2','meh')}>
                <FontAwesome5 name={'meh'} style={[styles.green, { color: selectedIcons.section2 === 'meh' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section2 === 'meh' ? 45 :40} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section2','smile')}>
                <FontAwesome5 name={'smile'} style={[styles.green, { color: selectedIcons.section2 === 'smile' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section2 === 'smile' ? 45 :40}/>
              </TouchableOpacity>
            </View>
            </View>
            <View style={[styles.row,styles.spaceBetweenVertical,styles.centerHorizontal,marginPosition(10,20,30,20)]}>
            <Text style={[styles.fontwhite]}>Overall look & feel</Text>
            <View style={[styles.row, styles.spaceBetweenVertical,{gap:15}]}>
              <TouchableOpacity onPress={() => handleIconPress('section3','frown')}>
                <FontAwesome5 name={'frown'} style={[styles.green, { color: selectedIcons.section3 === 'frown' ? '#0e804f' : styles.green.color }]}size={selectedIcons.section3 === 'frown' ? 45 :40}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section3','meh')}>
                <FontAwesome5 name={'meh'} style={[styles.green, { color: selectedIcons.section3 === 'meh' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section3 === 'meh' ? 45 :40}  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('section3','smile')}>
                <FontAwesome5 name={'smile'} style={[styles.green, { color: selectedIcons.section3 === 'smile' ? '#0e804f' : styles.green.color }]} size={selectedIcons.section3 === 'smile' ? 45 :40} />
              </TouchableOpacity>
            </View>
            </View>
           
            
          </View>
          <View style={[{ width: widthValue(1.17), height: 30,zIndex:0 }, styles.bggreenish,marginPosition(-20,0), radius(0, 0, 20, 20, 0)]}></View>
          
          <View style={[styles.spaceBetweenVertical,styles.row,marginPosition(15,20),{width:widthValue(1.15)}]}>
          <TouchableOpacity onPress={handleBackPress} style={[{ backgroundColor: getButtonColor() }, radius(30),padding(0,10, 30),  styles.allCenter,styles.rowReverse,{gap:20}]}>
              <Text style={[styles.fontwhite,fontSize(18)]}>Back</Text>
              <FontAwesome5 name={'chevron-left'} style={[styles.fontwhite,fontSize(18)]} />
            </TouchableOpacity>
          <TouchableOpacity onPress={handleNextPress} style={[{ backgroundColor: getButtonColor() }, radius(30),padding(0,10, 30),  styles.allCenter,styles.row,{gap:20}]}>
              <Text style={[styles.fontwhite,fontSize(18)]}>Next</Text>
              <FontAwesome5 name={'chevron-right'} style={[styles.fontwhite,fontSize(18)]} />
            </TouchableOpacity>
            </View>
        </View>
): showFeedback?(
    <FirstPage/>
) : showMessage ?(
    <Message />
) 
:<Review /> }
 </View> 
  )
  
}

export default Review



