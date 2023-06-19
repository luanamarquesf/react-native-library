import styled from 'styled-components/native'

export const Icon = styled.Image.attrs<{ size?: number }>({
  resizeMode: 'contain',
})<{ size?: number }>`
  width: 12px;
  height: 12px;
  ${(props) =>
    props.size &&
    `
  width: ${props.size}px;
  height: ${props.size}px;
  `}
`
