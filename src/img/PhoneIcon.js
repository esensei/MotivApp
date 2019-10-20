import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 18 17" {...props}>
    <Path
      stroke="#000"
      d="M8.915 11.143l2.204-2.204a2 2 0 00.374-2.309l-.124-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.8.13l1.105 2.208a4.387 4.387 0 01-.822 5.064l-5.999 6a5.427 5.427 0 01-5.554 1.31l-2.414-.805a.5.5 0 01-.195-.828l2.65-2.65a2 2 0 012.31-.376l.25.125a2 2 0 002.308-.374v0z"
    />
  </Svg>
)

export default SvgComponent
