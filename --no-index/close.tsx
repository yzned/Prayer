import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgClose = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}>
    <Path
      fill="#2A2A2A"
      fillRule="evenodd"
      d="M1.102 1.102c.22-.22.576-.22.796 0L6 5.205l4.102-4.103a.562.562 0 1 1 .796.796L6.796 6l4.102 4.102a.562.562 0 1 1-.796.796L6 6.796l-4.102 4.102a.562.562 0 1 1-.796-.796L5.205 6 1.102 1.898a.563.563 0 0 1 0-.796"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgClose;
