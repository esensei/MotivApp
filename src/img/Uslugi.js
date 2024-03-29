import React from 'react'
import Svg, { Mask, Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 48 48" {...props}>
    <Mask id="prefix__a" fill="#fff">
      <Path d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24zm-34-3.5a1.5 1.5 0 011.5-1.5h8a1.5 1.5 0 010 3h-8a1.5 1.5 0 01-1.5-1.5zm20 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-11 9a1.5 1.5 0 011.5-1.5h8a1.5 1.5 0 010 3h-8a1.5 1.5 0 01-1.5-1.5zm-4 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </Mask>
    <Path
      fill="#FF7C03"
      d="M24 49.5c14.083 0 25.5-11.417 25.5-25.5h-3c0 12.426-10.074 22.5-22.5 22.5v3zM-1.5 24c0 14.083 11.417 25.5 25.5 25.5v-3C11.574 46.5 1.5 36.426 1.5 24h-3zM24-1.5C9.917-1.5-1.5 9.917-1.5 24h3C1.5 11.574 11.574 1.5 24 1.5v-3zM49.5 24C49.5 9.917 38.083-1.5 24-1.5v3c12.426 0 22.5 10.074 22.5 22.5h3zm-34-6.5a3 3 0 00-3 3h3v-3zm8 0h-8v3h8v-3zm3 3a3 3 0 00-3-3v3h3zm-3 3a3 3 0 003-3h-3v3zm-8 0h8v-3h-8v3zm-3-3a3 3 0 003 3v-3h-3zm19 4a4 4 0 004-4h-3a1 1 0 01-1 1v3zm-4-4a4 4 0 004 4v-3a1 1 0 01-1-1h-3zm4-4a4 4 0 00-4 4h3a1 1 0 011-1v-3zm4 4a4 4 0 00-4-4v3a1 1 0 011 1h3zm-11 6a3 3 0 00-3 3h3v-3zm8 0h-8v3h8v-3zm3 3a3 3 0 00-3-3v3h3zm-3 3a3 3 0 003-3h-3v3zm-8 0h8v-3h-8v3zm-3-3a3 3 0 003 3v-3h-3zm-5 4a4 4 0 004-4h-3a1 1 0 01-1 1v3zm-4-4a4 4 0 004 4v-3a1 1 0 01-1-1h-3zm4-4a4 4 0 00-4 4h3a1 1 0 011-1v-3zm4 4a4 4 0 00-4-4v3a1 1 0 011 1h3z"
      mask="url(#prefix__a)"
    />
  </Svg>
)

export default SvgComponent
