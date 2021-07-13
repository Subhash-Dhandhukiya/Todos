import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function LogoutIcon(props) {
  return (
    <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M25 2h-9v2h9a1 1 0 011 1v22a1 1 0 01-1 1h-9v2h9a3 3 0 003-3V5a3 3 0 00-3-3z" />
      <Path d="M21.58 17v-2H7l4-4-1.42-1.45-5 5a2 2 0 000 2.83l5 5L11 21l-4-4z" />
    </Svg>
  )
}

export default LogoutIcon
