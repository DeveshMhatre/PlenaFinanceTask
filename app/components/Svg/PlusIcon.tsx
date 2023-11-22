import { Path, Svg } from 'react-native-svg';

export default function PlusIcon({ type }: { type: 'Primary' | 'Outline' }) {
  return (
    <Svg width={20} height={20} fill="none">
      <Path
        stroke={type === 'Primary' ? '#FFF' : '#130F26'}
        d="M10 6.327v7.327m3.667-3.664H6.333"
      />
    </Svg>
  );
}
