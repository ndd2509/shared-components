# @shared-components/core

Shared React Native components library with reusable UI components.

## Installation

```bash
npm install @shared-components/core
# or
yarn add @shared-components/core
```

## Components

- **BaseButton** - Customizable button with variants (primary, link-subtle, red, brand-subtle) and sizes
- **BaseText** - Typography component with consistent text styling
- **BaseContainer** - Container wrapper with header support
- **Header** - Navigation header component

## Usage

```tsx
import { BaseButton, BaseText, BaseContainer } from '@shared-components/core';

function App() {
  return (
    <BaseContainer isHeader title="My App">
      <BaseText type="Bold" size={16}>
        Hello World
      </BaseText>
      <BaseButton 
        variant="primary" 
        size="regular"
        label="Click Me"
        onPress={() => console.log('Pressed')}
      />
    </BaseContainer>
  );
}
```

## Peer Dependencies

- react >= 18.0.0
- react-native >= 0.70.0

## License

MIT
