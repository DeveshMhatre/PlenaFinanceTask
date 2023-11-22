import { useState } from 'react';
import { Pressable } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function HeartButton() {
  const [selected, setSelected] = useState(false);

  return (
    <Pressable
      style={{
        position: 'absolute',
        top: 3,
        left: 3,
        zIndex: 3,
        padding: 10,
      }}
      onPress={() => setSelected((prev) => !prev)}
    >
      <Svg width={15} height={14} fill={selected ? '#FF8181' : 'none'}>
        <Path
          stroke={selected ? 'none' : '#323743'}
          d="M6.557 12.02C4.672 10.31 3.15 8.93 2.091 7.635 1.04 6.35.5 5.212.5 4.001A3.463 3.463 0 0 1 4.001.5c1.115 0 2.192.521 2.894 1.345l.38.447.38-.447A3.857 3.857 0 0 1 10.55.5a3.463 3.463 0 0 1 3.501 3.501c0 1.211-.54 2.349-1.592 3.636-1.058 1.294-2.58 2.677-4.462 4.388h-.001l-.001.002-.718.648-.72-.655z"
        />
      </Svg>
    </Pressable>
  );
}
