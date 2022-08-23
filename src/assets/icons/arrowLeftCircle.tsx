import React from 'react';
import {Svg, Path, Rect} from 'react-native-svg';
import colors from '../../styles/colors';

const ArrowLeftCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 16,
    height = 16,
    color = colors.white,
    fill = colors.primaryMain,
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Rect
        x="13"
        y="13"
        width="11"
        height="10"
        transform="rotate(-180 13 13)"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 16C3.58065 16 0 12.4194 0 8C0 3.58065 3.58065 0 8 0C12.4194 0 16 3.58065 16 8C16 12.4194 12.4194 16 8 16ZM11.7419 6.58065L8 6.58065L8 4.29355C8 3.94839 7.58065 3.7742 7.33871 4.01936L3.65161 7.72581C3.5 7.87742 3.5 8.11936 3.65161 8.27097L7.33871 11.9806C7.58387 12.2258 8 12.0516 8 11.7065V9.41936H11.7419C11.9548 9.41936 12.129 9.24517 12.129 9.03226V6.96774C12.129 6.75484 11.9549 6.58064 11.7419 6.58064V6.58065Z"
        fill={color}
      />
    </Svg>
  );
};
export default ArrowLeftCircleIcon;
