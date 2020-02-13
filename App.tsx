import React from 'react';
import { ScrollView, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';
import { BlurView } from 'expo-blur';
import { ControlStrip, TabBarIcon } from './src/components';
import { HomeScreen, ProfileScreen, SettingsScreen } from './src/screens';

const MainTabBar = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="home" color={tintColor}/>
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="user" color={tintColor}/>
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="gear" color={tintColor}/>
      )
    }
  },
}, {
  tabBarOptions: {
    style: {
      borderTopColor: '#666666',
      backgroundColor: 'transparent'
    }
  },
  tabBarComponent: (props) => (
    <BlurView
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      tint="light"
      intensity={100}
    >
      <ControlStrip />
      <BottomTabBar {...props} />
    </BlurView>
  )
});

const App: React.FC = () => {
  const AppContainer = createAppContainer(MainTabBar);

  return (
    <View style={{ flex: 1 }}>
      <AppContainer/>
    </View>
  );
};

export default App;
