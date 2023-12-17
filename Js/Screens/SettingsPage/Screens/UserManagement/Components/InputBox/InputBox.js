import {View, Text, TextInput,Picker} from 'react-native';
import React,{useState} from 'react';
import {
  borderWidth,
  fontSize,
  styles,
  widthValue,
  padding,
  marginPosition
} from '../../../../../../Utils/Styles';
import SettingsName from '../../../../SettingsName/SettingsName';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Relation from '../Relation/Relation'

const InputBox = ({onChangeText,onNumberChange,onChangedropdown}) => {

  const [isValid,setIsValid] = useState(false)


const dataFromRelation = (a)=>{
  onChangedropdown(a);
}

  return (
    <View style={[,marginPosition(40,0,0,30)]}>
      <SettingsName name1={'Fill the'} name2={'Details'} />
      <View style={[{gap:30}]}>
      <View>
        <Text style={[styles.gr]}>Name</Text>
        <TextInput
          style={[
            borderWidth(0, 0, 0, 1, 0),
            styles.borderGreen,
            fontSize(18),
            styles.fontwhite,
            {width: widthValue(1.2)},
            padding(0, 10, 0),
          ]}
          onChangeText={onChangeText}
        />
      </View>
      <View>
        <Text style={[styles.gr]}>Contact Number</Text>
        <TextInput
          style={[
            borderWidth(0, 0, 0, 1, 0),
            styles.borderGreen,
            fontSize(18),
            styles.fontwhite,
            {width: widthValue(1.2)},
            padding(0, 10, 0),
          ]}
          onChangeText={(val)=>onNumberChange(val)}
            // onEndEditing={validatePhoneNumber}
            keyboardType="numeric"
            maxLength={10}
            // value={handleNumberChange}
        />
        {!isValid && (
            <Text style={[styles.red, fontSize(10)]}>Please enter a valid phone number</Text>
          )}
      </View>
      <Relation dataFromRelation={dataFromRelation}/>
      
    </View>
      </View>
  );
};

export default InputBox;

