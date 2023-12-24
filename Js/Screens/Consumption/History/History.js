import {  Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useNavigation } from 'react'
import { flex, fontSize, heightValue, lineHeight, paddingPosition, radius, screenHeight, styles, padding, widthValue, marginPosition } from '../../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import DrawerScreenWrapper from '../../Drawer Nav/Drawers/DrawerScreenWrapper'
import Header2 from '../../../Components/Header/Header2'
import HistoryMainGraph from '../../../Components/Graph/HIstoryMainGraph'

import GraphButtons from '../../../Components/Graph/GraphButtons'
import CalendarPage from './CalendarPage/CalendarPage'
import MenuBar from '../../../Components/MenuBar/MenuBar'
import { useSelector } from 'react-redux'




const History = () => {

    const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);
    const [calendarScreen,setCalendarScreen] = useState(false)
    const [currentPage,setCurrentPage] = useState(0)
    const [activeButton,setActiveButton] = useState(null)

    

    const gotoCalendarPage = ()=>{
        setCalendarScreen(true)
       setActiveButton('custom')
        
    }
    const handleGraphPage = (page)=>{
        setCurrentPage(page)
        setCalendarScreen(false)
        setActiveButton(page)
    }
    const onIndexChanged = (index) => {
        setCurrentPage(index)
        
    }
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), },darkmode? styles.bglightblack:styles.bgLightWhite]}>
                <MenuBar />
                <ScrollView  styule={[{height:heightValue(1)}]}>
                    <View style={[marginPosition(10, 20, 0, 15)]}>
                        <Header2
                            title2={'Historic Electricity Consumption'}
                            Desc={'Historic consumption details on your finger tips '} />
                    </View>
                    <View style={[styles.row,radius(12), styles.spaceEvenly,marginPosition(10, 20, 0, 15), { width: widthValue(1.1), },darkmode? styles.bgbarback:styles.bgbuttonsbar, ]}>
                    <GraphButtons btnText={'Custom'}
                        onPress={gotoCalendarPage}
                        btnStyle={[radius(12),
                        padding(0, 8, 24),
                        activeButton ==='custom'?styles.bggreen :''
                         
                        ]}
                        fontStyle={[fontSize(18), darkmode? styles.fontwhite:styles.black, activeButton === 'custom' ?styles.white:darkmode?styles.white:styles.black]}
                    />
                    <GraphButtons btnText={'Today'}
                        onPress={()=>handleGraphPage(0)}
                        btnStyle={[radius(12), padding(0, 8, 20),
                            activeButton === 0 ? styles.bggreen : ''
                        ]}
                        fontStyle={[fontSize(18),darkmode?styles.fontwhite:styles.black, activeButton === 0 ? styles.white:darkmode?styles.white:styles.black]}
                    /> 
                     <GraphButtons btnText={'Week'}
                        onPress={()=>handleGraphPage(1)}
                        btnStyle={[radius(12), padding(0, 8, 20),
                            activeButton === 1 ? styles.bggreen : '' ]}
                        fontStyle={[fontSize(18), darkmode? styles.fontwhite:styles.black, activeButton === 1 ?styles.white:darkmode?styles.white:styles.black]}
                    />
                    <GraphButtons btnText={'Month'}
                        onPress={()=>handleGraphPage(2)}
                        btnStyle={[radius(12), padding(0, 8, 24),
                            activeButton === 2 ? styles.bggreen : '' ]}
                        fontStyle={[fontSize(18), darkmode? styles.fontwhite:styles.black, activeButton === 2 ?styles.white:darkmode?styles.white:styles.black]}
                    />
                </View>
                {calendarScreen?  <CalendarPage /> :(
                    <View style={[{ width: widthValue(1) }, radius(18),
                    marginPosition(0, 20,30,0),
                    padding(0, 30, 20)
                    ]}>
                        <HistoryMainGraph  currentPage={currentPage} onIndexChanged={onIndexChanged}/>
                    </View>) 
                }
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    )
}
export default History

