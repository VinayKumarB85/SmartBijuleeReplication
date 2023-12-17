import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
    styles,
    radius,
    marginPosition,
    paddingPosition,
    fontSize,
    flex,
    screenWidth,
    screenHeight,
    position,
    heightValue
} from '../../Utils/Styles';
import Swiper from 'react-native-swiper';
import OnBoarding from './OnBoarding';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        }
        if (currentPage === 3) {
            navigation.navigate('Login');
        }
    };

    const loginPage = () => {
        navigation.navigate('Login');
    };

    const onIndexChanged = index => {
        setCurrentPage(index);
    };
    return (
        <View style={[flex(1),
        styles.bgBlack,
        styles.spaceBetweenVertical,
        styles.positionRelative,
        screenHeight(1), screenWidth(1)]}>
            <Swiper
                showsButtons={true}
                buttonWrapperStyle={[
                    styles.positionAbsolute,
                    styles.flexEnd,
                    styles.spaceEvenly,
                    marginPosition(-15, 0, 0, 0)
                ]}
                prevButton={
                    <FontAwesome5
                        name={'play'}
                        rotation={180}
                        style={[styles.green, fontSize(10),]}
                    />
                }
                nextButton={
                    <FontAwesome5
                        name={'play'}
                        style={[styles.green, fontSize(10)]}
                    />
                }
                dot={
                    <View
                        style={[
                            styles.bgWhite,
                            screenHeight(100),
                            screenWidth(50),
                            marginPosition(0, 4, 0, 4),
                            radius(50)
                        ]}></View>
                }
                activeDot={
                    <View
                        style={[
                            styles.bggreen,
                            screenHeight(100),
                            screenWidth(50),
                            marginPosition(0, 4, 0, 4),
                            radius(50)
                        ]}></View>
                }
                // paginationStyle={{
                //     bottom: 15,
                // }}
                loop={false}
                index={currentPage}
                onIndexChanged={onIndexChanged} >
                <OnBoarding
                    num={'01'}
                    suptitle={'Know your'}
                    Title={'CONSUMPTION'}
                    desc={
                        'Solving your issues before they turn into a problem, is a real luxury. Keep a track of your consumptions on your finger tips.'
                    }
                />
                <OnBoarding
                    num={'02'}
                    suptitle={'Pay your'}
                    Title={'BILLS ONLINE'}
                    desc={
                        'Avoid Penalty for late payments nomore, prepaid or postpaid - Pay your bills on time!'
                    }
                />
                <OnBoarding
                    num={'03'}
                    suptitle={'Get Event'}
                    Title={'NOTIFICATION'}
                    desc={
                        'Be Notified for Every Event - Let it be your Bill Generation, Voltage Spike, Consumption track or even Maximum Demand..'
                    }
                />
                <OnBoarding
                    num={'04'}
                    suptitle={'Know your'}
                    Title={'POWER QUALITY'}
                    desc={
                        'Keep a track on your Power Quality.Know your Voltage Spikes and Drops,and protect your Household Electronics.'
                    }
                />
            </Swiper >
            <View
                style={[
                    styles.row,
                    styles.spaceBetween,
                    marginPosition(-58, 0, 10, 0),
                    paddingPosition(0, 30, 0, 30),
                    screenHeight(15)
                ]}>
                <TouchableOpacity onPress={loginPage}>
                    <Text style={[styles.darkGreen, fontSize(27.5)]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextPage}>
                    <Text style={[styles.darkGreen, fontSize(27.5)]}>
                        {currentPage === 3 ? 'Done' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default Home;
