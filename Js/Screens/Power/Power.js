import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue, padding, marginPosition, paddingPosition, borderWidth } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import Header2 from '../../Components/Header/Header2'
import { VictoryBar } from 'victory-native'
import VoltageComponent from './Components/VoltageComponent/VoltageComponent'
import VoltageHour from './Components/VoltageHour'
import PowerButtons from './Components/PowerButtons/PowerButtons'
import LogHourScrollBar from './Components/LogHourScrollBar'
import { useSelector } from 'react-redux'
import MenuBar from '../../Components/MenuBar/MenuBar'

const Power = () => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);

    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), },paddingPosition(0,0,0,) ,darkmode?styles.bglightblack:styles.bgLightWhite]}>
                <MenuBar />
                <ScrollView  style={[marginPosition(0,20,0,20)]}>
                    <View style={[marginPosition(10)]}>
                        <Header2
                            title1={'Power'}
                            title2={' Quality'}
                            Desc={'How is the quality of the power that you are receiving ?'} />
                    </View>
                    <View style={[marginPosition(20,20,0,)]}>
                        <VoltageComponent/>
                    </View>
                    <View style={[marginPosition(20,0,0,0),{width:widthValue(1.12),height:heightValue(2.3)},darkmode?styles.bgbarback:styles.bgWhite,radius(0,15,0,0,15),padding(0,20,20)]}>
                        <View>
                        <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(15)]}>Voltage<Text style={[styles.green]}> Hourly Trend</Text></Text>
                        <VoltageHour/>
                        <LogHourScrollBar />
                        </View>
                    </View>
                    <PowerButtons/>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper >
    )
}
export default Power