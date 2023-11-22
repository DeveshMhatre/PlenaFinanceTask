import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import Colors from '../../helpers/Colors';
import { SCREEN_WIDTH } from '../../helpers/Screen';

const Pagination = ({
  data,
  scrollX,
}: {
  data: string[] | null | undefined;
  scrollX: Animated.Value;
}) => {
  return (
    <View style={styles.container}>
      {data?.map((_, idx) => {
        const inputRange = [
          (idx - 1) * SCREEN_WIDTH,
          idx * SCREEN_WIDTH,
          (idx + 1) * SCREEN_WIDTH,
        ];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#E4E4E4', Colors.yellow.darker, '#E4E4E4'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { backgroundColor }]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 25,
    bottom: 25,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  dot: {
    width: 17,
    height: 4,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#E4E4E4',
  },
  dotActive: {
    backgroundColor: Colors.yellow.darker,
  },
});
