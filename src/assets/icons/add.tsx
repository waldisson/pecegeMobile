import React from 'react';
import {Svg, Path} from 'react-native-svg';
import colors from '../../styles/colors';

const Add = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 48, height = 48, color = colors.primaryMid} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <Path d="M0 24C0 10.7438 10.7438 0 24 0C37.2563 0 48 10.7438 48 24C48 37.2563 37.2563 48 24 48C10.7438 48 0 37.2563 0 24ZM24 34.5C25.2469 34.5 26.25 33.4969 26.25 32.25V26.25H32.25C33.4969 26.25 34.5 25.2469 34.5 24C34.5 22.7531 33.4969 21.75 32.25 21.75H26.25V15.75C26.25 14.5031 25.2469 13.5 24 13.5C22.7531 13.5 21.75 14.5031 21.75 15.75V21.75H15.75C14.5031 21.75 13.5 22.7531 13.5 24C13.5 25.2469 14.5031 26.25 15.75 26.25H21.75V32.25C21.75 33.4969 22.7531 34.5 24 34.5Z" fill={color}/>
    </Svg>
  );
};
export default Add;