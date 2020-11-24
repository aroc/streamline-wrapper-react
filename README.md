# React wrapper for Streamline icons and illustrations

This is a small React library which allows you to render Streamline SVG icons and illustrations.

## How to install

1. `yarn add @streamlinehq/streamline-wrapper-react`

## How to use

Check `docs/example-react-app` project created with CRA to see it in use.

```
import StreamlineIcon from '@streamlinehq/streamline-wrapper-react'
// Imported as Streamline's Icon type. Check source for more details
import HouseIcon from './icon'

const IconsList = () => (
    <div>
        <StreamlineIcon icon={HouseIcon}/>
    </div>
)

``` 

## More info

- It has full Typescript support
- It has 0 dependencies
