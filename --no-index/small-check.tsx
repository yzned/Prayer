import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSmallCheck = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <G clipPath="url(#smallCheck_svg__a)">
      <Path
        fill="#2A2A2A"
        fillRule="evenodd"
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M13.964 3.123a.6.6 0 0 1 .113.84l-6.4 8.4a.6.6 0 0 1-.901.061l-3.6-3.6a.6.6 0 1 1 .848-.848L7.14 11.09l5.984-7.854a.6.6 0 0 1 .84-.113"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="smallCheck_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSmallCheck;
