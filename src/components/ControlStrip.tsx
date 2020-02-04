import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const ControlStrip: React.FC = () => {

  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: 5,
          backgroundColor: '#0000000F'
        }}
      >
        <FontAwesome
          name="podcast"
          size={30}
          style={{
            left: 1,
            color: '#999999'
          }}
        />
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          flex: 1,
          fontSize: 20,
          fontWeight: '400',
          color: '#666666'
        }}
      >
        Not Playing
      </Text>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <FontAwesome
          name="play"
          size={30}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <FontAwesome
          name="repeat"
          size={30}
          style={{
            color: '#999999'
          }}
        />
      </View>
    </View>
  );
};
