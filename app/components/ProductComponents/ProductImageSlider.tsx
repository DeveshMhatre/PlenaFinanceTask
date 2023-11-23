import {
  Animated,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';

import { Product } from '../../screens/home/ProductsListScreen';
import { SCREEN_WIDTH } from '../../helpers/Screen';
import HeartButton from './HeartButton';
import Pagination from './Pagination';
import { useRef } from 'react';

export default function ProductImageSlider({ product }: { product: Product }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={product.images}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.productImage} />;
        }}
        style={styles.imageCarousel}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH}
        disableIntervalMomentum={true}
        bounces={false}
        onScroll={handleOnScroll}
        viewabilityConfig={viewabilityConfig}
      />

      <HeartButton productId={product.id} />
      <Pagination data={product.images} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageCarousel: {
    marginTop: 15,
    height: 250,
    flexGrow: 0,
  },
  productImage: {
    width: SCREEN_WIDTH,
    height: 250,
    objectFit: 'fill',
  },
});
