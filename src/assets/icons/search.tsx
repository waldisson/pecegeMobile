import React from 'react';
import {Svg, Path, Rect, Mask, G} from 'react-native-svg';
import colors from '../../styles/colors';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const {width = 16, height = 16, color = colors.dark} = props;
  return (
      <Svg width={width} height={height} viewBox="0 0 25 25" fill="none">
        <Mask id="mask0_136_9896" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="24" height="24">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.2782 1.49878C5.23394 1.49878 1.1377 5.55537 1.1377 10.5681C1.1377 15.5809 5.23394 19.6375 10.2782 19.6375C12.1588 19.6375 13.9082 19.0734 15.3621 18.1063L21.3252 24.0202C21.9686 24.6583 23.01 24.6583 23.6534 24.0202C24.2991 23.3798 24.2991 22.3399 23.6534 21.6995L17.7285 15.8235C18.7924 14.3411 19.4187 12.5267 19.4187 10.5681C19.4187 5.55537 15.3225 1.49878 10.2782 1.49878ZM4.43444 10.5681C4.43444 7.37345 7.04688 4.77661 10.2782 4.77661C13.5095 4.77661 16.122 7.37345 16.122 10.5681C16.122 13.7628 13.5095 16.3596 10.2782 16.3596C7.04688 16.3596 4.43444 13.7628 4.43444 10.5681Z" fill="#006FFD"/>
        </Mask>
        <G mask="url(#mask0_136_9896)">
        <Rect x="0.637695" y="0.998779" width="24" height="24" fill={color}/>
        </G>
      </Svg>
    
  );
};
export default SearchIcon;
