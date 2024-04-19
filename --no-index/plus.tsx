import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgPlus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M8.5.25a.75.75 0 0 1 .75.75v6.75H16a.75.75 0 0 1 0 1.5H9.25V16a.75.75 0 0 1-1.5 0V9.25H1a.75.75 0 0 1 0-1.5h6.75V1A.75.75 0 0 1 8.5.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlus;
