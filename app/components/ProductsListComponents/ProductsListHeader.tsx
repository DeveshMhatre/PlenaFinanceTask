import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import CartButton from '../Shared/CartButton';

import ArrowDownIcon from '../Svg/ArrowDownIcon';
import SearchIcon from '../Svg/SearchIcon';

export default function ProductsListHeader({
  handleOpenCart,
}: {
  handleOpenCart: () => void;
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerGreet}>
        <Text style={styles.headerGreeting}>Hey, Rahul</Text>
        <CartButton openCart={handleOpenCart} />
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
  );
}

const styles = StyleSheet.create({
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
});
