import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Animated, { SlideOutLeft } from 'react-native-reanimated';

import AddMinusButton from '../Shared/AddMinusButton';

import Fonts from '../../helpers/Fonts';
import Colors from '../../helpers/Colors';

import { CartItem, removeItem } from '../../state/cart/cartSlice';
import { decreaseQuantity, increaseQuantity } from '../../state/cart/cartSlice';

export default function CartItemComponent({
  cartItem,
}: {
  cartItem: CartItem;
}) {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    if (cartItem.quantity <= 1) {
      dispatch(removeItem(cartItem.id));
    } else {
      dispatch(decreaseQuantity(cartItem.id));
    }
  };

  return (
    <Animated.View exiting={SlideOutLeft} style={styles.cartItemContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: cartItem.thumbnail }} style={styles.cartImage} />

        <View style={{ marginLeft: 26 }}>
          <Text style={styles.cartTitle}>{cartItem.title}</Text>
          <Text style={styles.cartPrice}>${cartItem.price}</Text>
        </View>
      </View>

      <View style={styles.cartItemButtons}>
        <AddMinusButton
          type="Outline"
          handleOnPress={() => handleDecreaseQuantity()}
          label="Subtract"
        />
        <Text style={styles.cartItemQuantity}>{cartItem?.quantity}</Text>
        <AddMinusButton
          type="Outline"
          handleOnPress={() => dispatch(increaseQuantity(cartItem.id))}
          label="Plus"
          disabled={cartItem.quantity >= cartItem.stock}
        />
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  cartItemContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EBEBFB',
  },
  cartImage: {
    width: 50,
    height: 50,
    objectFit: 'fill',
    borderRadius: 12,
  },
  cartTitle: {
    marginBottom: 5,
    fontFamily: Fonts.ManropeMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.default,
  },
  cartPrice: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.default,
  },
  cartItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemQuantity: {
    marginHorizontal: 10,
    fontFamily: Fonts.ManropeMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.default,
  },
});
