import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEye = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#eye_svg__a)">
      <Path d="M10.446 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      <Path
        fillRule="evenodd"
        d="M1.11 10.59a1.65 1.65 0 0 1 0-1.186A10 10 0 0 1 10.444 3c4.257 0 7.893 2.66 9.336 6.41.147.381.147.804 0 1.186A10 10 0 0 1 10.446 17c-4.257 0-7.893-2.66-9.336-6.41M14.446 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="eye_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEye;
