import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { tabBarHeight } from '../utils';


export const Home: React.FC = () => {
  const data = useMemo(() => new Array(10), []);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: 'always', bottom: 'never' }}
    >
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: tabBarHeight(),
        }}
        keyExtractor={(v, i) => `item_${i}`}
        data={data}
        renderItem={() => (
          <View
            style={{
              borderRadius: 5,
              margin: 10,
              height: 120,
              backgroundColor: '#353535'
            }}
          />
        )}
      >
        {data}
      </FlatList>
    </SafeAreaView>
  );
};
