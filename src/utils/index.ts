import { Dimensions, Platform } from 'react-native';

export const CONTROL_STRIP_HEIGHT = 70;

const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

export const tabBarHeight = () => {
  const majorVersion = parseInt(`${Platform.Version}`, 10);
  const isIos = Platform.OS === 'ios';
  const isIOS11 = majorVersion >= 11 && isIos;

  if (isIOS11 && !isLandscape()) {
    return 49 + CONTROL_STRIP_HEIGHT;
  }

  return 29 + CONTROL_STRIP_HEIGHT;
};

export const randomNumber = (max): number => {
  return Math.random() * max;
};

export const randomColor = (): string => {
  return `rgb(${[256, 256, 256].map(randomNumber)})`;
};
