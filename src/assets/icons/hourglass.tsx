import React from 'react';
import {Svg, Path} from 'react-native-svg';
import colors from '../../styles/colors';

const HourglassIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 6, height = 9, color = colors.yellow} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 6 9"
      fill="none"
    >
      <Path
        d="M5.625 0.5H0.375C0.167891 0.5 0 0.667891 0 0.875V1.125C0 1.33211 0.167891 1.5 0.375 1.5C0.375 2.92133 1.17212 4.12084 2.26316 4.5C1.17212 4.87916 0.375 6.07867 0.375 7.5C0.167891 7.5 0 7.66789 0 7.875V8.125C0 8.33211 0.167891 8.5 0.375 8.5H5.625C5.83211 8.5 6 8.33211 6 8.125V7.875C6 7.66789 5.83211 7.5 5.625 7.5C5.625 6.07867 4.82788 4.87916 3.73684 4.5C4.82788 4.12084 5.625 2.92133 5.625 1.5C5.83211 1.5 6 1.33211 6 1.125V0.875C6 0.667891 5.83211 0.5 5.625 0.5ZM4.45191 6.5H1.54813C1.81467 5.7688 2.36212 5.25 3 5.25C3.63783 5.25 4.18534 5.76869 4.45191 6.5ZM4.4522 2.5H1.54809C1.43731 2.19606 1.375 1.85544 1.375 1.5H4.625C4.625 1.85633 4.5627 2.19667 4.4522 2.5Z"
        fill={color}
      />
    </Svg>
  );
};
export default HourglassIcon;
