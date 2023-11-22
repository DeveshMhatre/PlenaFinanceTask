import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';
import {
  Product,
  ProductsListScreenProps,
} from '../../screens/home/ProductsListScreen';

import AddMinusButton from '../Shared/AddMinusButton';
import HeartButton from './HeartButton';

export default function RecommendedProducts({
  products,
  navigation,
}: {
  products: Product[];
  navigation: ProductsListScreenProps['navigation'];
}) {
  return (
    <View style={styles.productsList}>
      {products?.map((product, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate('Product', { product: product })}
        >
          <View
            style={[
              styles.product,
              {
                marginLeft: index % 2 === 0 ? 10 : 0,
                marginRight: index % 2 === 0 ? 0 : 10,
              },
            ]}
          >
            <HeartButton />

            <Image
              source={{ uri: product?.thumbnail }}
              style={styles.productThumb}
            />
            <View
              style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <View>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Text style={styles.productTitle}>{product.title}</Text>
              </View>

              <AddMinusButton
                type="Primary"
                label="Plus"
                handleOnPress={() => console.log(product?.price)}
              />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    margin: 20,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    flexBasis: '45%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 22,
    borderRadius: 12,
    backgroundColor: Colors.black.one,
  },
  productThumb: {
    borderRadius: 12,
    width: '100%',
    height: 100,
    objectFit: 'cover',
  },
  productPrice: {
    fontFamily: Fonts.ManropeSemiBold,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.default,
  },
  productTitle: {
    width: 100,
    marginTop: 6,
    fontFamily: Fonts.ManropeRegular,
    fontSize: 12,
    letterSpacing: 1,
    includeFontPadding: false,
    color: Colors.black.sixty,
  },
});
