import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    justifyContent: 'center',
  },
}))`
  padding: 24px;
  margin-top: ${Platform.OS === 'ios' ? 24 : 0}px;
  padding-bottom: 82px;
`
