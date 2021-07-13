import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditIcon(props) {
  return (
    <Svg
      height={48}
      viewBox="0 0 48 48"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
      <Path d="M0 0h48v48H0z" fill="none" />
    </Svg>
  )
}

export default EditIcon