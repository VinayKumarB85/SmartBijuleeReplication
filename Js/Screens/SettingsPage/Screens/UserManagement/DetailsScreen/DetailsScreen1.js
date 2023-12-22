import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FillDetails from '../FillDetail/FillDetails';
import {
  padding,
  styles,
  radius,
  widthValue,
  marginPosition,
  heightValue,
} from '../../../../../Utils/Styles';
import InputBox from '../Components/InputBox/InputBox';
import ConfirmDetails from './ConfirmDetails';
import ResultScreen from './ResultScreen';

const DetailsScreen1 = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isValid,setIsValid] = useState(false)
  const [dropdownvalue,setdropdown]=useState('')
  const handleBackPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    const totalPage = 3;
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <View>
      <View style={[{gap: 25}]}>
        <FillDetails />
        {currentPage === 0 && (
          <View>
            <InputBox
              onChangeText={val => setName(val)}
              onNumberChange={val => {
                setNumber(val);
                // validatePhoneNumber(val)
              }}
              onChangedropdown={(val)=>setdropdown(val)}
            />
          </View>
        )}

        {currentPage === 1 && <ConfirmDetails name={name} number={number}  dropdownvalue={dropdownvalue}/>}

        {currentPage === 2 && <ResultScreen />}
      </View>
      <View
        style={[
          styles.spaceBetweenVertical,
          styles.row,
          marginPosition(20, 0, 0, 40),
          {width: widthValue(1.2)},
        ]}>
        <TouchableOpacity
          style={[
            styles.bgDarkBlue,
            radius(30),
            {width: widthValue(4)},
            styles.allCenter,
          ]}
          onPress={handleBackPage}>
          <Text style={[styles.fontwhite, padding(0, 10, 30)]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bgDarkBlue,
            radius(30),
            {width: widthValue(4)},
            styles.allCenter,
          ]}
          onPress={handleNextPage}>
          <Text style={[styles.fontwhite, padding(0, 10, 30)]}>
            {currentPage === 2 ? 'Send' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailsScreen1;
