import { View, Text } from 'react-native'
import React from 'react'
import { styles, flex, radius, widthValue } from '../../../Utils/Styles'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'

const DrawerScreenWrapper = ({ children }) => {

    const progress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(progress.value, [0, 1], [1, 0.7], 'clamp') },
        ],
        borderRadius: interpolate(progress.value, [0, 1], [1, 30], 'clamp'),
        overflow: 'hidden',
        marginLeft: interpolate(progress.value, [0, 1], [0, -30], 'clamp'),
    }));

    return (
        <Animated.View style={[flex(1), animatedStyle]}>
            {children}
        </Animated.View>
    )
}

export default DrawerScreenWrapper