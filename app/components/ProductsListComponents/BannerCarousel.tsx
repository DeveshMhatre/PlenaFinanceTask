import { FlatList, StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import PlaceholderImage from '../Svg/PlaceholderImage';

export default function BannerCarousel() {
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
                <Text style={{ fontFamily: Fonts.ManropeBold }}>{orders}</Text>{' '}
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
  );
}

const styles = StyleSheet.create({
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
