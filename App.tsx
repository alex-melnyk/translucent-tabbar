import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { ControlStrip, TabBarIcon } from './src/components';
import { HomeScreen, ProfileScreen, SettingsScreen } from './src/screens';

const MainTabBar = createBottomTabNavigator(/*{
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
}*/);

const App: React.FC = () => {
  const TabBar = (props) => (
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
      <ControlStrip/>
      <BottomTabBar {...props} />
    </BlurView>
  );

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <MainTabBar.Navigator
            tabBar={TabBar}
            tabBarOptions={{
              style: {
                borderTopColor: '#666666',
                backgroundColor: 'transparent'
              }
            }}
          >
            <MainTabBar.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <TabBarIcon name="home" color={color}/>
                )
              }}
            />
            <MainTabBar.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <TabBarIcon name="user" color={color}/>
                )
              }}
            />
            <MainTabBar.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                  <TabBarIcon name="gear" color={color}/>
                )
              }}
            />
          </MainTabBar.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
