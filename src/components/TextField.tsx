import React, { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

import { colors, themes } from '../config/themes'
import Error from '../images/Error.png'
import Success from '../images/Success.png'
import { Icon } from './Icons'
import Toaster, { ToasterProps } from './Toaster'

const Container = styled.View<{
  isFocused?: boolean
  feedback?: ToasterProps
  editable?: boolean
  readOnlyBackgroundColor?: string
  flexible?: boolean
  isGrey?: boolean
  bigger?: boolean
}>`
  border: solid 1px
    ${(props) =>
      !props.isFocused
        ? themes.light.cardBorderColor
        : themes.light.cardButtomIcon};

  ${(props) =>
    (props.feedback?.type === 'warning' ||
      props.feedback?.type === 'warningTransparent') &&
    `border-color: ${colors.orange}`};
  ${(props) =>
    props.feedback?.type === 'success' && `border-color: ${colors.green}`};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0px 18px;
  margin-bottom: 24px;
  position: relative;
  height: ${(props) => (!props.bigger ? 48 : 56)}px;
  ${(props) => props.flexible && 'flex: 1'};
  background-color: ${themes.light.backgroundColor};
`

Container.defaultProps = {
  flexible: false,
}

const Field = styled.TextInput<{ isTextGrey?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: ${themes.light.titleTextColor};
  z-index: 2;
  height: 56px;
`

Field.defaultProps = { editable: true }

export const Label = styled.Text<{
  isFloating?: boolean
  feedback?: ToasterProps
  lessPadding?: boolean
  editable?: boolean
  icon?: string
  readOnlyBackgroundColor?: string
  colorFloating?: string
  backgroundColorFloating?: string
  floatedLeft?: string
  isGrey?: boolean
}>`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.014px;
  position: absolute;
  left: ${(props) => (props.icon ? (props.lessPadding ? 16 : 42) : 16)}px;
  padding: 0 5px;

  ${(props) =>
    props.isFloating &&
    `
    left: ${props.floatedLeft ?? '16px'};
    top: -13px;
    color: ${'#c9c9c9'};
    font-size: 11px;

    
  `}
  color: ${(props) =>
    !props.isFloating
      ? themes.light.cardBorderColor
      : themes.light.cardButtomIcon};
  ${(props) =>
    (props.feedback?.type === 'warning' ||
      props.feedback?.type === 'warningTransparent') &&
    `color: ${colors.orange};`}
`

interface TextFieldProps extends TextInputProps {
  label: string
  icon?:
    | 'account-circle'
    | 'lock'
    | 'email-outline'
    | 'lock-outline'
    | 'account-outline'
  isPassword?: boolean
  labelAlwaysFloat?: boolean
  labelPosition?: string
  inputRef?: React.RefObject<TextInput>
  feedback?: ToasterProps
  lessPadding?: boolean
  readOnlyBackgroundColor?: string
  showLabel?: boolean
  colorFloating?: string
  backgroundColorFloating?: string
  flexible?: boolean
  isGrey?: boolean
  bigger?: boolean
  hasValueAsPlaceHolder?: boolean
  error?: boolean
  success?: boolean
}

const TextField = (props: TextFieldProps) => {
  const [isFocused, setFocus] = useState(false)
  const [isFilled, setFilled] = useState(false)
  return (
    <>
      <Container
        isFocused={isFocused}
        flexible={props.flexible}
        feedback={
          props.error
            ? {
                type: 'warning',
              }
            : props.success
            ? {
                type: 'success',
              }
            : undefined
        }
        editable={props.editable === undefined ? true : props.editable}
        readOnlyBackgroundColor={props.readOnlyBackgroundColor}
        isGrey={props.isGrey}
        bigger={props.bigger}
      >
        <Field
          {...props}
          editable={props.editable === undefined ? true : props.editable}
          secureTextEntry={props.isPassword}
          isTextGrey={props.value === '0'}
          placeholderTextColor={'#999'}
          onFocus={() => {
            setFocus(!isFocused)
          }}
          onBlur={() => {
            setFocus(!isFocused)
          }}
          onChangeText={(text: string) => {
            props.onChangeText && props.onChangeText(text)
            setFilled(text.length > 0)
          }}
        />
        {props.showLabel && (
          <>
            <Label
              readOnlyBackgroundColor={props.readOnlyBackgroundColor}
              lessPadding={props.lessPadding}
              colorFloating={props.colorFloating}
              backgroundColorFloating={props.backgroundColorFloating}
              editable={true}
              isFloating={
                isFocused ||
                isFilled ||
                !!props.value ||
                !!props.labelAlwaysFloat
              }
              floatedLeft={props.labelPosition}
              feedback={props.feedback}
              isGrey={props.isGrey}
            >
              {props.label}
            </Label>
            {(props.error || props.success) && (
              <Icon source={props.error ? Error : Success} size={20} />
            )}
          </>
        )}
      </Container>
      {props.feedback && <Toaster {...props.feedback} />}
    </>
  )
}

TextField.defaultProps = {
  showLabel: true,
}

export default TextField
