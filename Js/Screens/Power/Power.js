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

const Power = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), }, paddingPosition(30), styles.bglightblack]}>
                <View style={[marginPosition(10, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView  style={[marginPosition(0,20,0,15)]}>
                    <View style={[marginPosition(10)]}>
                        <Header2
                            title1={'Power'}
                            title2={' Quality'}
                            Desc={'How is the quality of the power that you are receiving ?'} />
                    </View>
                    <View style={[marginPosition(20)]}>
                        <VoltageComponent/>
                    </View>
                    <View style={[marginPosition(20,0,0,0),{width:widthValue(1.15),height:heightValue(2.3)},styles.bgbarback,radius(0,15,0,0,15),padding(0,20,20)]}>
                        <View>
                        <Text style={[styles.fontwhite,fontSize(15)]}>Voltage<Text style={[styles.green]}> Hourly Trend</Text></Text>
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