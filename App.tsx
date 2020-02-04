import React from 'react';
import { ScrollView, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs';
import { BlurView } from 'expo-blur';
import { TabBarIcon } from './src/components';
import { Home } from './src/screens';


const BlankScreen: React.FC = () => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1
    }}
  >

  </ScrollView>
);

const MainTabBar = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="home" color={tintColor}/>
      )
    }
  },
  Profile: {
    screen: BlankScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="user" color={tintColor}/>
      )
    }
  },
  Settings: {
    screen: BlankScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon name="gear" color={tintColor}/>
      )
    }
  },
}, {
  tabBarOptions: {
    inactiveBackgroundColor: 'transparent',
    activeBackgroundColor: 'transparent',
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#999999',
    style: {
      // borderTopWidth: 0,
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
      tint="dark"
      intensity={100}
    >
      <View style={{ height: 0 }}/>
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
