import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header2 from '../../Components/Header/Header2';
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

const Notification = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    };
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
                    <View style={[marginPosition(-30, 0, 20, 15)]}>
                        <Header2
                            title1={'Be'}
                            title2={' Notified'}
                            Desc={'Engage with the utility via notifications'}
                        />
                    </View>
                    <View style={[styles.selfStart, marginPosition(40, 25, 0, 25)]}>
                        <View
                            style={[
                                {
                                    width: 270,
                                    height: 50,
                                    transform: [{ rotate: '-6.5deg' }],
                                },
                                styles.bggreenish,
                                marginPosition(0, 0, 0, 0.5),
                                radius(30),
                            ]}></View>
                        <View
                            style={[
                                {
                                    width: 310,
                                    height:50,
                                    transform: [{ rotate: '-2.5deg' }],
                                },
                                styles.bggreen,
                                marginPosition(-40, 0, 0, 1),
                                radius(30),
                            ]}></View>
                        <View
                            style={[
                                { height: heightValue(1.7), width: widthValue(1.15), gap: heightValue(5) },
                                styles.bgbarback,
                                marginPosition(-40, 0, 0, 0),
                                radius(15),
                                padding(0, 10, 30),
                                styles.selfStart,

                            ]}>
                            <Text
                                style={[
                                    styles.green,
                                    marginPosition(20, 10, 10, 0),
                                    fontSize(22),
                                    styles.textLeft,
                                ]}>
                                Notifications
                            </Text>
                            <Text style={[styles.green, fontSize(16.5), styles.textCenter]}>
                                You have no New Notifications available at this moment.Please
                                check again later
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.flexEnd]}>
                        <TouchableOpacity style={[padding(0, 10, 30), styles.bggreyish, , radius(20), marginPosition(30, 25, 0,),]}>
                            <Text style={[styles.fontwhite, fontSize(16), styles.textCenter]}>Clear</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </DrawerScreenWrapper>
    );
};
export default Notification;
