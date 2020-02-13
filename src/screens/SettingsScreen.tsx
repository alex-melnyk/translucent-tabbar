import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { randomColor, tabBarHeight } from '../utils';
import { styles } from './Styles';

export const SettingsScreen: React.FC = () => {
  const data = useMemo(() => [...new Array(20)].map(() => ({
    color: randomColor()
  })), []);

  return (
    <SafeAreaView
      style={styles.container}
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
