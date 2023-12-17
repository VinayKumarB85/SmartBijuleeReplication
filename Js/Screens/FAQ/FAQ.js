import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
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
import { RollInLeft, RotateInUpLeft } from 'react-native-reanimated';
import FaqButtons from './FaqButton/FaqButtons';
import FaqDetailsButton from './FaqDetailsButton/FaqDetailsButton';
import SettingHeader from '../../Components/Header/SettingHeader/SettingHeader';

const FAQ = ({ navigation }) => {
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
                    <View style={[marginPosition(10, 0, 0, 20)]}>
                        <SettingHeader
                            title1={'Top'}
                            title2={' Questions'}
                            Desc={'Have Quaries?'}
                        />
                    </View>
                    <View style={[styles.row, marginPosition(0, 25, 0, 20), styles.selfStart, { width: widthValue(1.1) }]}>
                        <FaqButtons ButtonText={'All'} onPress={() => console.warn('i am all button')} />
                        <FaqButtons ButtonText={'General'} onPress={() => console.warn('i am General button')} />
                        <FaqButtons ButtonText={'Billing'} onPress={() => console.warn('i am Billing button')} />
                    </View>
                    <View >
                        <Text style={[styles.fontwhite, fontSize(17), marginPosition(10, 25, 0, 20)]}>General <Text style={[styles.green, fontSize(17),]}>Category</Text></Text>
                        <FaqDetailsButton isOpen={openIndex === 0} onPress={() => handleShowDetails(0)} />
                        <FaqDetailsButton isOpen={openIndex === 1} onPress={() => handleShowDetails(1)} />
                        <FaqDetailsButton isOpen={openIndex === 2} onPress={() => handleShowDetails(2)} />
                        <FaqDetailsButton isOpen={openIndex === 3} onPress={() => handleShowDetails(3)} />
                    </View>
                    <View>
                        <Text style={[styles.fontwhite, fontSize(17), marginPosition(10, 25, 0, 20)]}>Billing <Text style={[styles.green, fontSize(17),]}>Category</Text></Text>
                        <FaqDetailsButton isOpen={openIndex === 4} onPress={() => handleShowDetails(4)} />
                        <FaqDetailsButton isOpen={openIndex === 5} onPress={() => handleShowDetails(5)} />
                        <FaqDetailsButton isOpen={openIndex === 6} onPress={() => handleShowDetails(6)} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    );
};
export default FAQ;
