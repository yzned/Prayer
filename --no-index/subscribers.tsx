import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSubscribers = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#Subscribers_svg__a)">
      <Path
        fillRule="evenodd"
        d="M9.083 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M16.583 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0M3.083 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0M7.143 15.118A6.75 6.75 0 0 1 12.833 12a6.745 6.745 0 0 1 6.71 7.498.75.75 0 0 1-.373.568 12.7 12.7 0 0 1-6.337 1.684c-2.305 0-4.47-.612-6.336-1.684a.75.75 0 0 1-.373-.568 6.8 6.8 0 0 1 1.02-4.38"
        clipRule="evenodd"
      />
      <Path d="m5.916 14.254-.036.055a8.3 8.3 0 0 0-1.272 5.08 9.7 9.7 0 0 1-1.764-.44l-.115-.04a.56.56 0 0 1-.374-.487l-.01-.121q-.012-.15-.012-.301a3.75 3.75 0 0 1 3.583-3.746M21.059 19.389a8.3 8.3 0 0 0-1.271-5.079l-.037-.056a3.75 3.75 0 0 1 3.57 4.047l-.01.121a.56.56 0 0 1-.373.486l-.115.04a9.7 9.7 0 0 1-1.764.441" />
    </G>
    <Defs>
      <ClipPath id="Subscribers_svg__a">
        <Path fill="#fff" d="M.833 0h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSubscribers;
