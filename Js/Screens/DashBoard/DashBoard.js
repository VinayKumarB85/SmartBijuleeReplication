import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation, useEffect } from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../../Components/Header/Header'
import Box1 from '../../Components/Box1/DashBoardComponent'
import Graph from '../../Components/Graph/Graph'
import DonutChart from '../../Components/DonutChart'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import { dashBoardApi } from '../../api/userApi'
import { useDispatch,useSelector } from 'react-redux'

const DashBoard = ({ navigation }) => {

    const globalVariableDashboard = useSelector((state)=>state.userDetails.DashBoard)
  console.log('globalVariableDashboard',globalVariableDashboard);
    const openDrawer = () => {
        navigation.toggleDrawer();
    }

    const dispatch = useDispatch();
    useEffect(()=>{

       dispatch (dashBoardApi())
    },[])
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
                <ScrollView >
                    <View style={[marginPosition(8, 0, 0, 25)]}>
                        <Header
                            Greeting={'Welcome'}
                            name={'JuliusCeaser'}
                            ConsumerId={'Consumer ID: C000003'}
                        />
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[{ width: widthValue(1.05), paddingLeft: 25, marginRight: 10, }, marginPosition(12)]}>
                        <Box1 consumed={'Last Month Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Forecast:'} units={'0 Units'} />
                    </ScrollView>
                    <View style={[marginPosition(15, 25, 10, 25), styles.bgbarback, radius(18), screenHeight(2),]}>
                        <Graph />
                    </View>
                    <View style={[{ height: heightValue(7), }, marginPosition(10, 25, 30, 25), styles.row, styles.bgbarback, styles.centerHorizontal, styles.spaceEvenly, radius(15),]}>
                        <View>
                            <Text style={[styles.fontwhite, fontSize(15)]}>Today's Consumption</Text>
                            <Text style={[styles.green, fontSize(22), styles.textCenter, { marginTop: 1 }]}>150 Units</Text>
                        </View>
                        <DonutChart />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    )
}
export default DashBoard