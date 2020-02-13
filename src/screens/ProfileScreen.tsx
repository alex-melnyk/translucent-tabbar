import React, { useMemo } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { randomColor, tabBarHeight } from '../utils';
import { styles } from './Styles';

export const ProfileScreen: React.FC = () => {
  const data = useMemo(() => [...new Array(20)].map(() => ({
    color: randomColor()
  })), []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.screenTitle}>
        Profile
      </Text>
      <FlatList
        contentContainerStyle={[styles.listContentContainer, {
          paddingBottom: tabBarHeight()
        }]}
        numColumns={2}
        keyExtractor={(v, i) => `item_${i}`}
        data={data}
        renderItem={({ item }) => (
          <View
            style={[styles.item, {
              backgroundColor: item.color
            }]}
          >
            <View style={styles.mockLineMd}/>
            <View style={styles.mockLineMd}/>
            <View style={styles.mockLineMd}/>
            <View style={styles.mockLineEmpty}/>
            <View style={styles.mockLineLg}/>
            <View style={styles.mockLineLg}/>
            <View style={styles.mockLineSm}/>
          </View>
        )}
      >
        {data}
      </FlatList>
    </SafeAreaView>
  );
};
