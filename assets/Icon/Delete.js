import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeleteIcon(props) {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path d="M18.9 8H5.1c-.6 0-1.1.5-1 1.1l1.6 13.1c.1 1 1 1.7 2 1.7h8.5c1 0 1.9-.7 2-1.7l1.6-13.1c.1-.6-.3-1.1-.9-1.1zM20 2h-5c0-1.1-.9-2-2-2h-2C9.9 0 9 .9 9 2H4c-1.1 0-2 .9-2 2v1c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V4c0-1.1-.9-2-2-2z" />
    </Svg>
  )
}

export default DeleteIcon
