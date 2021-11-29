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
| Prop                        | Description                                                                           | Type                          | Default Value              | Required |
| :--------------------------:|:--------------------------------------------------------------------------------------|:-----------------------------:|:--------------------------:|:--------:|
| value                       | switch state value                                                                    | Boolean                       |                            | true     |
| onChange                    | Callback on switch value change                                                       | Function                      |  (value: boolean) => void; | true     |

## License
This project is licenced under the MIT License.
