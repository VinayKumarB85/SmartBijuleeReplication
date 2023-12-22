import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React,{useEffect,useState} from 'react';
import EnergyTipsComponent from '../../Components/EnergyTipsComponent/EnergyTipsComponent';
import DrawerScreenWrapper from '../Drawer Nav/Drawers/DrawerScreenWrapper';
import {
    styles,
    flex,
    marginPosition,
    paddingPosition,
    fontSize,
    widthValue,
    heightValue,
    padding,
    radius
} from '../../Utils/Styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header2 from '../../Components/Header/Header2';
import LottieView from 'lottie-react-native';
import { useDispatch ,useSelector} from 'react-redux';
import { energyTipsApi } from '../../api/userApi/energyTipsApi';

const EnergyTips = ({ navigation }) => {
    const globalVariableEnergyTips = useSelector(state => state.auth.user.data);
    console.log('globalVariableEnergyTips', globalVariableEnergyTips);
    const userSelector = useSelector(state => state.auth.userVerify);
    console.log(userSelector);
    const [energyTipsData,setEnergyTipsData] = useState([])
    // const [loginId,setLoginId] = useState('');
    // const [langId,setLangId] = useState('');

    
    const openDrawer = () => {
        navigation.toggleDrawer();
    };

    const dispatch = useDispatch();

    const energyTips = async ()=>{
        try{
            
        const energyTipsResp =  await dispatch(energyTipsApi(
            {
                "loginID":globalVariableEnergyTips.CANumber,
                "langID":globalVariableEnergyTips.LangID,
              }
        ))
        console.log('EnergyTips',energyTipsResp)
        console.log('loginID,langId',energyTipsResp.meta.arg.loginID, energyTipsResp.meta.arg.langID)
        setEnergyTipsData(energyTipsResp.payload.data.tips)
        console.log('EnergyTipsResp',energyTipsData)

            }catch(error){
                console.error('EnergyTipsFetch',error)
            }
    }
    useEffect(()=>{
        energyTips()
    },[])
    
    return (
        <DrawerScreenWrapper>
            <SafeAreaView
                style={[
                    flex(1),
                    { width: widthValue(1) },
                    styles.bglightblack,
                ]}>
                <View style={[marginPosition(20, 0, 0, 30)]}>
                    <TouchableOpacity onPress={openDrawer}>
                        <FontAwesome5
                            name={'bars'}
                            style={[styles.fontwhite, fontSize(24)]}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={[marginPosition(10, 20, 0, 20)]}>
                        <Header2
                            title1={'Energy'}
                            title2={' Savings Tips'}
                            Desc={
                                'Simple methods can help you save a significant amount of energy'
                            }
                        />
                    </View>

                    <View style={[styles.allCenter]}>
                    <View
                        style={[
                            { width: widthValue(1.6), height: widthValue(1.6) },
                            marginPosition(30, 30, 0, 20),radius(20),
                            // styles.allCenter,
                            padding(0,20,30),
                            styles.bgbarback
                        ]}>
                            <Text style={[styles.green,fontSize(26),styles.textLeft]}>Tip 1</Text>
                            <View style={[styles.allCenter]}>
                         <LottieView  style={[{width:widthValue(3.5),height:widthValue(2.5)},styles.allCenter]} source={require('../../Bulb.json')} autoPlay loop /></View>
                         <Text style={[styles.fontwhite,fontSize(16),styles.textCenter]}>Extra Tips</Text>
                    </View>
                    </View>

                    <View
                        style={[{ width: widthValue(1.1) }, marginPosition(10, 30, 0, 20)]}>
                        <Text style={[styles.fontwhite, marginPosition(10, 0, 20, 0), fontSize(18)]}>
                            Saving <Text style={[styles.green]}>Guidelines</Text>
                        </Text>

                        
                        {energyTipsData.map(({ id, title, description }) => (
    <EnergyTipsComponent key={id} tipName={title} tipDesc={description} />
  ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </DrawerScreenWrapper>
    );
};

export default EnergyTips;
