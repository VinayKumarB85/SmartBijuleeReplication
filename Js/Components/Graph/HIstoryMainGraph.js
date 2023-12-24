import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ButtonsBar from './ButtonsBar'
import Swiper from 'react-native-swiper'
import Graphsheet from './Graphsheet'
import GraphSheet2 from './GraphSheet2'
import { flex, heightValue, widthValue, styles, radius, fontSize, marginPosition, screenHeight, screenWidth, padding } from '../../Utils/Styles'
import { graphData } from '../../Constants/Const'
import GraphButtons from './GraphButtons'
import HistoryGraph from './HistoryGraph'
import CalendarPage from '../../Screens/Consumption/History/CalendarPage/CalendarPage'
import HistoryBox from '../../Screens/Consumption/HistoryBox'
import HistoryBox2 from '../../Screens/Consumption/HistoryBox2'
import { useSelector } from 'react-redux'

const HistoryMainGraph = ({currentPage,onIndexChanged}) => {


    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    return (
        <View>
            <View
                style={[{ width: widthValue(1.1),height:heightValue(2.4)},]}
            >
                <Swiper loop={false}
                    showsPagination={false}
                    index={currentPage}
                    onIndexChanged={onIndexChanged}
                    style={[{ marginTop: -50 }]}
                >
                    <HistoryGraph data={graphData.todayData} xValue={'time'} yValue={'bill'} />
                    <HistoryGraph data={graphData.weekData} xValue={'day'} yValue={'bill'} />
                    <HistoryGraph data={graphData.monthData} xValue={'month'} yValue={'bill'} />
                </Swiper >
            </View >

            <View style={[styles.allCenter, { marginTop: -10 }]}>
                <Text style={[styles.green, fontSize(14)]}>X-axis Months and y-axis Consumption</Text>
                <Text style={[darkmode?styles.fontwhite:styles.black, fontSize(12)]}>(Click on Charts to see the value)</Text> 
            </View>
            <View>
              <HistoryBox  text1={'Total'} text2={' Consumption'}/>
              <HistoryBox2   text1={'Average'} text2={' Consumption'}/>
          </View>
        </View>
    )
}
export default HistoryMainGraph