import { View, Text, TouchableOpacity, TouchableWithoutFeedbackComponent } from 'react-native';
import React, { useState } from 'react';
import {
    fontSize,
    styles,
    padding,
    widthValue,
    marginPosition,
    radius
} from '../../../Utils/Styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FaqDetailsButton = ({title1,answer }) => {

    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.bgbarback,
                    padding(0, 10, 20),
                    { width: widthValue(1.1) },
                    marginPosition(10, 20, 0, 20),
                    radius(0, 13, 0, 0, 13)
                ]}
                onPress={handleDetails}>
                <View style={[styles.row, styles.spaceBetweenVertical, styles.centerHorizontal,]}>
                    <Text style={[styles.fontwhite, fontSize(15),{width:widthValue(1.3)}]}>
                        {title1}
                    </Text>

                    <FontAwesome5 name={showDetails ? 'chevron-up' : 'chevron-down'} style={[styles.gr]} />
                </View>
            </TouchableOpacity >
            {showDetails && (
                <View
                    style={[
                        styles.bgbarback,
                        padding(0, 10, 20),
                        { width: widthValue(1.1) },
                        marginPosition(0, 20, 10, 20),
                        radius(0, 0, 15, 15, 0),
                    ]}>
                    <Text style={[styles.gr]}>{answer}</Text>
                </View>

            )}
        </View>
    );
};

export default FaqDetailsButton;




