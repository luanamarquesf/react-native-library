# RN Components Library

## Installation

My first react native components library

```bash
npm i react-native-first-components-library
```

## Usage

```python
import TextField from 'react-native-first-components-library'
import {colors} from 'react-native-first-components-library'

<Title fontFamily='Roboto'>Title</Title>
<TextField
  label="Seu email"
  onChangeText={setText}
  keyboardType="email-address"
  autoCapitalize="none"
  feedback={feedBack}
  accessibilityLabel="Digite seu email. Caixa de edição"
  bigger
/>
<Checkbox checked={check} theme={'dark'} />
<ActionButton label={'Button'} color={colors.blue200} height={42} onPress={() => {}} />
```
![Example](https://github.com/luanamarquesf/react-native-library/tree/main/example/example01.png?raw=true)
![Example](https://github.com/luanamarquesf/react-native-library/tree/main/example/example02.png?raw=true)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)