import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSubtract = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M1.478.404a.75.75 0 0 0-.926.941L2.984 9.25H11.5a.75.75 0 0 1 0 1.5H2.984L.552 18.655a.75.75 0 0 0 .926.94 60.5 60.5 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.5 60.5 0 0 0 1.478.404"
    />
  </Svg>
);
export default SvgSubtract;
