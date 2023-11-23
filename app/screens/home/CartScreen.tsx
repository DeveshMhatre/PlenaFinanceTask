import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import GoBackButton from '../../components/Shared/GoBackButton';
import CartItemComponent from '../../components/CartComponents/CartItemComponent';
import Button from '../../components/Shared/Button';
import CheckoutCard from '../../components/CartComponents/CheckoutCard';

import { RootState } from '../../state/store';
import { emptyCart } from '../../state/cart/cartSlice';

type CartScreenProps = NativeStackScreenProps<HomeStackParamList, 'Cart'>;

export default function CartScreen({ navigation }: CartScreenProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.value);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GoBackButton handleOnPress={() => navigation.goBack()} />
        <Text style={styles.heading}>Shopping Cart ({cartItems.length})</Text>
      </View>

      {cartItems.length < 1 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyHeading}>No items in cart</Text>
          <Button
            type="Primary"
            label="Add Items to Cart"
            handleOnPress={() => navigation.navigate('ProductsList')}
          />
        </View>
      ) : (
        <ScrollView
          style={{ marginTop: 40 }}
          contentContainerStyle={{
            paddingBottom: 150,
            paddingHorizontal: 20,
          }}
        >
          {cartItems.map((cartItem) => (
            <CartItemComponent cartItem={cartItem} />
          ))}

          <Pressable
            style={{ alignSelf: 'flex-end' }}
            onPress={() => dispatch(emptyCart())}
          >
            <Text style={styles.clearCart}>Clear</Text>
          </Pressable>
        </ScrollView>
      )}
      {cartItems.length < 1 ? (
        <View />
      ) : (
        <CheckoutCard
          handleBtnPress={() => navigation.navigate('ProductsList')}
        />
      )}
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
    alignItems: 'center',
  },
  heading: {
    marginLeft: 24,
    fontFamily: Fonts.ManropeRegular,
    fontSize: 16,
    includeFontPadding: false,
    color: Colors.black.default,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  emptyHeading: {
    marginBottom: 10,
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 26,
    textAlign: 'center',
    includeFontPadding: false,
    color: Colors.black.default,
  },
  clearCart: {
    fontFamily: Fonts.ManropeMedium,
    fontSize: 12,
    letterSpacing: 1,
    includeFontPadding: false,
    color: Colors.blue.default,
  },
});
