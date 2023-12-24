import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper';
import {
  flex,
  fontSize,
  heightValue,
  lineHeight,
  radius,
  screenHeight,
  styles,
  widthValue,
  marginPosition,
  padding,
  paddingPosition,
} from '../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RollInLeft, RotateInUpLeft} from 'react-native-reanimated';
import FaqButtons from './FaqButton/FaqButtons';
import FaqDetailsButton from './FaqDetailsButton/FaqDetailsButton';
import SettingHeader from '../../Components/Header/SettingHeader/SettingHeader';
import {useDispatch, useSelector} from 'react-redux';
import {faqApi} from '../../api/userApi/faqApi';
import MenuBar from '../../Components/MenuBar/MenuBar';


const FAQ = ({navigation}) => {

  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  const [billingData, setBillingData] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [displaycategory,setDisplayCategory] = useState('')

  const globalVariableFaq = useSelector(state => state);
  console.log('globalVariableFaq', globalVariableFaq);

  const loginId = globalVariableFaq.auth.user.data.CANumber;
  console.log('faqLogin', loginId);
  const languageId = globalVariableFaq.auth.user.data.LangID;
  console.log('faqlang', languageId);
  const dispatch = useDispatch();

  const faqDetails = async () => {

    const faqResp = await dispatch(
      faqApi({
        loginID: loginId,
        langID: languageId,
      }),
    );
    console.log('faqResp', faqResp);
    console.log('Billing data', faqResp.payload.data.billing);
    setBillingData(faqResp.payload.data.billing);
    console.log('general data', faqResp.payload.data.general);
    setGeneralData(faqResp.payload.data.general);
    console.log('general data', generalData);
  };
  useEffect(() => {
    faqDetails();
  }, []);

  useEffect(() => {
    console.log(billingData);
  }, [billingData]);
  useEffect(() => {
    console.log(generalData);
  }, [generalData]);

/*   ----functions to display based on button click {general/ billing}------ */

const displayGeneralData = ()=>{
  setDisplayCategory(generalData);
} 

const displayBillingData = ()=>{
  setDisplayCategory(billingData)
}
const displayAllData = ()=>{
  setDisplayCategory('All')
}



  return (
    <DrawerScreenWrapper>
      <SafeAreaView
        style={[
          flex(1),
          {width: widthValue(1), paddingTop: heightValue(30)},
          darkmode ?styles.bglightblack:styles.bgLightWhite,
        ]}>
       <MenuBar />
        <ScrollView>
          <View style={[marginPosition(10, 0, 0, 20)]}>
            <SettingHeader
              title1={'Top'}
              title2={' Questions'}
              Desc={'Have Quaries?'}
            />
          </View>
          <View
            style={[
              styles.row,
              marginPosition(0, 25, 0, 20),
              styles.selfStart,
              {width: widthValue(1.1)},
            ]}>
            <FaqButtons
              ButtonText={'All'}
              onPress={displayAllData}
            />
            <FaqButtons
              ButtonText={'General'}
              onPress={displayGeneralData}
            />
            <FaqButtons
              ButtonText={'Billing'}
              onPress={displayBillingData}
            />
          </View>
          {displaycategory === generalData ? 

         ( <View>
            <Text
              style={[
                darkmode?styles.fontwhite:styles.black,
                fontSize(17),
                marginPosition(20, 25, 10, 20),
              ]}>
              General <Text style={[styles.green, fontSize(17)]}>Category</Text>
            </Text>

            {generalData.map(({question, answer, index}) => (
              <FaqDetailsButton
                key={index}
                title1={question}
                title2={question}
                answer={answer}
              />
            ))}
          </View>) :  displaycategory === billingData ? 
          <View>
            <Text
              style={[
                darkmode?styles.fontwhite:styles.black,
                fontSize(17),
                marginPosition(20, 25, 10, 20),
              ]}>
              Billing <Text style={[styles.green, fontSize(17)]}>Category</Text>
            </Text> 

            {billingData.map(({question, answer, index}) => (
              <FaqDetailsButton
                key={index}
                title1={question}
                title2={question}
                answer={answer}
              />
            ))}
          </View>
           : displaycategory === 'All' ? 
           <View>
           <View>
           <Text
             style={[
              darkmode?styles.fontwhite:styles.black,
               fontSize(17),
               marginPosition(20, 25, 10, 20),
             ]}>
             General <Text style={[styles.green, fontSize(17)]}>Category</Text>
           </Text>

           {generalData.map(({question, answer, index}) => (
             <FaqDetailsButton
               key={index}
               title1={question}
               title2={question}
               answer={answer}
             />
           ))}
         </View> 
          <View>
            <Text
              style={[
                darkmode?styles.fontwhite:styles.black,
                fontSize(17),
                marginPosition(20, 25, 10, 20),
              ]}>
              Billing <Text style={[styles.green, fontSize(17)]}>Category</Text>
            </Text> 

            {billingData.map(({question, answer, index}) => (
              <FaqDetailsButton
                key={index}
                title1={question}
                title2={question}
                answer={answer}
              />
            ))}
          </View>
          </View> :''}
        </ScrollView>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
};
export default FAQ;

