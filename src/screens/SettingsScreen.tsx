import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { randomColor, tabBarHeight } from '../utils';
import { styles } from './Styles';


export const SettingsScreen: React.FC = () => {
  const data = useMemo(() => [...new Array(20)].map(() => ({
    color: randomColor()
  })), []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', bottom: 'never' }}
    >
      <Text style={styles.screenTitle}>
        Settings
      </Text>
      <FlatList
        contentContainerStyle={[styles.listContentContainer, {
          paddingBottom: tabBarHeight()
        }]}
        keyExtractor={(v, i) => `item_${i}`}
        data={data}
        renderItem={({ item }) => (
          <View
            style={[styles.item, {
              height: 30,
              backgroundColor: item.color
            }]}
          />
        )}
      >
        {data}
      </FlatList>
    </SafeAreaView>
  );
};
