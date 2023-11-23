import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';
import {
  Product,
  ProductsListScreenProps,
} from '../../screens/home/ProductsListScreen';

import AddMinusButton from '../Shared/AddMinusButton';
import HeartButton from './HeartButton';

import { RootState } from '../../state/store';
import { CartItem, addItem, removeItem } from '../../state/cart/cartSlice';

export default function RecommendedProducts({
  products,
  navigation,
}: {
  products: Product[];
  navigation: ProductsListScreenProps['navigation'];
}) {
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
            <HeartButton productId={product?.id} />

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
                label={
                  cartItems.some((item) => item.id === product.id)
                    ? 'Subtract'
                    : 'Plus'
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
    objectFit: 'fill',
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
