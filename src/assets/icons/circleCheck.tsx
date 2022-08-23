import React from 'react';
import {Svg, Path, Rect, G, Defs,ClipPath} from 'react-native-svg';
import colors from '../../styles/colors';

const CircleCheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {
    width = 8,
    height = 9,
    color = colors.white,
    fill = colors.greenFc,
  } = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 9"
      fill="none"
    >
      <G clip-path="url(#clip0_1_388)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 0.5C1.79091 0.5 0 2.29091 0 4.5C0 6.70909 1.79091 8.5 4 8.5C6.20909 8.5 8 6.70909 8 4.5C8 2.29091 6.20909 0.5 4 0.5ZM5.73382 3.82364C5.76574 3.78714 5.79005 3.74463 5.8053 3.69861C5.82056 3.65258 5.82645 3.60397 5.82264 3.55563C5.81883 3.50729 5.8054 3.46021 5.78312 3.41714C5.76084 3.37407 5.73018 3.33589 5.69293 3.30485C5.65568 3.27381 5.6126 3.25053 5.56622 3.23639C5.51984 3.22224 5.4711 3.21751 5.42287 3.22248C5.37463 3.22745 5.32788 3.24202 5.28536 3.26532C5.24284 3.28863 5.20541 3.3202 5.17527 3.35818L3.61164 5.23418L2.80255 4.42473C2.73396 4.35849 2.64211 4.32184 2.54676 4.32266C2.45142 4.32349 2.36021 4.36174 2.29279 4.42916C2.22537 4.49658 2.18713 4.58778 2.1863 4.68313C2.18547 4.77847 2.22212 4.87033 2.28836 4.93891L3.37927 6.02982C3.415 6.06553 3.45778 6.0934 3.50488 6.11166C3.55198 6.12992 3.60236 6.13816 3.65283 6.13587C3.70329 6.13358 3.75272 6.1208 3.79797 6.09835C3.84322 6.07589 3.88329 6.04425 3.91564 6.00545L5.73382 3.82364Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_388">
          <Rect
            width="8"
            height="8"
            fill={color}
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default CircleCheckIcon;
