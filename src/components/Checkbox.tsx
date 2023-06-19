import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'

import { colors } from '../config/themes'

interface CheckboxProps {
  checked?: boolean
  theme?: string
}

const CheckboxPropsDefault: CheckboxProps = {
  checked: false,
  theme: 'light',
}

export const Checkbox = (customProps: CheckboxProps) => {
  var props: CheckboxProps = { ...CheckboxPropsDefault, ...customProps }

  if (props.checked) {
    var color = props.theme === 'light' ? colors.blue150 : colors.blue100
    return (
      <Svg width='28' height='28' viewBox='0 0 28 28' fill={color}>
        <Rect width='28' height='28' rx='4' fill={color} />
        <Path
          d='M8.5 14.5L12 18L20 9'
          stroke='white'
          stroke-width='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    )
  } else {
    var color = colors.grey300
    return (
      <Svg width='28' height='28' viewBox='0 0 28 28' fill={color}>
        <Rect width='28' height='28' rx='4' fill={color} />
        <Path
          d='M8.5 14.5L12 18L20 9'
          stroke='white'
          stroke-width='10'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    )
  }
}
