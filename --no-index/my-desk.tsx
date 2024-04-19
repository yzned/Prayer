import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMyDesk = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#My_desk_svg__a)">
      <Path
        fill={props.color}
        d="M14.792 2a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
      />
    </G>
    <Defs>
      <ClipPath id="My_desk_svg__a">
        <Path fill="#fff" d="M24.167 0v24h-24V0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgMyDesk;
