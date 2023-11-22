import { Path, Svg } from 'react-native-svg';

export default function MinusIcon({ type }: { type: 'Primary' | 'Outline' }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke={type === 'Primary' ? '#FFF' : '#130F26'}
        d="M13.667 9.99H6.333"
      />
    </Svg>
  );
}
