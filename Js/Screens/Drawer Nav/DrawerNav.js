import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Comparison from '../Consumption/Comparison/Comparison';
import History from '../Consumption/History/History';
import { heightValue, widthValue, styles, fontSize, flex } from '../../Utils/Styles';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import SettingsPage from '../SettingsPage/SettingsPage'
import EventAnalysis from '../EventAnalysis/EventAnalysis';
import Power from '../Power/Power';
import MDI from '../MDI/MDI';
import Billing from '../Billing/Billing';
import EnergyTips from '../EnergyTips/EnergyTips';
import FAQ from '../FAQ/FAQ';
import Notification from '../Notification/Notification';
import CustomerEngagement from '../CustomerEngagement/CustomerEngagement';
import Rating from '../Rating/Rating';
import Feedback from '../Feedback/Feedback';
import { NavigationContainer } from '@react-navigation/native';
import { withNavigation } from '@react-navigation/compat';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import StackNavigator from '../StackNav/Stack';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {

    return (

        <Drawer.Navigator
            // initialRouteName='DashBoard'
            drawerContent={(props) => {
                return (

                    <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
                        <View>
                            <View style={[{ height: widthValue(2), marginTop: heightValue(15) }, styles.centerHorizontal,]}>
                                <Image source={require('../assets/LoginLogo2.png')} style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain' }]} />
                                <Text style={[fontSize(16), styles.fontwhite, { marginTop: heightValue(350) }]}>JuliusCeaser</Text>
                                <Text style={[fontSize(15), styles.fontwhite,]}>Consumer ID : C000003</Text>
                            </View>
                        </View>
                        <DrawerContentScrollView showsVerticalScrollIndicator={false}
                            style={[{
                                // height: heightValue(1.1),
                            }]}>
                            <DrawerItemList  {...props} />
                        </DrawerContentScrollView>

                    </SafeAreaView>

                )
            }}
            screenOptions={{
                headerShown: false,
                drawerStatusBarAnimation: 'slide',
                drawerStyle: {
                    width: widthValue(1.6),
                    backgroundColor: '#282f42',
                    ...styles.selfStart,
                    paddingBottom: heightValue(12)

                },
                drawerContentStyle: {
                    backgroundColor: '#282f42',
                    color: 'white',

                    // width: widthValue(1.3)
                },
                sceneContainerStyle: {
                    backgroundColor: '#282f42',
                },
                drawerType: 'slide',
                drawerActiveBackgroundColor: '#282f42',
                drawerInactiveBackgroundColor: '#282f42',
                drawerActiveTintColor: '#282f42',
                drawerInactiveTintColor: '#282f42',
                overlayColor: 'transparent',
                drawerLabelStyle: {
                    color: 'white',
                    width: 260,
                    borderTopWidth: .8,
                    borderColor: 'grey',
                    

                    // Set label text color to white
                },
            }
            }>
            <Drawer.Screen name='Stack' component={StackNav} />
            < Drawer.Screen
                name="DashBoard"
                component={DashBoard} />
            {/* <Drawer.Screen name='Consumption' component={ConsumptionStack} /> */}
            < Drawer.Screen name='Comparison' component={Comparison}
            />
            <Drawer.Screen name='History' component={History} />
            <Drawer.Screen name='Billing' component={Billing} />
            {/* <Drawer.Screen name='MDI' component={MDI} />
        <Drawer.Screen name='Power' component={Power} />
        <Drawer.Screen name='Event' component={EventAnalysis} />
        <Drawer.Screen name='Energy' component={EnergyTips} />
        <Drawer.Screen name='Notification' component={Notification} />
        <Drawer.Screen name='Settings' component={SettingsPage} />
        <Drawer.Screen name='CustomerEngagement' component={CustomerEngagement} />
        <Drawer.Screen name='Rating' component={Rating} />
        <Drawer.Screen name='Feedback' component={Feedback} /> */}
        </Drawer.Navigator >
    )
}

export default DrawerNav();