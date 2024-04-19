import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgVector = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#2A2A2A"
      d="M8.39 13.5V8.562H3.292a.563.563 0 1 1 0-1.125H8.39V2.391A1.97 1.97 0 0 0 6.42.42H1.97A1.97 1.97 0 0 0 0 2.392V13.5a1.97 1.97 0 0 0 1.969 1.969H6.42A1.97 1.97 0 0 0 8.39 13.5m3.142-4.938L9.68 10.414a.563.563 0 0 0 .795.796l2.813-2.813a.563.563 0 0 0 0-.795l-2.813-2.813a.562.562 0 0 0-.795.796l1.852 1.852H8.39v1.125z"
    />
  </Svg>
);
export default SvgVector;
