import DashBoard from "../Screens/DashBoard/DashBoard"
import Comparison from "../Screens/Consumption/Comparison/Comparison"
import History from "../Screens/Consumption/History/History"
import Billing from "../Screens/Billing/Billing"
import MDI from "../Screens/MDI/MDI"
import Power from "../Screens/Power/Power"
import EventAnalysis from "../Screens/EventAnalysis/EventAnalysis"
import EnergyTips from "../Screens/EnergyTips/EnergyTips"
import FAQ from "../Screens/FAQ/FAQ"
import Notification from "../Screens/Notification/Notification"
import SettingsPage from "../Screens/SettingsPage/SettingsPage"
import CustomerEngagement from "../Screens/CustomerEngagement/CustomerEngagement"
import Rating from "../Screens/Rating/Rating"
import Feedback from "../Screens/Feedback/Feedback"
import UsefulLinks from "../Screens/Links/UsefulLinks"
import Logout from "../Screens/LogOut/Logout"

const drawerItems = [
    {
        "name": 'DashBoard',
        'label': 'Dashboard',
        "component": DashBoard,
        "icon": 'home',
        'children':null
    },

    { 'name': 'ConsumptionLog',
        'label':'Consumption Log',
        "icon": 'bar-chart',
        'component':'',
        'children':[
            {
                "name": 'Comparison',
                'label': 'Comparison',
                 'component':Comparison,
                'icon': 'percent'
            },
            {
                "name": 'History',
                'label':'History',
                'component':History,
                'icon': 'clock'
            },
        ]
},

    {
        "name": 'Billing',
        'label': 'Billing',
        'component': Billing,
        "icon": 'credit-card',
        'children':null
    },
    {
        "name": 'MDI',
        'label': 'MDI',
        'component': MDI,
        "icon": 'alert-octagon',
        'children':null
    },
    {
        "name": 'Power',
        'label': 'Power Quality',
        'component': Power,
        "icon": 'check-square',
        'children':null
    },
    {
        "name": 'EventAnalysis',
        'label': 'Event Analysis',
        'component':'',
        "icon": 'calendar',
        'children':null
    },
    {
        "name": 'EnergyTips',
        'label': 'Energy Tips',
        'component': EnergyTips,
        "icon": 'zap',
        'children':null
    },
    {
        "name": 'FAQ',
        'label': 'FAQ',
        'component': FAQ,
        "icon": 'file',
        'children':null
    },
    {
        "name": 'Notification',
        'label': 'Notification',
        'component': Notification,
        "icon": 'bell',
        'children':null
    },
    {
        "name": 'SettingsPage',
        'label': 'Settings',
        'component': SettingsPage,
        "icon": 'settings',
        'children':null
    },
    {
        "name": 'Customer Engagement',
        'label':'Customer Engagement',
        'component': CustomerEngagement,
        'icon':'',
        'children':null
    },
    {
        "name": 'Rating',
        'label':'Rate Our App',
        'component': Rating,
        'icon':'',
        'children':null

    },
    {
        "name": 'Feedack',
        'label':'Send Feedback',
        'component': Feedback,
        'icon':'',
        'children':null
    },
    {
    "name": 'Contact Us',
    'label':'Contact Us',
    'component': '',
    'icon':'at-sign',
    'children':null
},
    {
        "name": 'UsefulLinks',
        'label':'Useful Links',
        'component': UsefulLinks,
        'icon':'grid',
        'children':null
    },
    {
        "name": 'LogOut',
        'label':'Log Out',
        'component':Logout,
        'icon':'log-out',
        'children':null
    },
]

export default drawerItems