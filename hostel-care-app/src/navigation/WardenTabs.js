import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import colors from '../utils/colors';

// Screens
import WardenHomeScreen from '../screens/warden/HomeScreen';
import AllComplaintsScreen from '../screens/warden/AllComplaints';
import WardenComplaintDetailScreen from '../screens/warden/ComplaintDetail';
import InsightsScreen from '../screens/warden/Insights';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WardenHome" component={WardenHomeScreen} />
    <Stack.Screen name="WardenComplaintDetail" component={WardenComplaintDetailScreen} />
  </Stack.Navigator>
);

const AllComplaintsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AllComplaintsTab" component={AllComplaintsScreen} />
    <Stack.Screen name="WardenComplaintDetail" component={WardenComplaintDetailScreen} />
  </Stack.Navigator>
);

const InsightsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="InsightsTab" component={InsightsScreen} />
    <Stack.Screen name="WardenComplaintDetail" component={WardenComplaintDetailScreen} />
  </Stack.Navigator>
);

const WardenTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>🏠</Text>,
          tabBarLabel: 'Dashboard',
        }}
      />

      <Tab.Screen
        name="AllComplaintsNav"
        component={AllComplaintsStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>☰</Text>,
          tabBarLabel: 'All Complaints',
        }}
      />

      <Tab.Screen
        name="InsightsNav"
        component={InsightsStack}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>📊</Text>,
          tabBarLabel: 'Analytics',
        }}
      />
    </Tab.Navigator>
  );
};

export default WardenTabs;