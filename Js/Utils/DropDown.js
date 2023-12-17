import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react'

// Your Comparison and History components
const Comparison = () => <Text>Comparison Screen</Text>;
const History = () => <Text>History Screen</Text>;

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ConsumptionStack = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name='Comparison' component={Comparison} />
        <Stack.Screen name='History' component={History} />
    </Stack.Navigator>
);

export const DropDown = ({ navigation, ...props }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    const toggleSubItems = () => {
        setShowSubItems(!showSubItems);
    };

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label='Consumption'
                onPress={toggleSubItems}
            />
            {showSubItems && (
                <>
                    <DrawerItem label='Comparison' onPress={() => navigation.navigate('Comparison')} />
                    <DrawerItem label='History' onPress={() => navigation.navigate('History')} />
                </>
            )}
        </DrawerContentScrollView>
    );
};

