import React, { useEffect, useState } from 'react'
import TextField from '../../src/components/TextField'
import { Container } from '../../src/components/Container'
import { Title, Description, MinorTitle, MinorDescription, Regular } from '../../src/components/Texts'
import { ToasterProps } from '../../src/components/Toaster';
import DropDown from '../../src/components/Dropdown';
import { Checkbox } from '../../src/components/Checkbox';
import { TouchableOpacity } from 'react-native';
import { RadioButton } from '../../src/components/RadioButton';
import { Toggle } from '../../src/components/Toggle';
import ActionButton from '../../src/components/Button';
import { colors } from '../../src/config/themes';

const App = () => {
  const [text, setText] = useState('')
  const [feedBack, setFeedback] = useState<ToasterProps>();
  //   setEmailFeedback(type: 'warning', message: 'E-mail inválido' });
  const [isFocused, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Dúvidas')
  const [check, setCheck] = useState(false)
  const [marked, setMarked] = useState(false)
  const [toggle, setToggle] = useState(false)

  return (
    <Container>
      <Title fontFamily='Roboto'>Title</Title>
      <MinorTitle fontFamily='Roboto'>MinorTitle</MinorTitle>
      <Description fontFamily='Roboto' >Description</Description>
      <MinorDescription fontFamily='Roboto'>MinorDescription</MinorDescription>
      <Regular fontFamily='Roboto'>Regular</Regular>

      <TextField
        label="Seu email"
        onChangeText={setText}
        keyboardType="email-address"
        autoCapitalize="none"
        feedback={feedBack}
        accessibilityLabel="Digite seu email. Caixa de edição"
        bigger
      />
      <TextField
        label="Erro"
        onChangeText={setText}
        keyboardType="email-address"
        autoCapitalize="none"
        feedback={feedBack}
        accessibilityLabel="Caixa de edição"
        bigger
        error
      />
      <TextField
        label="Sucesso"
        onChangeText={setText}
        keyboardType="email-address"
        autoCapitalize="none"
        feedback={feedBack}
        accessibilityLabel="Caixa de edição"
        bigger
        success
      />
      <DropDown
        changeIsOpen={setIsOpen}
        selected={selectedItem}
        hasLabel
        icon="chevron-down"
        options={[
          {
            title: 'Dúvidas',
            onPress: () => setSelectedItem('Dúvidas'),
          },
          {
            title: 'Elogios',
            onPress: () => setSelectedItem('Elogios'),
          },
          {
            title: 'Renovação automática',
            onPress: () => setSelectedItem('Renovação automática'),
          },
          {
            title: 'Cancelamento de Assinatura',
            onPress: () => setSelectedItem('Cancelamento de Assinatura'),
          },
          {
            title: 'Dúvidas sobre ativos',
            onPress: () => setSelectedItem('Dúvidas sobre ativos'),
          },
        ]}
      />
      <>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          <Checkbox checked={check} theme={'dark'} />
          <Checkbox checked={!check} theme={'dark'} />
        </TouchableOpacity>
        <Checkbox checked={!check} theme={'light'} />
        <Checkbox checked={check} theme={'light'} />
      </>
      <>
        <TouchableOpacity onPress={() => setMarked(!marked)}>
          <RadioButton checked={marked} theme={'dark'} />
          <RadioButton checked={!marked} theme={'dark'} />
        </TouchableOpacity>
        <RadioButton checked={!marked} theme={'light'} />
        <RadioButton checked={marked} theme={'light'} />
      </>
      <>
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <Toggle checked={toggle} theme={'dark'} />
          <Toggle checked={!toggle} theme={'dark'} />
        </TouchableOpacity>
        <Toggle checked={!toggle} theme={'light'} />
        <Toggle checked={toggle} theme={'light'} />
      </>

      <ActionButton label={'Button'} labelSize={12} color={colors.blue100} height={42} onPress={() => {}} />
      <ActionButton label={'Button'} color={colors.blue150} height={42} onPress={() => {}} />
      <ActionButton label={'Button'} color={colors.blue200} height={42} onPress={() => {}} />
      <ActionButton label={'Button'} color={colors.grey300} height={42} onPress={() => {}} />

    </Container>
  )
}

export default App
