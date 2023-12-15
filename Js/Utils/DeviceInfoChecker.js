import { View, Text } from 'react-native'
import React from 'react'
import DeviceInfo from 'react-native-device-info'

const DeviceInfoChecker = () => {

    
    const getDevice = async ()=>{
        const id =  await DeviceInfo.getUniqueId();
        const version =  await DeviceInfo.getSystemVersion();
        const deviceOS =  await DeviceInfo.getSystemName();
        const make =  await DeviceInfo.getManufacturer();
        console.warn(id,version,deviceOS,make)

    }
    getDevice()
  return (
    <View>


      <Text>DeviceInfoChecker</Text>
    </View>
  )
}

export default DeviceInfoChecker