import React from 'react';
import {Svg, Path} from 'react-native-svg';
import colors from '../../styles/colors';

const HourIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 9, height = 9, color = colors.primaryLight} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 9 9"
      fill="none"
    >
      <Path
        d="M4.5 0C2.01411 0 0 2.01411 0 4.5C0 6.98589 2.01411 9 4.5 9C6.98589 9 9 6.98589 9 4.5C9 2.01411 6.98589 0 4.5 0ZM5.53609 6.35262L3.93569 5.18952C3.87944 5.14778 3.84677 5.08246 3.84677 5.01351V1.95968C3.84677 1.83992 3.94476 1.74194 4.06452 1.74194H4.93548C5.05524 1.74194 5.15323 1.83992 5.15323 1.95968V4.45827L6.30544 5.29657C6.40343 5.36734 6.42339 5.50343 6.35262 5.60141L5.84093 6.30544C5.77016 6.40161 5.63407 6.42339 5.53609 6.35262Z"
        fill={color}
      />
    </Svg>
  );
};
export default HourIcon;
