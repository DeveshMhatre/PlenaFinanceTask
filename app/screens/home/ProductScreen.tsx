import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { HomeStackParamList } from './HomeScreen';
import CartButton from '../../components/Shared/CartButton';
import GoBackButton from '../../components/Shared/GoBackButton';
import StarIcon from '../../components/Svg/StarIcon';

type ProductScreenProps = NativeStackScreenProps<HomeStackParamList, 'Product'>;

export default function ProductScreen({
  route,
  navigation,
}: ProductScreenProps) {
  const { product } = route.params;

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
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <Text style={styles.productTitle}>{product.title}</Text>
        <View
          style={{
            marginTop: 8,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <StarRatingDisplay
            rating={product.rating}
            color={Colors.yellow.darker}
            starSize={30}
            StarIconComponent={(props) => <StarIcon {...props} />}
          />
          <Text
            style={{
              fontFamily: Fonts.ManropeRegular,
              fontSize: 14,
              includeFontPadding: false,
              color: '#A1A1AB',
            }}
          >
            110 Reviews
          </Text>
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
    fontFamily: Fonts.ManropeBold,
    fontSize: 50,
    includeFontPadding: false,
    color: Colors.black.default,
  },
});
