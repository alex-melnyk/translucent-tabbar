import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { randomColor, tabBarHeight } from '../utils';
import { styles } from './Styles';


export const HomeScreen: React.FC = () => {
  const data = useMemo(() => [...new Array(10)].map(() => ({
    color: randomColor()
  })), []);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.screenTitle}>
        Home
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
              backgroundColor: item.color
            }]}
          >

            <View style={styles.mockLineSm}/>
            <View style={styles.mockLineSm}/>
            <View style={styles.mockLineSm}/>
            <View style={styles.mockLineEmpty}/>
            <View style={styles.mockLineLg}/>
            <View style={styles.mockLineLg}/>
            <View style={styles.mockLineLg}/>
          </View>
        )}
      >
        {data}
      </FlatList>
    </SafeAreaView>
  );
};
