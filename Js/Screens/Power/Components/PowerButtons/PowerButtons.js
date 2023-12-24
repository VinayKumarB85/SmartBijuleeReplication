import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import {styles,fontSize,widthValue,radius,padding} from '../../../../Utils/Styles'
import { useSelector } from 'react-redux'


const PowerButtons = () => {
  
  const darkmode=useSelector((state)=>state.system.darkMode);
  console.log('darkmodeeeee',darkmode);
  return (
    <View style={[styles.row,styles.spaceBetweenVertical,{width:widthValue(1.12)}]}>
                        <TouchableOpacity style={[darkmode?styles.bgbarback:styles.bgWhite,styles.centerHorizontal,padding(0,10),{width:widthValue(3)},radius(0,0,15,15,0)]}>
                            <Text style={[fontSize(16),styles.green]}>Data Table</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bggreen,styles.centerHorizontal,padding(0,10),{width:widthValue(3)},radius(0,0,15,15,0)]}>
                            <Text style={[fontSize(16),styles.fontwhite]}>Graph</Text>
                        </TouchableOpacity>
    </View>
  )
}

export default PowerButtons