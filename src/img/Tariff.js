import React from 'react'
import Svg, { Mask, Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 48 48" {...props}>
    <Mask id="prefix__a" fill="#fff">
      <Path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm-9-32a1 1 0 00-1 1v13.714a1 1 0 001 1h18a1 1 0 001-1V17a1 1 0 00-1-1H15zm2.571 4.286a.714.714 0 100 1.428h8.572a.714.714 0 100-1.428H17.57zm-.714 3.571c0-.394.32-.714.714-.714h4.286a.714.714 0 110 1.428h-4.286a.714.714 0 01-.714-.714z" />
    </Mask>
    <Path
      fill="#FF7C03"
      d="M46.5 24c0 12.426-10.074 22.5-22.5 22.5v3c14.083 0 25.5-11.417 25.5-25.5h-3zM24 1.5c12.426 0 22.5 10.074 22.5 22.5h3C49.5 9.917 38.083-1.5 24-1.5v3zM1.5 24C1.5 11.574 11.574 1.5 24 1.5v-3C9.917-1.5-1.5 9.917-1.5 24h3zM24 46.5C11.574 46.5 1.5 36.426 1.5 24h-3c0 14.083 11.417 25.5 25.5 25.5v-3zM15.5 17a.5.5 0 01-.5.5v-3a2.5 2.5 0 00-2.5 2.5h3zm0 13.714V17h-3v13.714h3zm-.5-.5a.5.5 0 01.5.5h-3a2.5 2.5 0 002.5 2.5v-3zm18 0H15v3h18v-3zm-.5.5a.5.5 0 01.5-.5v3a2.5 2.5 0 002.5-2.5h-3zM32.5 17v13.714h3V17h-3zm.5.5a.5.5 0 01-.5-.5h3a2.5 2.5 0 00-2.5-2.5v3zm-18 0h18v-3H15v3zm3.357 3.5a.786.786 0 01-.786.786v-3A2.214 2.214 0 0015.357 21h3zm-.786-.786c.434 0 .786.352.786.786h-3c0 1.223.992 2.214 2.214 2.214v-3zm8.572 0H17.57v3h8.572v-3zm-.786.786c0-.434.352-.786.786-.786v3A2.214 2.214 0 0028.357 21h-3zm.786.786a.786.786 0 01-.786-.786h3a2.214 2.214 0 00-2.214-2.214v3zm-8.572 0h8.572v-3H17.57v3zm0-.143a2.214 2.214 0 00-2.214 2.214h3a.786.786 0 01-.786.786v-3zm4.286 0h-4.286v3h4.286v-3zm2.214 2.214a2.214 2.214 0 00-2.214-2.214v3a.786.786 0 01-.786-.786h3zm-2.214 2.214a2.214 2.214 0 002.214-2.214h-3c0-.434.352-.786.786-.786v3zm-4.286 0h4.286v-3h-4.286v3zm-2.214-2.214c0 1.223.992 2.214 2.214 2.214v-3c.434 0 .786.352.786.786h-3z"
      mask="url(#prefix__a)"
    />
  </Svg>
)

export default SvgComponent