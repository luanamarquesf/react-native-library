import React, { useEffect } from 'react'
import RNComponentsLibraryModule, {
  Counter,
} from 'react-native-first-components-library'

const App = () => {
  useEffect(() => {
    console.log(RNComponentsLibraryModule)
  })

  return <Counter label={'Do something!'} />
}

export default App
