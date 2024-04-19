import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgSketch = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={178}
    height={177}
    fill="none"
    {...props}>
    <G clipPath="url(#sketch_svg__a)">
      <Path
        fill="#F2F2F2"
        fillRule="evenodd"
        d="M89 177c48.877 0 88.5-39.623 88.5-88.5S137.877 0 89 0C67.071 0 58.736 26.302 43.275 39.51 24.275 55.744.5 61.553.5 88.5.5 137.377 40.123 177 89 177"
        clipRule="evenodd"
      />
      <G filter="url(#sketch_svg__b)">
        <Path
          fill="#EBEBEB"
          d="M142.1 57.525H65.4c-2.444 0-4.425 1.694-4.425 3.784v79.458c0 2.089 1.981 3.783 4.425 3.783h76.7c2.444 0 4.425-1.694 4.425-3.783V61.309c0-2.09-1.981-3.784-4.425-3.784"
        />
      </G>
      <Path
        fill="#fff"
        d="M52.125 59c0-6.517 5.283-11.8 11.8-11.8h56.05c6.517 0 11.8 5.283 11.8 11.8v63.425c0 6.517-5.283 11.8-11.8 11.8h-56.05c-6.517 0-11.8-5.283-11.8-11.8z"
      />
      <Path
        fill="#696969"
        fillRule="evenodd"
        d="M138.834 64.63a4.425 4.425 0 0 1 .183 6.256l-37.948 40.23a4.425 4.425 0 0 1-6.438-6.073l37.948-40.23a4.425 4.425 0 0 1 6.255-.182"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="sketch_svg__a">
        <Path fill="#fff" d="M.5 0h177v177H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSketch;
