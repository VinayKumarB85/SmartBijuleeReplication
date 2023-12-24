import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Header2 from '../../Components/Header/Header2'
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper'
import { flex, fontSize, heightValue, lineHeight, radius, screenHeight, styles, widthValue ,marginPosition} from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MenuBar from '../../Components/MenuBar/MenuBar'
import { useSelector } from 'react-redux'

const Billing = () => {

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    
    return (
        <DrawerScreenWrapper>
            <SafeAreaView style={[flex(1), { width: widthValue(1), },darkmode? styles.bglightblack:styles.bgLightWhite]}>
                <MenuBar />
                <ScrollView >
                    <View style={[{ marginLeft: widthValue(25), marginRight: widthValue(20), }]}>
                        <Header2
                            title1={'Postpaid'}
                            title2={' Balance'}
                            Desc={'Inspect your bills and pay online'} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    )
}

export default Billing