import { Path, Svg } from 'react-native-svg';

export default function ArrowDownIcon({
  goBack = false,
}: {
  goBack?: boolean;
}) {
  return (
    <Svg
      width={9}
      height={5}
      fill="none"
      style={{ transform: goBack ? [{ scale: 1.5 }] : [{ scale: 1 }] }}
    >
      <Path
        stroke={goBack ? '#000' : '#B2BBCE'}
        d="m1 .757 3.471 3.486L7.942.757"
      />
    </Svg>
  );
}
