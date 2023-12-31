import { Path, Svg } from 'react-native-svg';

export default function PlaceholderImage() {
  return (
    <Svg width={60} height={60} fill="none">
      <Path
        stroke="#fff"
        d="M1.667 13A11.333 11.333 0 0 1 13 1.667h34A11.333 11.333 0 0 1 58.333 13v34A11.333 11.333 0 0 1 47 58.333H13A11.333 11.333 0 0 1 1.667 47V13z"
      />
      <Path
        stroke="#fff"
        d="M20.083 27.167a7.083 7.083 0 1 0 0-14.167 7.083 7.083 0 0 0 0 14.167zm17.074 4.593L13 58.333h34.377a10.957 10.957 0 0 0 10.956-10.956V47c0-1.32-.495-1.827-1.388-2.805L45.527 31.743a5.666 5.666 0 0 0-8.37.017z"
      />
    </Svg>
  );
}
