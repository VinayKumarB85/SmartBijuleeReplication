import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackComponent,
} from 'react-native';
import React, {useState} from 'react';
import {
  fontSize,
  styles,
  padding,
  widthValue,
  marginPosition,
  radius,
} from '../../../Utils/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FaqDetailsButton = ({isOpen, onPress}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => [setShowDetails(!showDetails)];
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.bgbarback,
          padding(0, 10, 20),
          {width: widthValue(1.1)},
          marginPosition(10, 20, 0, 20),
          radius(0, 15, 0, 0, 15),
        ]}
        onPress={onPress}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
          ]}>
          <Text style={[styles.fontwhite, fontSize(15)]}>
            {isOpen ? 'Click me for Details' : 'Click me for Details'}
          </Text>

          <FontAwesome5
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            style={[styles.gr]}
          />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={[
            styles.bgbarback,
            padding(0, 10, 20),
            {width: widthValue(1.1)},
            marginPosition(0, 20, 10, 20),
            radius(0, 0, 15, 15, 0),
          ]}>
          <Text style={[styles.gr]}>
            this is the details for the click and the details is regarding your
            quaries and the deatils is the onl;yu solution to yoyur quaries and
            extra information check for completed details in the useful links
            se4ction in the app and you can find more and more schemes fdor you
            which are avaiulabkle for the ben ififgt of your house electricty
          </Text>
        </View>
      )}
    </View>
  );
};

export default FaqDetailsButton;
