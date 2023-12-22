import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput,Linking } from 'react-native';
import React, { useState } from 'react';
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
import SettingHeader from '../../Components/Header/SettingHeader/SettingHeader';
import LinkBox from './Components/LinkBox/LinkBox';
import LinkBox2 from './Components/LinkBox/LinkBox2';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const UsefulLinks = ({ navigation }) => {
    //Linking Section

    const GoToLink = ()=>{
        const url = 'https://www.uday.gov.in/';
        Linking.openURL(url)
    }
    const GoToLink2 = ()=>{
        const url2 = 'https://www.ddugjy.gov.in/';
        Linking.openURL(url2)
    }
    const GoToLink3 = ()=>{
        const url3 = 'https://www.ipds.gov.in/Default.aspx';
        Linking.openURL(url3)
    }
    const GoToLink4 = ()=>{
        const url4 = 'http://www.rodalee.com/';
        Linking.openURL(url4)
    }
    const GoToLink5 = ()=>{
        const url5 = 'https://www.apdcl.org/website/Project?showdiv=akashdeep';
        Linking.openURL(url5)
    }
    const GoToLink6 = ()=>{
        const url6 = 'https://www.apdcl.org/website/DutiesOfConsumer';
        Linking.openURL(url6)
    }

    const currentYear  = new Date().getFullYear();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    const [openIndex, setOpenIndex] = useState()
    const handleShowDetails = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView
                style={[
                    flex(1),
                    { width: widthValue(1) },
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
                        <View style={[styles.centerHorizontal]}>
                        <SettingHeader
                            title1={'APDCL'}
                            title2={' Schemes'}
                        />
                        </View>
                    </View>
                    <View style={[styles.centerHorizontal]} >
                <View style={[styles.bgbarback,{width:widthValue(1.15)},marginPosition(0,0,0,25),radius(30),padding(0,10,20),styles.selfStart,styles.row,styles.centerHorizontal,{gap:10}]}>
                    <FontAwesome5 name='search' style={[fontSize(20),styles.fontwhite]} />
                    <TextInput   placeholder='Search' placeholderTextColor={'white'} style={[styles.fontwhite]} onChangeText={(value)=>{if(value === Shortname){
                        console.log(Shortname)
                    }}}/>
                </View>
                <Text style={[styles.fontwhite,fontSize(8),styles.textCenter,marginPosition(10,0,10,0)]}> Click on the redirect to specific page to know more information</Text>
                <View style={[styles.selfStart,marginPosition(10,0,0,25)]}>
    <FontAwesome6 name={'bolt'} style={[styles.green,fontSize(20)]} />
</View>
                <TouchableOpacity style={[styles.bgbarback,{width:widthValue(1.15), height:heightValue(8),gap:20},marginPosition(30,0,20,0),padding(0,20,10),styles.spaceBetweenVertical,radius(10)]} onPress={GoToLink}>
                    <Text style={[fontSize(20),styles.fontwhite]}> UDAY</Text>
                    <Text style={[fontSize(10),styles.fontwhite]}> Ujwal Discom Assurance Yojana</Text>
                </TouchableOpacity>

<View style={[styles.selfStart,marginPosition(10,0,30,25)]}>
    <FontAwesome6 name={'bolt'} style={[styles.green,fontSize(20)]} />
</View>
                <View style={[styles.spaceBetween,styles.rowWrap,{width:widthValue(1.15),gap:15},]}>
                <LinkBox  Shortname={'DDUGJY'} FullName={'Deen Dayal Upadhyaya Gram Jyoti Yogana'} onPress={GoToLink2}/>
                <LinkBox  Shortname={'IPDS'} FullName={'Integrated Power Development Scheme'} onPress={GoToLink3}/>
                <LinkBox  Shortname={'RodaleeApdcl'} FullName={'Roof Top Solar'} onPress={GoToLink4}/>
                <LinkBox  Shortname={'AKASHDEEP'} FullName={'Akashdeep scheme'} onPress={GoToLink5}/>
                <LinkBox2 Shortname={'Daily Power Position'} FullName={'Daily Power Position in Assam'}  />
                <LinkBox2 Shortname={'Duty of and Electricity Consumer'} FullName={'Duty of and Electricity Consumer'}  onPress={GoToLink6}/>
                </View>
                <Text style={[styles.fontwhite,styles.textCenter,fontSize(10),marginPosition(20,0,10,20)]}>Copyright @{currentYear}-APDCL</Text>
                </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    );
          
};
export default UsefulLinks;