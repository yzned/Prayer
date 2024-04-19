import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEyeClosed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#eye_closed_svg__a)">
      <G fill={props.color} clipPath="url(#eye_closed_svg__b)">
        <Path
          fillRule="evenodd"
          d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.03 10.03 0 0 0 3.3-4.38 1.65 1.65 0 0 0 0-1.185A10 10 0 0 0 9.999 3a9.96 9.96 0 0 0-4.744 1.194zM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557"
          clipRule="evenodd"
        />
        <Path d="m10.748 13.93 2.523 2.523a10 10 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.65 1.65 0 0 1 0-1.186A10 10 0 0 1 2.839 6.02L6.07 9.252Q6 9.616 6 10a4 4 0 0 0 4.748 3.93" />
      </G>
    </G>
    <Defs>
      <ClipPath id="eye_closed_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
      <ClipPath id="eye_closed_svg__b">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgEyeClosed;
