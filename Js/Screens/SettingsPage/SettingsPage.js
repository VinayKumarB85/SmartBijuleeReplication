import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Settings } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition, padding } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import SettingsHeader from './SettingsHeader/SettingsHeader'
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SettingsName from './SettingsName/SettingsName'
import SettingsCard from './SettingsCard/SettingsCard'
import StackNavigator from '../StackNav/Stack'
import { createStackNavigator } from '@react-navigation/stack'
import PersonalInfo from './Screens/PersonalInfo/PersonalInfo'
import { useSelector } from 'react-redux'


const SettingsPage = ({ navigation }) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), }, darkmode?styles.bglightblack:styles.bgLightWhite]}>
                <View style={[marginPosition(30, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[darkmode?styles.fontwhite:styles.black, fontSize(24),]}
                        />
                        <Text style={[darkmode?styles.fontwhite:styles.black,fontSize(25),marginPosition(10,0,20,-10)]}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView  contentContainerStyle={[paddingPosition(0,15,0,15)]}>
                    {/* <SettingsCard navigation={navigation}/> */}

                    <SettingsCard navigation={navigation}/>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    )
}
export default SettingsPage