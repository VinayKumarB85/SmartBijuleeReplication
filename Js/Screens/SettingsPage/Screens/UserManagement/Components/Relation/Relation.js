import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, styles, widthValue, radius } from '../../../../../../Utils/Styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Dropdown = ({dataFromRelation}) => {
  const [relations, setRelations] = useState([
    { name: 'Master', id: 1, color: 'white' },
    { name: 'Family', id: 2, color: 'white' },
    { name: 'Tenant', id: 3, color: 'white' },
  ]);

  const [selectedValue, setSelectedValue] = useState('Select');
  const [showList, setShowList] = useState(false);

  const handleRelations = (selectedName) => {
    const updatedRelations = relations.map(item => {
      return { ...item, color: item.name === selectedName ? 'green' : 'white' };
    });

    setRelations(updatedRelations);
    setSelectedValue(selectedName);
    setShowList(false);
    dataFromRelation(selectedName)
  };
  return (
    <View style={[{ height: heightValue(8) }, styles.column,]}>
      <Text style={[styles.gr, marginPosition(0, 0, 20, 0)]}>Relation</Text>
      <TouchableOpacity onPress={() => setShowList(!showList)}>
        <View style={[styles.row, marginPosition(0, 0, 20, 20), styles.centerHorizontal]}>
          <Text style={[styles.white, { width: widthValue(1.6) }]}>{selectedValue}</Text>
          <FontAwesome5Icon name={showList ? 'chevron-up' : 'chevron-down'} style={[styles.white, fontSize(12)]} />
        </View>
      </TouchableOpacity>
      {showList ? (
        <View style={[styles.positionAbsolute, { top: -heightValue(8) }, radius(0, 40, 0, 0, 60)]}>
          {relations.map((item, index) => (
            <View style={[{ width: widthValue(1.4) }]}>
              <TouchableOpacity key={index} onPress={() => handleRelations(item.name)}>
                <View style={[styles.bgbarback, borderWidth(0, 0, 0, 0.8, 0), styles.borderWhite,]}>
                  <View style={[styles.row, styles.centerHorizontal, styles.spaceBetweenVertical]}>
                    <Text style={{ color: item.color, padding: 10 }}>{item.name}</Text>
                    {item.color === 'green' && <FontAwesome5Icon name="check" style={{ color: 'green', marginRight: 10 }} />}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default Dropdown;
