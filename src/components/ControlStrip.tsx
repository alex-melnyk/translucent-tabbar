import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CONTROL_STRIP_HEIGHT } from '../utils';

const ICON_SIZE = CONTROL_STRIP_HEIGHT - 20;

export const ControlStrip: React.FC = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        height: CONTROL_STRIP_HEIGHT,
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: ICON_SIZE,
          height: ICON_SIZE,
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
