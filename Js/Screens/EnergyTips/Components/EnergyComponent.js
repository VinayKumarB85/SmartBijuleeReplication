import React from 'react';
import Carousel from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';
import { View, Text } from 'react-native';
import { styles, marginPosition, padding, radius, widthValue, fontSize, paddingPosition } from '../../../Utils/Styles';

const EnergyComponent = () => {
  const Sliderdata = [
    { title: 'Tip 1', name: 'Extra Tips' },
    { title: 'Tip 2', name: 'Ventilation' },
    { title: 'Tip 3', name: 'Microwave Ovens and Electric Kettles' },
    { title: 'Tip 4', name: 'Computers' },
    { title: 'Tip 5', name: 'Refrigerators' },
    { title: 'Tip 6', name: 'Water Heater' },
    { title: 'Tip 7', name: 'Lighting' },
    { title: 'Tip 8', name: 'Air Conditioner' },
  ];

  const renderCard = ({ item, index }) => (
    <View style={[{width:widthValue(1)}]}>
    <View
      style={[
        {
          width: widthValue(1.6),
          height: widthValue(1.6),
          elevation: index + 1, // Increase elevation for stacked shadow effect
        },
        marginPosition(30, 50, 0, 20),
        radius(30),
        paddingPosition(20, 30, 30,30),
        styles.bgbarback,
      ]}
    >
      <Text style={[styles.green, fontSize(26), styles.textLeft]}>{item.title}</Text>
      <View style={styles.allCenter}>
        <LottieView
          source={require('../../../../assets/light.json')}
          autoPlay
          loop
          style={{ width: 150, height: 150, }} // Adjust the dimensions as needed
        />
        <Text style={[styles.fontwhite, fontSize(16), styles.textCenter]}>{item.name}</Text>
      </View>
    </View>
    </View>
  );

  return (
    <Carousel
      data={Sliderdata}
      renderItem={renderCard}
      sliderWidth={300}
      itemWidth={250}
      layout={'stack'}
      layoutCardOffset={12}
    />
  );
};

export default EnergyComponent;
