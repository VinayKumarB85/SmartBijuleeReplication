import ChangeLanguage from "../../Screens/SettingsPage/Screens/ChangeLanguage/ChangeLanguage"
import ColorMode from "../../Screens/SettingsPage/Screens/ColorMode/ColorMode"
import FeedBack from "../../Screens/SettingsPage/Screens/FeedBack/FeedBack"
import ManageAccount from "../../Screens/SettingsPage/Screens/ManageAccount/ManageAccount"
import PersonalInfo from "../../Screens/SettingsPage/Screens/PersonalInfo/PersonalInfo"
import RateOurApp from "../../Screens/SettingsPage/Screens/RateOurApp/RateOurApp"
import Terms from "../../Screens/SettingsPage/Screens/Terms/Terms"
import UserManagement from "../../Screens/SettingsPage/Screens/UserManagement/UserManagement"
import ChangePassword from "../../Screens/SettingsPage/Screens/ChangePassword/ChangePassword"
 
 export const SettingsCardData = {
  perosnalInfoData:[
    { name1:'Profile' ,name2:'Information',details:'Name,Email',icon:'user','screenName':'PersonalInfo','screen':PersonalInfo},
    { name1:'Manage' ,name2:'Multiple Accounts',details:'Switch Accounts',icon:'user-plus','screenName':'ManageAccount','screen':ManageAccount},
    { name1:'Change' ,name2:'Password',details:'Change your current password',icon:'lock','screenName':'ChangePassword','screen':ChangePassword},
],
    appSettingsData:[
        { name1:'Color' ,name2:'Mode',details:'To change the app view to lioght/dark',icon:'sun','screenName':'ColorMode','screen':ColorMode,},
        { name1:'Change' ,name2:'Language',details:'To change language ',icon:'language', 'screenName':'ChangeLanguage','screen':ChangeLanguage},
        { name1:'User' ,name2:'Management',details:'To add family members',icon:'user-plus','screenName':'UserManagement','screen':UserManagement},
    ],
    generalSettingsData:[
        { name1:'Rate Our' ,name2:'App',details:'Rate and Review the application',icon:'heart','screenName':'RateOurApp','screen':RateOurApp,},
        { name1:'Send' ,name2:'Feedback',details:'Share your thought to APDCL',icon:'envelope','screenName':'FeedBack','screen':FeedBack},
        { name1:'Terms and ' ,name2:'Condition',details:'Read our privacy policies & T/C',icon:'eye-slash','screenName':'Terms','screen':Terms},
    ],
 }