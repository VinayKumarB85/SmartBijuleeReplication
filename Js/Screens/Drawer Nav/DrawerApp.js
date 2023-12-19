import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  heightValue,
  widthValue,
  styles,
  fontSize,
  flex,
  marginPosition,
  padding,
  borderWidth,
  radius,
  paddingPosition,
} from '../../Utils/Styles';
import drawerItems from '../../Constants/DrawerItems';
import { useNavigation } from '@react-navigation/native';
import StackNavigator from '../StackNav/Stack';
import Comparison from '../Consumption/Comparison/Comparison';
import History from '../Consumption/History/History';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);



 const globalVariableDrawerbar = useSelector((state)=>state)
  console.log('globalVariableDrawerbar',globalVariableDrawerbar);

  const loginId = globalVariableDrawerbar.auth.user.data.CANumber;
  const name = globalVariableDrawerbar.auth.user.data.Name;
  console.log('CAnumber',loginId)
  console.log('Name',name)

  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };



  const renderSubMenu = (subMenu)=>{
    return selectedDropdown
    && subMenu &&
    subMenu.map((child,childIndex)=>(
    <>

      <DrawerItem
            key={childIndex}
            label={child.label}
            icon={() => (
              <FeatherIcon
                name={child.icon}
                style={[fontSize(18),{fontweight:'bold'}, styles.fontwhite, marginPosition(0, 0, 0, 20)]}
              />
            )}
            onPress={() => {
              navigation.navigate(child.name);
              setSelectedDropdown(null);
            }}
            style={{ borderTopWidth: 0, marginLeft: 30 }}
            labelStyle={{ color: 'white', fontSize: 13 }}
          />
    </>
    ))
  }
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={[flex(1), { backgroundColor: '#282f42',paddingBottom:heightValue(10)}]}>
            
              <View style={[,marginPosition(30,0,20), styles.centerHorizontal,]}>
                <Image
                  source={require('../../../assets/LoginLogo2.png')}
                  style={[{ width: widthValue(3), height: widthValue(3), resizeMode: 'contain', }]}
                />
                <Text style={[fontSize(17), styles.fontwhite, { marginTop: 20 }]}>{name}</Text>
                <Text style={[fontSize(15), styles.fontwhite]}>{`Consumer ID :${loginId}`}</Text>
              </View>
            <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} contentContainerStyle={[{paddingTop:0}]} >
              {drawerItems.map((menu, index) => (
                <View key={index}>
                  <DrawerItem
                    label={menu.label}
                    icon={() => (
                      <FeatherIcon
                        name={menu.icon}
                        style={[fontSize(18), styles.fontwhite, marginPosition(0, 0, 0, 5)]}
                      />
                    )}
                    onPress={() => {
                      if (menu.children) {
                        setSelectedDropdown(selectedDropdown === menu.name ? null : menu.name);
                      } else if (menu.name === 'Rating') {
                        const openStore = () => {
                          // For Android
                          Linking.openURL('market://details?id=com.SMARTBIJULEE.android').catch((err) => {
                            console.error('Error opening Play Store:', err);
                          });

                          // For iOS
                          Linking.openURL('https://apps.apple.com/app/your-app-id').catch((err) => {
                            console.error('Error opening App Store:', err);
                          });
                        };
                        openStore();
                      } else if (menu.name === 'LogOut') {
                        openModal();
                      } else {
                        console.log("menu.component",menu.component);
                        navigation.navigate( menu.component);
                      }
                    }}
                    style={{
                      borderTopColor: 'grey',
                      borderTopWidth: 1,
                      backgroundColor: selectedDropdown === menu.name ? '282f42' : 'transparent',
                      // backgroundColor:'green'
                    }}
                    labelStyle={{
                      color: 'white',
                      fontSize: 13,
                    }}
                  />
                  {renderSubMenu(menu.children)}
                </View>
              ))}
            </DrawerContentScrollView>
            {/* ----------logout modal------------ */}
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal} style={[{ alignItems: 'center', justifyContent: 'center' }]}>
              <SafeAreaView
                style={[styles.bgWhite, paddingPosition(20, 20, 40, 20), radius(0, 15, 0, 0, 15), { position: 'absolute', bottom: 0, width: widthValue(1) }]}
              >
                <View style={[{ gap: 20 }]}>
                  <Text style={[fontSize(18), styles.gr]}>Alert</Text>
                  <Text style={[fontSize(13), styles.gr]}>Are you sure you want to logout ?</Text>
                </View>
                <View style={[styles.row, styles.centerHorizontal, styles.spaceBetweenVertical, marginPosition(20, 0, 0, 0)]}>
                  <TouchableOpacity onPress={closeModal} style={[padding(0, 18, 70), borderWidth(1), radius(10), styles.allCenter]}>
                    <Text style={styles.black}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Login');
                      closeModal();
                    }}
                    style={[styles.bglightgreen, padding(0, 20, 70), radius(10), styles.allCenter]}
                  >
                    <Text style={styles.fontwhite}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Modal>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        headerShown: false,
        drawerStatusBarAnimation: 'slide',
        swipeEnabled: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: widthValue(1.6),
          backgroundColor: '#282f42',
        },
        drawerContentStyle: {
          backgroundColor: '#282f42',
          color: 'white',
        },
        sceneContainerStyle: {
          backgroundColor: '#282f42',
        },
        drawerType: 'slide',
        drawerActiveBackgroundColor: '#282f42',
        drawerActiveTintColor: '#282f42',
        drawerInactiveTintColor: 'transparent',
        overlayColor: 'transparent',
      }}
    >
      {drawerItems.map((item, index) => (
        <Drawer.Screen key={index} name={item.name} component={item.component} />
        
      ))}
      <Drawer.Screen name="Comparison" component={Comparison}  
      options={{
drawerStyle:{
  borderTopWidth:0.8,
  borderColor:'grey'
}
      }
        
      }/>
      <Drawer.Screen  name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default DrawerApp;
