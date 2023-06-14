import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { themes } from '../config/themes'
import Dropdown from '../images/dropdown.png'
import { Icon } from './Icons'

interface DropDownActionsOptions {
  title: string
  icon?: string
  onPress: () => void
}

interface DropDownActionsProps {
  icon?: string
  iconColor?: string
  options: DropDownActionsOptions[]
  hasLabel?: boolean
  changeIsOpen?: (isOpen: boolean) => void
  selected?: string
  spotlight?: boolean
}

const DropDownButton = styled.TouchableOpacity<{ hasLabel?: boolean }>`
  ${(props) => props.hasLabel && 'padding-left: 0;'}
`

const DropDownIconContainer = styled.View<{
  pressed: boolean
  hasLabel?: boolean
}>`
  background-color: ${({ pressed }) =>
    pressed ? 'transparent' : 'transparent'};
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  ${(props) =>
    props.hasLabel &&
    `
  border-radius: 8px;
  border-color: ${themes.light.titleTextColor};
  border-width: 1px;
  font-family: 'Montserrat-Regular';
  color: ${themes.light.titleTextColor};
  height: 48px;
  padding-right: 24px;
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  `}
`

const DropDownList = styled.View<{ hasLabel?: boolean }>`
  background: transparent;
  border-radius: 8px;
  ${(props) =>
    props.hasLabel &&
    `
  background: transparent;
  border-radius: 8px;

  width: 100%;
  z-index: 10;
  overflow: hidden;
  border-color: #999;
  border-width: 1px;
  elevation: 4;
  `}
`

const DropDownItem = styled.View`
  padding: 18px;
  display: flex;
  flex-direction: row;
`

const Label = styled.Text`
  color: ${themes.light.titleTextColor};
  font-family: 'Montserrat-Regular';
  font-size: 14px;
  letter-spacing: -0.016px;
  margin-left: 10px;
`

export const DropDown = (props: DropDownActionsProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)

  return (
    <>
      <DropDownButton
        hasLabel={props.hasLabel}
        onPress={() => {
          setDropdownVisible(!dropdownVisible)
          if (props.changeIsOpen) {
            props.changeIsOpen(dropdownVisible)
          }
        }}
      >
        <DropDownIconContainer
          hasLabel={props.hasLabel}
          pressed={dropdownVisible}
        >
          {props.hasLabel && <Label>{props.selected}</Label>}
          <Icon source={Dropdown} />
        </DropDownIconContainer>
      </DropDownButton>
      {dropdownVisible && (
        <DropDownList testID='dropdown-actions-list' hasLabel={props.hasLabel}>
          {props.options.map((option, item) =>
            props.selected === option.title ? null : (
              <TouchableOpacity
                onPress={() => {
                  option.onPress()
                  setDropdownVisible(false)
                  if (props.changeIsOpen) {
                    props.changeIsOpen(true)
                  }
                }}
                key={`report-card-${item}`}
              >
                <DropDownItem>
                  <Label>{option.title}</Label>
                </DropDownItem>
              </TouchableOpacity>
            )
          )}
        </DropDownList>
      )}
    </>
  )
}

export default DropDown
