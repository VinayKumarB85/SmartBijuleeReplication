import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation, useEffect } from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition } from '../../Utils/Styles'
import Header from '../../Components/Header/Header'
import Box1 from '../../Components/Box1/DashBoardComponent'
import Graph from '../../Components/Graph/Graph'
import DonutChart from '../../Components/DonutChart'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import { dashBoardApi } from '../../api/userApi'
import { useDispatch,useSelector } from 'react-redux'
import MenuBar from '../../Components/MenuBar/MenuBar'

const DashBoard = ({ navigation }) => {

const globalVariableDashboard = useSelector((state)=>state)
console.log('globalVariableDashboardsdfghjkil;',globalVariableDashboard);
console.log('darkMode;',globalVariableDashboard.system.darkMode);

const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);



  console.log('loginId',globalVariableDashboard.auth.user.data.CANumber)
  console.log('meterId',globalVariableDashboard.auth.user.data.MID)
  console.log('Name',globalVariableDashboard.auth.user.data.Name)
  
  const loginId = globalVariableDashboard.auth.user.data.CANumber;
  const meterId = globalVariableDashboard.auth.user.data.MID;
  const phase = globalVariableDashboard.auth.user.data.PHASE;
  const Name = globalVariableDashboard.auth.user.data.Name;
    const openDrawer = () => {
        navigation.toggleDrawer();
    }

    const dispatch = useDispatch();

    const dashBoardData = async ()=>{
        const dashBoardResp = await dispatch(dashBoardApi(
            {
                "loginID": loginId,
                "meterID": meterId,
                "phase": phase,
              }
        ))
        console.log('dashBoardResp',dashBoardResp);
    }
    useEffect(()=>{
       dashBoardData();
    },[])
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), }, darkmode?styles.bglightblack:styles.bgLightWhite]}>
                <MenuBar />
                <ScrollView >
                    <View style={[marginPosition(8, 0, 0, 25)]}>
                        <Header
                            Greeting={'Welcome'}
                            name={Name}
                            ConsumerId={`Consumer ID: ${loginId}`}
                        />
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[{ width: widthValue(1.05), paddingLeft: 25, marginRight: 10, }, marginPosition(12)]}>
                        <Box1 consumed={'Last Month Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Consumption:'} units={'0 Units'} />
                        <Box1 consumed={'Monthly Forecast:'} units={'0 Units'} />
                    </ScrollView>
                    <View style={[marginPosition(15, 25, 10, 25),darkmode? styles.bgbarback:styles.bgWhite, radius(18), screenHeight(2),]}>
                        <Graph />
                    </View>
                    <View style={[{ height: heightValue(7), }, marginPosition(10, 25, 30, 25), styles.row,darkmode? styles.bgbarback:styles.bgWhite, styles.centerHorizontal, styles.spaceEvenly, radius(15),]}>
                        <View>
                            <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(15)]}>Today's Consumption</Text>
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