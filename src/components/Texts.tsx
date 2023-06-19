import styled from 'styled-components/native'

import { themes } from '../config/themes'

interface IText {
  Title?: any
  MinorTitle?: any
  Description?: any
  MinorDescription?: any
  Regular?: any
}

export const Text: IText = {}

export const Title = styled.Text<{ fontFamily: string }>`
  font-size: 20px;
  line-height: 24px;
  color: ${themes.light.titleTextColor};
  font-family: ${(props) => props.fontFamily}-Bold;
  margin-bottom: 8px;
`

export const MinorTitle = styled.Text<{ fontFamily: string }>`
  font-size: 16px;
  line-height: 19px;
  color: ${themes.light.titleTextColor};
  font-family: ${(props) => props.fontFamily}-Bold;
  margin-bottom: 8px;
`

export const Description = styled.Text<{ fontFamily: string }>`
  font-size: 14px;
  line-height: 17px;
  color: ${themes.light.titleTextColor};
  font-family: ${(props) => props.fontFamily}-Bold;
  margin-bottom: 8px;
`
export const MinorDescription = styled.Text<{ fontFamily: string }>`
  font-size: 14px;
  line-height: 17px;
  color: ${themes.light.titleTextColor};
  font-family: ${(props) => props.fontFamily}-Medium;
  margin-bottom: 8px;
`
export const Regular = styled.Text<{ fontFamily: string }>`
  font-size: 14px;
  line-height: 20px;
  color: ${themes.light.titleTextColor};
  font-family: ${(props) => props.fontFamily}-Regular;
  margin-bottom: 8px;
`
