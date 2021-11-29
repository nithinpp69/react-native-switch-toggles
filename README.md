# react-native-switch-toggles

[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![Version](https://img.shields.io/npm/v/react-native-switch-toggles.svg)](https://www.npmjs.com/package/react-native-switch-toggles)
[![npm](https://img.shields.io/npm/dt/react-native-switch-toggles.svg)](https://www.npmjs.com/package/react-native-switch-toggles)

A simple and customizable React Native switch component. 

## Demo

❤️ [Expo Snack](https://snack.expo.dev/@nithinpp69/react-native-switch-toggles)

![](demo.gif)

## Prerequisites

 ⚠️ Peer Dependencies

 * [react-native-reanimated-v2](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/)

This component has a peer dependency on react-native-reanimated-v2. react-native-reanimated-v2 has to be installed and linked into your project.
Follow [react-native-reanimated-v2](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/) to install the dependency.

## Installation

 Supported version: react-native >= 0.59.0

  ```
  npm install react-native-switch-toggles
  ```
  
  or
  
  ```
  yarn add react-native-switch-toggles
  ```
  
## Example
```
import Switch from 'react-native-switch-toggles';


const [isEnabled, setIsEnabled] = React.useState(false);
....

<Switch
  value={isEnabled}
  onChange={(value) => setIsEnabled(value)}
/>

```
![](demo.gif)

## Props
| Prop                        | Description                                                                           | Type                          | Default Value              | Required  |
| :--------------------------:|:--------------------------------------------------------------------------------------|:-----------------------------:|:--------------------------:|:---------:|
| size                        | size of the switch component                                                          | Number                        | 25                         | true      |
| value                       | switch state value                                                                    | Boolean                       |                            | true      |
| onChange                    | Callback on switch value change                                                       | Function                      |  (value: boolean) => void; | true      |
| disabled                    | enable/disable switch                                                                 | Boolean                       |  false                     | false     |
| activeTrackColor            | track color when switch value is true                                                 | String                        |  "rgba(255,255,255,0.6)" | false     |
| inactiveTrackColor          | track color when switch value is false                                                | String                        |  "rgba(0,0,0,0.2)"       | false     |
| activeThumbColor            | thumb color when switch value is true                                                 | String                        |  "#ffffff"               | false     |
| inactiveThumbColor          | thumb color when switch value is false                                                | String                        |  "#ffffff"               | false     |
| renderOnIndicator           | render a custom view on switch track when the switch value is true                    | Function                      |  () => null                | false     |
| renderOffIndicator          | render a custom view on switch track when the switch value is false                   | Function                      |  () => null                | false     |
| renderActiveThumbIcon       | render a custom view on switch thumb when the switch value is true                    | Function                      |  () => null                | false     |
| renderInactiveThumbIcon     | render a custom view on switch thumb when the switch value is false                   | Function                      |  () => null                | false     |

## License
This project is licenced under the MIT License.
