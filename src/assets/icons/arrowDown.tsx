import React from 'react';
import {Svg, Path, Mask, G, Rect} from 'react-native-svg';
import colors from '../../styles/colors';

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 10,
    height = 10,
    color = colors.gray300,
    fill = colors.blue,
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
    >
      <Mask
        id="mask0_1_350"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="2"
        width="10"
        height="6">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.60845 2.27157C9.36438 2.02071 8.96867 2.02071 8.7246 2.27157L5.00002 6.09976L1.27545 2.27157C1.03138 2.02071 0.635665 2.02071 0.391597 2.27157C0.147529 2.52243 0.147529 2.92915 0.391597 3.18001L5.00002 7.91663L9.60845 3.18001C9.85252 2.92915 9.85252 2.52243 9.60845 2.27157Z"
          fill={fill}
        />
      </Mask>
      <G mask="url(#mask0_1_350)">
        <Rect
          x="0.000183105"
          y="-0.000671387"
          width="9.99961"
          height="9.99977"
          fill={color}
        />
      </G>
    </Svg>
  );
};
export default ArrowDownIcon;
