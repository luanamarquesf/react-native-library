import { NativeModules } from 'react-native'

import ActionButton from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Container } from './components/Container'
import DropDown from './components/Dropdown'
import { RadioButton } from './components/RadioButton'
import TextField from './components/TextField'
import {
  Description,
  MinorDescription,
  MinorTitle,
  Regular,
  Title,
} from './components/Texts'
import { ToasterProps } from './components/Toaster'
import { Toggle } from './components/Toggle'
import { colors } from './config/themes'

export {
  ActionButton,
  Checkbox,
  colors,
  Container,
  Description,
  DropDown,
  MinorDescription,
  MinorTitle,
  RadioButton,
  Regular,
  TextField,
  Title,
  ToasterProps,
  Toggle,
}

export default NativeModules.RNComponentsLibraryModule
