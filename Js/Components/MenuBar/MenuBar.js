import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, screenHeight, styles, widthValue, paddingPosition } from '../../Utils/Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const MenuBar = ({}) => {

    const darkmode=useSelector((state)=>state.system.darkMode);
console.log('darkmodeeeee',darkmode);

const navigation = useNavigation();
    const openDrawer = () => {
        navigation.toggleDrawer();
    }
  return (
    <View>
      <View style={[marginPosition(20, 0, 0, 25)]}>
                    <TouchableOpacity
                        onPress={openDrawer}
                    >
                        <FontAwesome5
                            name={'bars'}
                            style={[darkmode? styles.fontwhite:styles.black, fontSize(24),]}
                        />
                    </TouchableOpacity>
                </View>
    </View>
  )
}

export default MenuBar