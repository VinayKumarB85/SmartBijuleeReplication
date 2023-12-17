import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue, padding, marginPosition, paddingPosition } from '../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Box2 from '../../../Components/Box1/ComparisionComp'
import DrawerScreenWrapper from '../../Drawer Nav/Drawers/DrawerScreenWrapper'
import Header2 from '../../../Components/Header/Header2'
import GraphSheet2 from '../../../Components/Graph/GraphSheet2'
import MonthlyBox from '../../../Components/Box1/MonthlyBox'

const Comparison = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), }, paddingPosition(30), styles.bglightblack]}>
                <View style={[marginPosition(30, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={[marginPosition(10, 20, 0, 15)]}>
                        <Header2
                            title1={'Unit'}
                            title2={' Comparison'}
                            Desc={'Compare your daily, weekly & monthly consumption to keep a tab on electricity usage'} />
                    </View>
                    <View style={[{ width: widthValue(1.1), }, marginPosition(0, 20, 0, 20), styles.spaceBetween, styles.row,]}>
                        <Box2 text1={'Today'} text2={'[Inprogress]'} />
                        <Box2 text3={'Yesterday'} />
                    </View>
                    <View style={[marginPosition(15, 20, 0, 20), styles.bgbarback, radius(18), screenHeight(1.95), padding(0, 20, 10)
                    ]}>
                        <View style={[styles.row, paddingPosition(0, 0, 0, 10)]}>
                            <Text style={[styles.fontwhite, fontSize(20)]}>Weekly</Text>
                            <Text style={[styles.green, fontSize(20)]}> Comparison</Text>
                        </View>
                        <GraphSheet2 />
                        <View style={[ styles.spaceAroundVertical,marginPosition(10,0,0,10),paddingPosition(0,0,10),{gap:5}]}>
                            <Text style={[styles.fontwhite, fontSize(10)]}>Last week Consumption (Units)</Text>
                            <Text style={[styles.green, fontSize(10)]}>Current week Consumption (Units)</Text>
                        </View>
                    </View>
                    <MonthlyBox />
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper >
    )
}
export default Comparison