import React from 'react';
import {Svg, Path} from 'react-native-svg';
import colors from '../../styles/colors';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 19, height = 17, color = colors.white} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 17"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.65759 2.95915H17.7549C18.118 2.95915 18.4125 2.66475 18.4125 2.30156V0.65759C18.4125 0.2944 18.1181 0 17.7549 0H0.65759C0.2944 0 0 0.29439 0 0.65759V2.30156C0 2.66475 0.29439 2.95915 0.65759 2.95915ZM0.65759 9.53503H17.7549C18.118 9.53503 18.4125 9.24063 18.4125 8.87744V7.23347C18.4125 6.87028 18.1181 6.57588 17.7549 6.57588H0.65759C0.2944 6.57588 0 6.87028 0 7.23347V8.87744C0 9.24064 0.29439 9.53503 0.65759 9.53503ZM0.65759 16.1109H17.7549C18.118 16.1109 18.4125 15.8165 18.4125 15.4533V13.8093C18.4125 13.4461 18.1181 13.1517 17.7549 13.1517H0.65759C0.2944 13.1517 0 13.4461 0 13.8093V15.4533C0 15.8165 0.29439 16.1109 0.65759 16.1109Z"
        fill={color}
      />
    </Svg>
  );
};
export default MenuIcon;
