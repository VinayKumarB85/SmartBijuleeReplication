import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles, flex, padding, marginPosition, widthValue, heightValue, radius, fontSize, borderWidth, paddingPosition } from '../../../../Utils/Styles';
import Header2 from '../../../../Components/Header/Header2';
import BackButton from '../../Backbutton/BackButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Reviews from './Components/Review';
import Review from './Components/Review';
import Message from './Components/Message'
import FirstPage from './Components/FirstPage';

const FeedBack = () => {
  

  return (
    <SafeAreaView style={[styles.bglightblack, flex(1),]}>
      <BackButton />
      <View style={[marginPosition(10, 10, 30, 30)]}>
        <Header2 title1={'Speak Your'} title2={'Mind'} Desc={'Please provide your feedback, it will help us to serve you better'} />
        <FirstPage/>
      </View>
    </SafeAreaView>
  );
};

export default FeedBack;

