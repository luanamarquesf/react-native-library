import React from 'react'
import Svg, { Rect } from 'react-native-svg'

import { colors } from '../config/themes'

interface RadioButtonProps {
  checked?: boolean
  theme?: string
}

const RadioButtonPropsDefault: RadioButtonProps = {
  checked: false,
  theme: 'light',
}

export const RadioButton = (customProps: RadioButtonProps) => {
  var props: RadioButtonProps = { ...RadioButtonPropsDefault, ...customProps }

  if (props.checked) {
    var color = props.theme === 'light' ? colors.blue150 : colors.blue100
    return (
      <Svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
        <Rect
          x='1'
          y='1'
          width='26'
          height='26'
          rx='13'
          stroke={color}
          stroke-width='2'
        />
        <Rect x='5' y='5' width='18' height='18' rx='9' fill={color} />
      </Svg>
    )
  } else {
    var color = colors.grey300
    return (
      <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <Rect
          x='0.5'
          y='0.5'
          width='22'
          height='22'
          rx='13.5'
          fill='white'
          stroke={color}
        />
      </Svg>
    )
  }
}
