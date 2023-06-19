import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../config/themes'

export interface ToasterProps {
  type:
    | 'warning'
    | 'success'
    | 'float'
    | 'warningTransparent'
    | 'successTransparent'
    | 'greatWarning'
  absolute?: boolean
  hasLeftIcon?: boolean
  message?: string
  onClose?: () => void
  padding?: string
  textCenter?: boolean
}

const BACKGROUND_COLORS = {
  warning: colors.orange310,
  success: colors.green,
  error: colors.red,
  float: colors.grey300,
  floatDark: '#DDDDDD',
  warningTransparent: '#fff',
  successTransparent: '#D8EACC',
  greatWarning: colors.orange,
}

const TEXT_COLORS = {
  warning: colors.orange,
  warningTransparent: colors.orange,
  success: colors.green,
  error: colors.orange,
  float: colors.white,
  floatDark: '#212121',
  successTransparent: '#4b4b4b',
  greatWarning: colors.orange,
}

const Container = styled.TouchableOpacity<{
  type: ToasterProps['type']
  absolute?: ToasterProps['absolute']
  padding?: ToasterProps['padding']
  textCenter?: ToasterProps['textCenter']
}>`
  background: ${(props) => BACKGROUND_COLORS[props.type]};
  margin-top: 8px;
  margin-bottom: 24px;
  padding: 0 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${(props) => props.type === 'float' && 'padding-vertical: 16px'};
  ${(props) => props.type === 'float' && 'margin-horizontal: 16px'};
  ${(props) =>
    props.absolute
      ? `position: absolute;
  bottom: 74px;
  flex: 1;
    flex-direction: row;
    align-self: center;
    justify-content: center;
  padding: 12px 16px;`
      : ''}
  ${(props) =>
    props.padding && `padding: ${props.padding}; margin-bottom: 0px; `};
  ${(props) =>
    props.textCenter &&
    `   flex-direction: row;
  align-self: center;
  justify-content: center;`};
`

const Label = styled.Text<{
  type: ToasterProps['type']
  absolute?: ToasterProps['absolute']
}>`
  color: ${(props) => TEXT_COLORS[props.type]};
  font-size: 12px;
  font-family: 'Roboto-Regular';
  ${(props) => props.type === 'float' && 'font-size: 16px'};
`

const Toaster = (props: ToasterProps) => {
  return (
    <Container
      absolute={props.absolute}
      type={props.type}
      onPress={props.onClose}
      padding={props.padding}
      textCenter={props.textCenter}
    >
      <Label absolute={props.absolute} type={props.type}>
        {props.message}
      </Label>
    </Container>
  )
}

export default Toaster
