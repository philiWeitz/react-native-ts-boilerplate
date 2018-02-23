
import { Animated, Easing, Dimensions } from 'react-native';


const defaultTransition = (index, position) => {
  // const inputRange = [index - 1, index, index + 1];

  /* const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  }); */

  // used to expand the screen
  /* const scale = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  }); */

  const { width } = Dimensions.get('window');

  // used to translate the screen in X or Y direction
  const translateScreen = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-width, 0, width],
  });

  return {
    // opacity,
    transform: [
      // { scaleX: scale },
      // { scaleY: scale },
      { translateX: translateScreen },
      // { translateY: translateScreen },
    ],
  };
};


const defaultTransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 500,
      timing: Animated.timing,
      easing: Easing.linear,
    },
    screenInterpolator: ({ position, scene }) => {
      return defaultTransition(scene.index, position);
    },
  };
};

export default defaultTransitionConfiguration;
