[![npm version](https://badge.fury.io/js/ngx-eb-avatar.svg)](https://badge.fury.io/js/ngx-eb-avatar)
# ngx-eb-avatar
ngx-eb-avatar is a lightweight avatar generator component.

## Install
```shell
npm install --save ngx-eb-avatar
```

## Usage
Import the main moduel:

```javascript
import { NgxEbAvatarModule } from 'ngx-eb-avatar';
```
Add the following to your template:

``` html
    <ngx-eb-avatar name="Your Name" 
                  [shadow]="true" 
                  width="50" 
                  height="50" 
                  bgColor="337ab7" 
                  fontColor="FFFFFF">
    </ngx-eb-avatar>
```
## Configuration

| option | type | 
| ------ | ---- | 
| name | string | 
| shadow | boolean |
| width | number |
| height | number |
| bgColor | string |
| fontColor | string |

** bgColor and fontColor** use HTML Hex color codes with the # sign.
