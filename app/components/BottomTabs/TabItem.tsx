import React, { FC, useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Fonts from '../../helpers/Fonts';
import HomeIcon from '../Svg/HomeIcon';
import HeartIcon from '../Svg/HeartIcon';
import CategoryIcon from '../Svg/CategoryIcon';
import MoreIcon from '../Svg/MoreIcon';

import usePath from '../../hooks/usePath';
import { getPathXCenterByIndex } from '../../helpers/Path';
import { SCREEN_WIDTH } from '../../helpers/Screen';

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 24;
const LABEL_WIDTH = SCREEN_WIDTH / 4;

const TabItem: FC<TabProps> = ({
  label,
  index,
  icon,
  activeIndex,
  onTabPress,
}) => {
  const { curvedPaths } = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -7 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: iconPositionX - ICON_SIZE / 2 },
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 !== index ? 46 : 100;
    return {
      transform: [
        { translateY: withTiming(translateY) },
        { translateX: labelPosition - LABEL_WIDTH / 2 },
      ],
    };
  });
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
  }, [activeIndex]);

  return (
    <>
      <Animated.View style={[tabStyle]}>
        <Pressable
          testID={`tab${label}`}
          hitSlop={{ top: 30, bottom: 50, left: 50, right: 50 }}
          onPress={onTabPress}
        >
          {icon === 'home' && <HomeIcon isActive={activeIndex === 1} />}
          {icon === 'categories' && (
            <CategoryIcon isActive={activeIndex === 2} />
          )}
          {icon === 'heart' && <HeartIcon isActive={activeIndex === 3} />}
          {icon === 'more' && <MoreIcon isActive={activeIndex === 4} />}
        </Pressable>
      </Animated.View>

      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    includeFontPadding: false,
    fontFamily: Fonts.ManropeMedium,
    fontSize: 12,
    color: '#8891A5',
  },
});

export default TabItem;
