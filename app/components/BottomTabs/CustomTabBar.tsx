import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { interpolatePath } from 'react-native-redash';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import TabItem from './TabItem';
import AnimatedCircle from './AnimatedCircle';

import usePath from '../../hooks/usePath';
import { SCREEN_WIDTH } from '../../helpers/Screen';
import { getPathXCenter } from '../../helpers/Path';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const CustomBottomTab: FC<
  { showTabBar: boolean } & BottomTabBarProps
> = ({ showTabBar, state, descriptors, navigation }) => {
  const { containerPath, curvedPaths, tHeight } = usePath();
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);
  const handleMoveCircle = (currentPath: string) => {
    circleXCoordinate.value = getPathXCenter(currentPath);
  };

  const selectIcon = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Categories':
        return 'categories';
      case 'Favourite':
        return 'heart';
      case 'More':
        return 'more';
      default:
        return 'Home';
    }
  };

  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({ length: curvedPaths.length }, (_, index) => index + 1),
      curvedPaths
    );
    runOnJS(handleMoveCircle)(currentPath);
    return {
      d: `${containerPath} ${currentPath}`,
    };
  });

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab);
    progress.value = withTiming(index);
  };

  return (
    <View
      style={[
        styles.tabBarContainer,
        { display: showTabBar ? 'flex' : 'none' },
      ]}
    >
      <Svg width={SCREEN_WIDTH} height={tHeight}>
        <AnimatedPath fill={'#F8F7FB'} animatedProps={animatedProps} />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinate} />
      <View
        style={[
          styles.tabItemsContainer,
          {
            height: tHeight,
          },
        ]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label as string}
              icon={selectIcon(route.name)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() =>
                showTabBar && handleTabPress(index + 1, route.name)
              }
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  tabItemsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
  },
});

export default CustomBottomTab;
