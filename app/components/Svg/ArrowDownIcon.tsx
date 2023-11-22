import { Path, Svg } from 'react-native-svg';

import Colors from '../../helpers/Colors';

export default function ArrowDownIcon({
  goBack = false,
}: {
  goBack?: boolean;
}) {
  return (
    <Svg width={9} height={5} fill="none">
      <Path
        stroke={goBack ? Colors.black.default : '#B2BBCE'}
        d="m1 .757 3.471 3.486L7.942.757"
      />
    </Svg>
  );
}
