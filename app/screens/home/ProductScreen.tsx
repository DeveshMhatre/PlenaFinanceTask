import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import CartButton from '../../components/Shared/CartButton';
import GoBackButton from '../../components/Shared/GoBackButton';
import StarIcon from '../../components/Svg/StarIcon';
import ProductImageSlider from '../../components/ProductComponents/ProductImageSlider';
import Button from '../../components/Shared/Button';

import { RootState } from '../../state/store';
import { CartItem, addItem, removeItem } from '../../state/cart/cartSlice';

type ProductScreenProps = NativeStackScreenProps<HomeStackParamList, 'Product'>;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
  const { product } = route.params;

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.value);

  const handleOnPress = (product: CartItem) => {
    if (cartItems.some((item) => item.id === product.id)) {
      dispatch(removeItem(product.id));
    } else {
      dispatch(addItem(product));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBackButton handleOnPress={() => navigation.goBack()} />
        <CartButton
          openCart={() => navigation.navigate('Cart')}
          inverse={true}
        />
      </View>

      <ScrollView
        style={{
          marginTop: 20,
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        <Text style={styles.productTitle}>{product.title}</Text>

        <View style={styles.ratingsContainer}>
          <StarRatingDisplay
            rating={product.rating}
            color={Colors.yellow.darker}
            starSize={30}
            StarIconComponent={(props) => <StarIcon {...props} />}
          />
          <Text style={styles.reviews}>110 Reviews</Text>
        </View>

        <ProductImageSlider product={product} />

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>

          {product?.discountPercentage && (
            <View style={styles.discountContainer}>
              <Text style={styles.discount}>
                $
                {((product.price * product.discountPercentage) / 100).toFixed(
                  2
                )}{' '}
                off
              </Text>
            </View>
          )}
        </View>

        <View style={styles.btnContainer}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Button
              type="Outline"
              label={
                cartItems.some((item) => item.id === product.id)
                  ? 'Remove From Cart'
                  : 'Add To Cart'
              }
              handleOnPress={() =>
                handleOnPress({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  stock: product.stock,
                  quantity: 1,
                  thumbnail: product.thumbnail,
                })
              }
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Button
              type="Primary"
              handleOnPress={() => navigation.navigate('Cart')}
              label="Buy Now"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerHeading}>Details</Text>
          <Text style={styles.footerText}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    marginHorizontal: 20,
    fontFamily: Fonts.ManropeBold,
    fontSize: 50,
    includeFontPadding: false,
    color: Colors.black.default,
  },
  ratingsContainer: {
    marginHorizontal: 20,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reviews: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 14,
    includeFontPadding: false,
    color: '#A1A1AB',
  },
  priceContainer: {
    marginHorizontal: 20,
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 16,
    color: Colors.blue.default,
  },
  discountContainer: {
    marginLeft: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 25,
    backgroundColor: Colors.blue.default,
  },
  discount: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 12,
    includeFontPadding: false,
    textTransform: 'uppercase',
    color: Colors.black.one,
  },
  btnContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  footer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  footerHeading: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 16,
    color: '#1E222B',
  },
  footerText: {
    marginTop: 8,
    fontFamily: Fonts.ManropeRegular,
    fontSize: 16,
    color: '#8891A5',
  },
});
