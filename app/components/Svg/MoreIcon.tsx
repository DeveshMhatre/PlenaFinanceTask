import { Path, Svg } from 'react-native-svg';

export default function MoreIcon({ isActive }: { isActive: boolean }) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fill="#3E4554"
        d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
      <Path
        fill={isActive ? '#E0B420' : '#3E4554'}
        d="M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </Svg>
  );
}
