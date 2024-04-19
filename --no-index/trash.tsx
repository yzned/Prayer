import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgTrash = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M11.75 3.232v.189a41 41 0 0 1 3.232.427.625.625 0 0 1-.214 1.231l-.174-.03-.838 10.893a2.5 2.5 0 0 1-2.492 2.308H4.736a2.5 2.5 0 0 1-2.492-2.308L1.406 5.05l-.174.03a.625.625 0 1 1-.214-1.232A41 41 0 0 1 4.25 3.42v-.19C4.25 1.929 5.26.816 6.596.773a44 44 0 0 1 2.808 0c1.336.043 2.346 1.156 2.346 2.46m-5.114-1.21a43 43 0 0 1 2.728 0c.629.02 1.136.548 1.136 1.21v.094a41 41 0 0 0-5 0v-.094c0-.662.507-1.19 1.136-1.21m-.295 4.954a.625.625 0 1 0-1.25.048l.289 7.5a.625.625 0 0 0 1.25-.048zm4.567.048a.625.625 0 1 0-1.25-.048l-.288 7.5a.625.625 0 1 0 1.25.048z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTrash;
