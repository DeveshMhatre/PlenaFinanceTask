import { Path, Svg } from 'react-native-svg';

export default function CategoryIcon({ isActive }: { isActive: boolean }) {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke={isActive ? '#E0B420' : '#3E4554'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={isActive ? '#E0B420' : '#F8F7FB'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 6.674a3.674 3.674 0 1 1-7.348-.001 3.674 3.674 0 0 1 7.348 0Z"
        clipRule="evenodd"
      />
      <Path
        stroke={isActive ? '#E0B420' : '#3E4554'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={isActive ? '#E0B420' : '#F8F7FB'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.347 6.674a3.674 3.674 0 1 1-7.348 0 3.674 3.674 0 0 1 7.348 0Z"
        clipRule="evenodd"
      />
      <Path
        stroke={isActive ? '#E0B420' : '#3E4554'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={isActive ? '#E0B420' : '#F8F7FB'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17.262a3.674 3.674 0 1 1-7.347-.001 3.674 3.674 0 0 1 7.347 0Z"
        clipRule="evenodd"
      />
      <Path
        stroke={isActive ? '#E0B420' : '#3E4554'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
        clipRule="evenodd"
      />
      <Path
        fill={isActive ? '#E0B420' : '#F8F7FB'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.347 17.262a3.673 3.673 0 1 1-7.346 0 3.673 3.673 0 0 1 7.346 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
