import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import {
    styles,
    paddingPosition,
    padding,
    fontSize,
    marginPosition,
    radius,
    positionAbsolute,
    flex,
    heightwidth,
    widthValue,
    heightValue
} from '../../Utils/Styles'

const Input = ({heading}) => {

    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true);
    }
    return (
        <View>
            <View style={[isFocused ? styles.bglightgreyish : styles.bggreyish,
                           isFocused  ? radius(15) : radius(0), {
                                height: heightValue(10),
                            }, marginPosition(10, 24, 0, 24)]}>
                                <View style={[{
                                    height: heightValue(10),
                                },
                                marginPosition(10, 20, 10, 20)]}>
                                    <Text style={[
                                        isFocused ? fontSize(10) :
                                            fontSize(12),
                                        styles.lightGray]}>{heading}</Text>
                                    <TextInput
                                        style={[{
                                            // marginTop: heightValue(0), 
                                            width: widthValue(1.86),
                                            paddingHorizontal: 0, height: heightValue(20),
                                            borderBottomWidth: 1,
                                            paddingVertical: 0,
                                        }, fontSize(18), styles.fontwhite, styles.borderGreen]}
                                        onFocus={onPress}
                                        onBlur={() => setIsFocused(false)}
                                    ></TextInput>
                                </View>
                            </View>
        </View >
    )
}

export default Input


// import { DrawerItem } from "@react-navigation/drawer";
// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import FIcons from 'react-native-vector-icons/Feather';
// import { useSelector } from "react-redux";
// import { styles } from "../../styles";


// export const DrawerList = ({ props }) => {

//     const {navigation} = props
//     const { menu } = useSelector(state => state)
//     const [selected, setSelected] = useState("")

//     const renderSubmenu = (submenu, pname) => {
//         return selected === pname && (
//             submenu?.map(m =>
//                 <>
//                     <DrawerItem
//                         label={m.sname}
//                         key={m.sname}
//                         labelStyle={[styles.drawerLabel]}
//                         style={styles.drawerSubItem}
//                         onPress={() =>  navigation.navigate(m.url)}
//                         icon={() => < FIcons name={m.icon} color={'#fff'} size={20} />}
//                     />
//                 </>
//             )
//         )
//     }

//     return (
//         menu.map(m =>
//             <>
//                 <DrawerItem
//                     label={m.pname}
//                     key={m.pname}
//                     labelStyle={[styles.drawerLabel]}
//                     style={[styles.drawerItem,]}
//                     onPress={() => m.smenu ? setSelected(selected === m.pname ? "" : m.pname) : navigation.navigate(m.url)}
//                     icon={() => < FIcons name={m.icon} color={'#fff'} size={20} />}
//                 />
//                 {selected === m.pname ? renderSubmenu(m.smenu, m.pname) : null}
//             </>
//         )
//     )
// }






// // ... (other import statements)

// const DrawerApp = () => {
//     const [modalVisible, setModalVisible] = useState(false);
//     const [selectedDropdown, setSelectedDropdown] = useState(null);
  
//     const navigation = useNavigation();
//     const openModal = () => {
//       setModalVisible(true);
//     };
//     const closeModal = () => {
//       setModalVisible(false);
//     };
  
//     const renderSubmenu = (submenu) => {
//       return selectedDropdown &&
//         submenu &&
//         submenu.map((child, childIndex) => (
//           <DrawerItem
//             key={childIndex}
//             label={child.label}
//             icon={() => (
//               <FontAwesome5
//                 name={child.icon}
//                 style={[fontSize(16), styles.fontwhite, marginPosition(0, 0, 0, 20)]}
//               />
//             )}
//             onPress={() => {
//               setSelectedDropdown(null);
//               navigation.navigate(child.name);
//             }}
//             style={{ borderTopWidth: 0, marginLeft: 30 }}
//             labelStyle={{ color: 'white', fontSize: 13 }}
//           />
//         ));
//     };
  
//     return (
//       <Drawer.Navigator
//         drawerContent={(props) => {
//           return (
//             <SafeAreaView style={[flex(1), { backgroundColor: '#282f42' }]}>
//               {/* ... (other UI elements) */}
//               <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} style={[{ marginTop: 0, marginBottom: 50 }]}>
//                 {drawerItems.map((menu, index) => (
//                   <View key={index}>
//                     <DrawerItem
//                       label={menu.label}
//                       icon={() => (
//                         <FontAwesome5
//                           name={menu.icon}
//                           style={[fontSize(16), styles.fontwhite, marginPosition(0, 0, 0, 20)]}
//                         />
//                       )}
//                       onPress={() => {
//                         if (menu.children) {
//                           setSelectedDropdown(selectedDropdown === menu.name ? null : menu.name);
//                         } else if (menu.name === 'Rating') {
//                           const openStore = () => {
//                             // For Android
//                             Linking.openURL('market://details?id=com.SMARTBIJULEE.android').catch((err) => {
//                               console.error('Error opening Play Store:', err);
//                             });
  
//                             // For iOS
//                             Linking.openURL('https://apps.apple.com/app/your-app-id').catch((err) => {
//                               console.error('Error opening App Store:', err);
//                             });
//                           };
//                           openStore();
//                         } else if (menu.name === 'LogOut') {
//                           openModal();
//                         } else {
//                           navigation.navigate(menu.component);
//                         }
//                       }}
//                       style={{
//                         borderTopColor: 'grey',
//                         borderTopWidth: 1,
//                         backgroundColor: selectedDropdown === menu.name ? '#333f52' : 'transparent',
//                       }}
//                       labelStyle={{
//                         color: 'white',
//                         fontSize: 13,
//                       }}
//                     />
//                     {renderSubmenu(menu.children)}
//                   </View>
//                 ))}
//               </DrawerContentScrollView>
//               {/* ... (other UI elements) */}
//             </SafeAreaView>
//           );
//         }}
//         // ... (other options)
//       >
//         {drawerItems.map((item, index) => (
//           <Drawer.Screen key={index} name={item.name} component={item.component} />
//         ))}
//       </Drawer.Navigator>
//     );
//   };
  
//   export default DrawerApp;
  