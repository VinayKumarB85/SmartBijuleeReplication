import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import EnergyTipsComponent from '../../Components/EnergyTipsComponent/EnergyTipsComponent';
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper';
import {
    styles,
    flex,
    marginPosition,
    paddingPosition,
    fontSize,
    widthValue,
    heightValue,
    padding,
} from '../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header2 from '../../Components/Header/Header2';
import LottieView from 'lottie-react-native';

const EnergyTips = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer();
    };
    return (
        <DrawerScreenWrapper>
            <View
                style={[
                    flex(1),
                    { width: widthValue(1) },
                    paddingPosition(30),
                    styles.bglightblack,
                ]}>
                <View style={[marginPosition(20, 0, 0, 30)]}>
                    <TouchableOpacity onPress={openDrawer}>
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24)]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={[marginPosition(10, 20, 0, 20)]}>
                        <Header2
                            title1={'Energy'}
                            title2={' savings Tips'}
                            Desc={
                                'Simple methods can help you save a significant amount of energy'
                            }
                        />
                    </View>

                    <View
                        style={[
                            { width: widthValue(1.1), height: heightValue(3) },
                            marginPosition(10, 30, 0, 20),
                        ]}>
                        <LottieView source={require('../../../assets/light.json')} style={[{ width: '100%', height: '100%' }]} autoplay />
                    </View>

                    <View
                        style={[{ width: widthValue(1.1) }, marginPosition(10, 30, 0, 20)]}>
                        <Text style={[styles.fontwhite, marginPosition(10, 0, 20, 0), fontSize(18)]}>
                            Saving <Text style={[styles.green]}>Guidelines</Text>
                        </Text>
                        <EnergyTipsComponent
                            tipName={'Energy Tips'}
                            tipDesc={
                                'Ensure that all insulation is in a state of good repair.Finally,encourage staff to turn off the office equipment when it is not being used'
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Ventilation'}
                            tipDesc={
                                'Check that windows are not being opened to avoid overheating during winter months - turn down the overheating instead. Ensure kitchen fans are swicthed off when no cooking is taking place'
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Microwave Ovens and Electric Kettles'}
                            tipDesc={
                                'Microwaves save energy by reducing cooking time.Remember,microwaves cook food from the outside edge towards the center of the dish,so if your cooking more than one item,place larger and thicker items on the outside. '
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Water Heater'}
                            tipDesc={
                                'To help reduce heat loss,always insulate hot water pipes and reducing the temperature setting of water heater from 60 degrees to 50 degrees C. one should save over 18% of the energy used at the highest setting.'
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Computers'}
                            tipDesc={
                                'Turn off the office eqipment when not in use will save more than 50% of the energy. Battery charger like those used in laptops pull the plug when not required and also shut down the computer not in use will reduce system to wear and saves energy.'
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Refrigerators'}
                            tipDesc={
                                'Avoid storing hot/warn food in refrigerators. Allow adequate air circulation inside the refrigerators. Kepp the refrigerator away from all source of heat. Make sure the refrigerator rubber seals are clean an tight'
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Lighting'}
                            tipDesc={
                                'Ensure that someone is responsible for switching off lights in room or area when not in use.check whether you have the more energy efficient lights in your fittings. Clean your tube light and bulbs regularly. '
                            }
                        />
                        <EnergyTipsComponent
                            tipName={'Air Conditioner'}
                            tipDesc={
                                'Set temperature controls for cooling to 24 degrees or even higher . Lower settings require more cooling energy.Clean the filter at least once in a month to avoid more energy consumption by AC.'
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        </DrawerScreenWrapper>
    );
};

export default EnergyTips;
