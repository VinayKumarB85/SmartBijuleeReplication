import { View, Text } from 'react-native'
import React from 'react'
import GraphButtons from './GraphButtons'
import { flex, fontSize, heightValue, radius, styles, widthValue } from '../../Utils/Styles'

const ButtonsBar = () => {
    return (
        <View style={[styles.row, styles.spaceAroundVertical,]}>
            <GraphButtons btnText={'Today'} />
            <GraphButtons btnText={'Week'} />
            <GraphButtons btnText={'Month'} />
        </View>
    )
}
export default ButtonsBar