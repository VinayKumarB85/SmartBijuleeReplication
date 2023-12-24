import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ButtonsBar from './ButtonsBar'
import Swiper from 'react-native-swiper'
import Graphsheet from './Graphsheet'
import GraphSheet2 from './GraphSheet2'
import { flex, heightValue, widthValue, styles, radius, fontSize, marginPosition, screenHeight, screenWidth, padding } from '../../Utils/Styles'
import { graphData } from '../../Constants/Const'
import GraphButtons from './GraphButtons'
import { useSelector } from 'react-redux'

const Graph = () => {
    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    const [currentPage, setCurrentPage] = useState(0);

    const todayGraph = () => {
        setCurrentPage(0)
    }
    const weekGraph = () => {
        setCurrentPage(1)
    }
    const monthGraph = () => {
        setCurrentPage(2)
    }

    const onIndexChanged = (index) => {
        setCurrentPage(index)
    }
    return (
        <View>
            <View
                style={[{ width: widthValue(1.15), }, screenHeight(2.2), styles.allCenter]}
            >
                <View style={[styles.row, styles.spaceEvenly, { width: widthValue(1.15), }, padding(0, 15, 0)]}>
                    <GraphButtons btnText={'Today'}
                        onPress={todayGraph}
                        btnStyle={[radius(30), padding(0, 6, 25), currentPage === 0 ? styles.bggreen : darkmode?styles.bgbarback:styles.bgWhite ]}
                        fontStyle={[fontSize(16), currentPage === 0 ? darkmode? styles.black:styles.fontwhite : darkmode? styles.fontwhite:styles.black,]}
                    />
                    <GraphButtons btnText={'Week'}
                        onPress={weekGraph}
                        btnStyle={[radius(30), padding(0, 6, 25), currentPage === 1 ? styles.bggreen : darkmode?styles.bgbarback:styles.bgWhite]}
                        fontStyle={[fontSize(16), currentPage === 1 ?  darkmode? styles.black:styles.fontwhite  : darkmode?styles.fontwhite:styles.black,]}
                    />
                    <GraphButtons btnText={'Month'}
                        onPress={monthGraph}
                        btnStyle={[radius(30), padding(0, 6, 25), currentPage === 2 ? styles.bggreen : darkmode?styles.bgbarback:styles.bgWhite]}
                        fontStyle={[fontSize(16), currentPage === 2 ? darkmode? styles.black:styles.fontwhite : darkmode?styles.fontwhite:styles.black,]}
                    />
                </View>
                <Swiper loop={false}
                    showsPagination={true}
                    paginationStyle={[styles.positionAbsolute, { bottom: -5, }]}
                    dot={
                        <View style={[{
                            height: widthValue(30), width: widthValue(30),
                        }, styles.bgGray, radius(30), marginPosition(0, 8, 0, 0)]}></View>
                    }
                    activeDot={
                        <View style={[{
                            height: widthValue(30), width: widthValue(12),
                        }, styles.bggreen, radius(30), marginPosition(0, 8, 0, 0)]}>
                        </View>
                    }
                    index={currentPage}
                    onIndexChanged={onIndexChanged}

                >
                    <Graphsheet data={graphData.todayData} xValue={'time'} yValue={'bill'} />
                    <Graphsheet data={graphData.weekData} xValue={'day'} yValue={'bill'} />
                    <Graphsheet data={graphData.monthData} xValue={'month'} yValue={'bill'} />
                </Swiper >
            </View >
            <View style={[styles.allCenter, marginPosition(10)]}><Text style={[darkmode?styles.fontwhite:styles.black, fontSize(11)]}>(click on the chart to see the value)</Text></View>
        </View>
    )
}
export default Graph