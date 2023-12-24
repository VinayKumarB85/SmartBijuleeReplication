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
import MenuBar from '../../Components/MenuBar/MenuBar';
import EnergyComponent from './Components/EnergyComponent';

const EnergyTips = ({ navigation }) => {
    const globalVariableEnergyTips = useSelector(state => state.auth.user.data);
    console.log('globalVariableEnergyTips', globalVariableEnergyTips);
    const userSelector = useSelector(state => state.auth.userVerify);
    console.log(userSelector);
    const [energyTipsData,setEnergyTipsData] = useState([])
    // const [loginId,setLoginId] = useState('');
    // const [langId,setLangId] = useState('');

    const darkmode=useSelector((state)=>state.system.darkMode);
    console.log('darkmodeeeee',darkmode);
    
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
                    darkmode?styles.bglightblack:styles.bgLightWhite,
                ]}>
                <MenuBar />
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

             
                    <View style={[marginPosition(0,0,0,0),{width:widthValue(1)}]}>
                    <EnergyComponent />
                    </View>
                   

                    <View
                        style={[{ width: widthValue(1.1) }, marginPosition(10, 30, 0, 20),darkmode ? styles.bglightblack:styles.bgWhite]}>
                        <Text style={[darkmode?styles.fontwhite:styles.black, marginPosition(10, 0, 20, 0), fontSize(18)]}>
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
