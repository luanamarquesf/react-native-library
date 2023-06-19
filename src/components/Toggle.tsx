import React from 'react'
import Svg, { Rect } from 'react-native-svg'

import { colors } from '../config/themes'

interface ToggleProps {
  checked?: boolean
  theme?: string
}

const TogglePropsDefault: ToggleProps = {
  checked: false,
  theme: 'light',
}

export const Toggle = (customProps: ToggleProps) => {
  var props: ToggleProps = { ...TogglePropsDefault, ...customProps }

  if (props.checked) {
    var color = props.theme === 'light' ? colors.blue150 : colors.blue100
    return (
      <Svg width='52' height='28' viewBox='0 0 52 28' fill='none'>
        <Rect
          x='0.5'
          y='0.5'
          width='51'
          height='27'
          rx='13.5'
          fill={color}
          stroke={color}
        />
        <Rect x='26' y='2' width='24' height='24' rx='12' fill='white' />
      </Svg>
    )
  } else {
    var color = colors.grey300
    return (
      <Svg width='52' height='28' viewBox='0 0 52 28' fill='none'>
        <Rect
          x='0.5'
          y='0.5'
          width='51'
          height='27'
          rx='13.5'
          fill='white'
          stroke={color}
        />
        <Rect x='2' y='2' width='24' height='24' rx='12' fill={color} />
      </Svg>
    )
  }
}
