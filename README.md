# React wrapper for Streamline icons and illustrations

This is a small React library which allows you to render Streamline SVG icons and illustrations.

## How to install

1. `yarn add @streamlinehq/streamline-wrapper-react`

## How to use

Check `docs/example-react-app` project created with CRA to see it in use.

```
import StreamlineIcon from '@streamlinehq/streamline-wrapper-react'
// To use a Streamline icon first import a category you want from a family you have access to, eg:
import { Home } from "@streamlinehq/streamline-light/lib/interface-essential"
// And then take the icon of your choice from that category, eg with `Home.House`.

const IconsList = () => (
    <div>
        <StreamlineIcon icon={Home.House}/>
    </div>
)

``` 

## More info

- It has full Typescript support
- It has 0 dependencies
