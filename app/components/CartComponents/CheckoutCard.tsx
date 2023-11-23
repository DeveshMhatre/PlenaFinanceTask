import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../Shared/Button';

import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';

import { RootState } from '../../state/store';

export default function CheckoutCard({
  handleBtnPress,
}: {
  handleBtnPress: () => void;
}) {
  const cartItems = useSelector((state: RootState) => state.cart.value);

  return (
    <View style={styles.checkoutCard}>
      <View style={{ paddingHorizontal: 20, marginBottom: 22 }}>
        <View style={styles.amounts}>
          <Text style={styles.amountType}>Subtotal</Text>
          <Text style={styles.amountValue}>
            $
            {cartItems
              .reduce(
                (prev, current) => prev + current.price * current.quantity,
                0
              )
              .toFixed(2)}
          </Text>
        </View>

        <View style={styles.amounts}>
          <Text style={styles.amountType}>Delivery</Text>
          <Text style={styles.amountValue}>$2.00</Text>
        </View>
        <View style={styles.amounts}>
          <Text style={styles.amountType}>Total</Text>
          <Text style={styles.amountValue}>
            $
            {(
              cartItems.reduce(
                (prev, current) => prev + current.price * current.quantity,
                0
              ) + 2
            ).toFixed(2)}
          </Text>
        </View>
      </View>

      <Button
        type="Primary"
        handleOnPress={() => handleBtnPress()}
        label="Proceed To Checkout"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  checkoutCard: {
    marginHorizontal: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
    borderRadius: 30,
    backgroundColor: Colors.black.one,
  },
  amounts: {
    marginBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountType: {
    fontFamily: Fonts.ManropeRegular,
    fontSize: 14,
    includeFontPadding: false,
    color: '#616A7D',
  },
  amountValue: {
    fontFamily: Fonts.ManropeMedium,
    fontSize: 14,
    includeFontPadding: false,
    color: Colors.black.default,
  },
});
