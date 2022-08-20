import React from 'react';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';
import colors from '../../styles/colors';

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 7, height = 11, color = colors.blueLight} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 7 11" fill="none">
      <G clip-path="url(#clip0_1_619)">
        <Path
          d="M6.83268 5.59833L2.20906 10.2219C1.98607 10.4449 1.62455 10.4449 1.40158 10.2219L0.862306 9.68266C0.639696 9.46005 0.639266 9.09926 0.861356 8.87612L4.52566 5.19457L0.861356 1.51304C0.639266 1.28991 0.639696 0.929123 0.862306 0.706513L1.40158 0.167242C1.62457 -0.0557475 1.9861 -0.0557475 2.20906 0.167242L6.83266 4.79084C7.05565 5.01381 7.05565 5.37534 6.83268 5.59833Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_619">
          <Rect
            width="6.30483"
            height="10.3892"
            fill="white"
            transform="translate(0.695068)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default ChevronRight;
