import { G, Path, Svg } from 'react-native-svg';

export default function HeartIcon({ isActive }: { isActive: boolean }) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill={isActive ? '#E0B420' : 'none'}
        d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4z"
      />
      <Path
        stroke={isActive ? '#E0B420' : '#3E4554'}
        d="M2.872 11.598c-1.073-3.35.18-7.179 3.698-8.312a6.007 6.007 0 0 1 5.43.912c1.455-1.125 3.572-1.505 5.42-.912 3.517 1.133 4.779 4.962 3.707 8.312-1.67 5.31-9.127 9.4-9.127 9.4s-7.402-4.028-9.128-9.4z"
      />
      <G opacity={0.4}>
        <Path stroke="#3E4554" d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422" />
        <Path stroke="#000" d="M16 6.7a2.781 2.781 0 0 1 1.917 2.422" />
      </G>
    </Svg>
  );
}
