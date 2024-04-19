import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgUnion = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill={props.color}
      d="M16.843 3.566q.155.567.157 1.184v10.5q-.002.616-.157 1.183A3 3 0 0 0 18.5 13.75v-7.5a3 3 0 0 0-1.657-2.684M9.5.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V3.25a3 3 0 0 1 3-3zM14 3.25q-.002-.617-.157-1.184A3 3 0 0 1 15.5 4.75v10.5a3 3 0 0 1-1.657 2.683c.102-.377.157-.774.157-1.183z"
    />
  </Svg>
);
export default SvgUnion;
