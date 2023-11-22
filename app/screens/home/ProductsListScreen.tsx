import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import CartIcon from '../../components/Svg/CartIcon';
import SearchIcon from '../../components/Svg/SearchIcon';
import ArrowDownIcon from '../../components/Svg/ArrowDownIcon';
import PlaceholderImage from '../../components/Svg/PlaceholderImage';

type ProductsListScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'ProductsList'
>;

export default function ProductsListScreen({
  navigation,
}: ProductsListScreenProps) {
  const bannerData = [
    {
      discount: 50,
      orders: 3,
      colorValue: Colors.yellow.darker,
    },
    {
      discount: 75,
      orders: 6,
      colorValue: Colors.black.fourtyFive,
    },
    {
      discount: 90,
      orders: 9,
      colorValue: Colors.blue.default,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerGreet}>
          <Text style={styles.headerGreeting}>Hey, Rahul</Text>

          <Pressable
            onPress={() => navigation.navigate('Cart')}
            style={styles.cartBtn}
          >
            <CartIcon />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.searchBar}>
          <SearchIcon />
          <Text style={styles.searchPlaceholder}>Search Products or store</Text>
        </View>

        <View style={styles.address}>
          <View>
            <Text style={styles.addressSub}>Delivery to</Text>
            <View style={styles.addressMain}>
              <Text style={styles.addressHead}>Green Way 3000, Sylhet</Text>
              <ArrowDownIcon />
            </View>
          </View>

          <View>
            <Text style={styles.addressSub}>Within</Text>
            <View style={styles.addressMain}>
              <Text style={styles.addressHead}>1 Hour</Text>
              <ArrowDownIcon />
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={bannerData}
        renderItem={({ item: { discount, orders, colorValue }, index }) => {
          return (
            <View
              style={[
                styles.bannerContainer,
                {
                  backgroundColor: colorValue,
                  marginLeft: index === 0 ? 20 : 0,
                },
              ]}
            >
              <PlaceholderImage />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.bannerFirst}>Get</Text>
                <Text style={styles.bannerSecond}>{discount}% off</Text>
                <Text style={styles.bannerThird}>
                  On first{' '}
                  <Text style={{ fontFamily: Fonts.ManropeBold }}>
                    {orders}
                  </Text>{' '}
                  orders
                </Text>
              </View>
            </View>
          );
        }}
        style={styles.bannerList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 12,
    backgroundColor: Colors.blue.default,
  },
  headerGreet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerGreeting: {
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 22,
    includeFontPadding: false,
    color: Colors.black.one,
  },
  cartBtn: {
    position: 'relative',
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    left: '75%',
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: Colors.blue.default,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow.darker,
  },
  badgeText: {
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 14,
    includeFontPadding: false,
    color: '#FFF',
  },
  searchBar: {
    marginTop: 35,
    height: 56,
    paddingHorizontal: 28,
    paddingTop: 18,
    paddingBottom: 19,
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: Colors.blue.darker,
  },
  searchPlaceholder: {
    marginLeft: 12,
    fontFamily: Fonts.ManropeMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: '#8891A5',
  },
  address: {
    marginTop: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressSub: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 11,
    color: Colors.black.one,
    opacity: 0.5,
    textTransform: 'uppercase',
    includeFontPadding: false,
    letterSpacing: 1,
  },
  addressMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressHead: {
    marginTop: 4,
    marginRight: 10,
    fontFamily: Fonts.ManropeMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.one,
  },
  bannerList: {
    paddingVertical: 27,
    height: 174,
    flexGrow: 0,
  },
  bannerContainer: {
    height: 120,
    marginRight: 20,
    paddingHorizontal: 22,
    paddingVertical: 26,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerFirst: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 20,
    includeFontPadding: false,
    color: '#FFF',
  },
  bannerSecond: {
    fontFamily: Fonts.ManropeBold,
    fontSize: 26,
    includeFontPadding: false,
    color: '#FFF',
  },
  bannerThird: {
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 13,
    includeFontPadding: false,
    color: '#FFF',
  },
});
