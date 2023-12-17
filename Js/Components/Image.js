import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { marginPosition } from '../Utils/Styles';

const Component1 = () => (
  <View>
    <Text>Component 1</Text>
  </View>
);

const Component2 = () => (
  <View>
    <Text>Component 2</Text>
  </View>
);

const Component3 = () => (
  <View>
    <Text>Component 3</Text>
  </View>
);

const Component4 = () => (
  <View>
    <Text>Component 4</Text>
  </View>
);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const renderComponent = () => {
    switch (currentIndex) {
      case 0:
        return <Component1 />;
      case 1:
        return <Component2 />;
      case 2:
        return <Component3 />;
      case 3:
        return <Component4 />;
      default:
        return null;
    }
  };

  return (
    <View style={[marginPosition(100)]}>
      {renderComponent()}
      <Button title="Back" onPress={handleBack} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default App;
