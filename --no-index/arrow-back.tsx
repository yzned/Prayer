import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgArrowBack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#2A2A2A"
      fillRule="evenodd"
      stroke="#2A2A2A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M7.273.977c.22.22.22.576 0 .796L2.608 6.438H14.75a.562.562 0 1 1 0 1.125H2.608l4.665 4.664a.562.562 0 1 1-.796.796L.852 7.398a.563.563 0 0 1 0-.796L6.477.977c.22-.22.576-.22.796 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArrowBack;
