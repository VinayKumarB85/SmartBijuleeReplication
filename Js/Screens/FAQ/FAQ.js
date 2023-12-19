import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState,useEffect } from 'react';
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
import { RollInLeft, RotateInUpLeft } from 'react-native-reanimated';
import FaqButtons from './FaqButton/FaqButtons';
import FaqDetailsButton from './FaqDetailsButton/FaqDetailsButton';
import SettingHeader from '../../Components/Header/SettingHeader/SettingHeader';
import { useDispatch,useSelector } from 'react-redux';
import { faqApi } from '../../api/userApi/faqApi';

const FAQ = ({ navigation }) => {
    const globalVariableFaq = useSelector((state)=>state.userDetails.faqUser)
    console.log('globalVariableFaq',globalVariableFaq);

    
    const dispatch = useDispatch();


    const faqDetails = async ()=>{
        const faqResp = await dispatch(faqApi(
            {
                "loginID": "COOOOO3",
                "langID": 1
              }
        ))
        console.log('faqResp',faqResp)
    }
    
    useEffect(()=>{
        faqDetails()
    },[])





    const openDrawer = () => {
        navigation.toggleDrawer();
    };
    const handleShowDetails = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView
                style={[
                    flex(1),
                    { width: widthValue(1), paddingTop: heightValue(30) },
                    styles.bglightblack,
                ]}>
                <View style={[marginPosition(20, 20, 0, 25)]}>
                    <TouchableOpacity onPress={openDrawer}>
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24)]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={[marginPosition(10, 0, 0, 20)]}>
                        <SettingHeader
                            title1={'Top'}
                            title2={' Questions'}
                            Desc={'Have Quaries?'}
                        />
                    </View>
                    <View style={[styles.row, marginPosition(0, 25, 0, 20), styles.selfStart, { width: widthValue(1.1) }]}>
                        <FaqButtons ButtonText={'All'} onPress={() => console.warn('i am all button')} />
                        <FaqButtons ButtonText={'General'} onPress={() => console.warn('i am General button')} />
                        <FaqButtons ButtonText={'Billing'} onPress={() => console.warn('i am Billing button')} />
                    </View>
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
        onPress={handleShowDetails}>
        <View
          style={[
            styles.row,
            styles.spaceBetweenVertical,
            styles.centerHorizontal,
          ]}>
          <Text style={[styles.fontwhite, fontSize(15)]}>
             Click me for Details
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
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    );
};
export default FAQ;
