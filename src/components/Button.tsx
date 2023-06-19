import React from 'react'
import styled from 'styled-components/native'

import { colors, rgb } from '../config/themes'

interface ActionButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
  color?: string
  labelSize?: number
  labelColor?: string
  height?: number
  block?: boolean
  padding?: string
  width?: string
}

type ActionButtonContainerProps = Pick<
  ActionButtonProps,
  'color' | 'height' | 'block' | 'padding' | 'width' | 'disabled'
>
type ActionButtonLabelProps = Pick<
  ActionButtonProps,
  'labelSize' | 'labelColor' | 'color'
>

const Container = styled.TouchableOpacity<ActionButtonContainerProps>`
  border-radius: 8px;
  background: ${(props) => containerBackground(props)};
  margin: 12px 0 0;
  display: flex;
  ${(props) =>
    props.width && `flex: 0 0 ${props.width}; width: ${props.width};`}
  ${(props) => props.padding && `padding: ${props.padding}`}
  ${(props) => props.block && 'width: 100%;'}

  justify-content: center;
  align-items: center;
  height: ${(props) => props.height ?? 64}px;
`

const Label = styled.Text<ActionButtonLabelProps>`
  font-family: 'Roboto-Black';
  font-size: ${(props) => props.labelSize ?? 18}px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${(props) => labelColor(props)};
`

function containerBackground(props: ActionButtonContainerProps) {
  if (props.color) {
    return props.color
  }
  if (props.disabled && props.color !== 'transparent') {
    return rgb(props.color ?? colors.blue200, 0.3)
  }
  return props.color ?? colors.blue200
}

function labelColor(props: ActionButtonLabelProps) {
  if (props.labelColor) {
    return props.labelColor
  }
  return colors.white
}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <Container
      padding={props.padding}
      onPress={props.onPress}
      block={props.block}
      width={props.width}
      color={props.color}
      height={props.height}
      disabled={props.disabled}
    >
      <Label
        labelSize={props.labelSize}
        labelColor={props.labelColor}
        color={props.color}
      >
        {props.label}
      </Label>
    </Container>
  )
}

ActionButton.defaultProps = {
  iconPosition: 'right',
  disabled: false,
  block: false,
}

export default ActionButton
