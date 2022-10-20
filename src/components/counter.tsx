import React from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 200px;
`
export const addOne = (input: number) => input + 1

export const Counter: React.FC<{ label: string }> = ({ label }) => {
  const [count, setCount] = React.useState(0)

  return (
    <Container>
      <Text>This is a first try for a components library! {count}</Text>
      <Button onPress={() => setCount(addOne(count))} title={label} />
    </Container>
  )
}
