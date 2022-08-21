import React from 'react';
import {Svg, Path, Mask, G, Rect} from 'react-native-svg';
import colors from '../../styles/colors';

const OrdinationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 12, height = 12, color = colors.blueLight, fill= colors.blue} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Mask
        id="mask0_1_348"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.62822 1.03754C2.86661 0.820821 3.23067 0.820821 3.46906 1.03754L5.66906 3.03754C5.92447 3.26973 5.94329 3.66501 5.7111 3.92042C5.47891 4.17583 5.08363 4.19465 4.82822 3.96246L3.67364 2.91284V10.5C3.67364 10.8452 3.39382 11.125 3.04864 11.125C2.70346 11.125 2.42364 10.8452 2.42364 10.5V2.91284L1.26906 3.96246C1.01365 4.19465 0.618366 4.17583 0.386175 3.92042C0.153983 3.66501 0.172806 3.26973 0.428217 3.03754L2.62822 1.03754ZM8.95137 0.875C9.29655 0.875 9.57637 1.15482 9.57637 1.5V9.08715L10.731 8.03754C10.9864 7.80535 11.3816 7.82417 11.6138 8.07958C11.846 8.33499 11.8272 8.73027 11.5718 8.96246L9.37179 10.9625C9.1334 11.1792 8.76934 11.1792 8.53095 10.9625L6.33095 8.96246C6.07554 8.73027 6.05672 8.33499 6.28891 8.07958C6.5211 7.82417 6.91638 7.80535 7.17179 8.03754L8.32637 9.08716V1.5C8.32637 1.15482 8.60619 0.875 8.95137 0.875Z"
          fill={fill}
        />
      </Mask>
      <G mask="url(#mask0_1_348)">
        <Rect
          x="0.00195312"
          y="-6.10352e-05"
          width="12"
          height="12"
          fill={color}
        />
      </G>
    </Svg>
  );
};
export default OrdinationIcon;
