# Ionic2 Google Maps Native
Integrating ionic2 Google Maps Native Plugin - IonicFramework

Tested on IOS and Android

use `cordova prepare` after running `npm install` to install the proper plugins

###Use Your API KEYS Please...
if you are using the project, please update the API keys in the config.xml befire running `cordova prepare`

```xml
<plugin name="cordova-plugin-googlemaps" spec="https://github.com/phonegap-googlemaps-plugin/cordova-plugin-googlemaps">
    <variable name="API_KEY_FOR_ANDROID" value="AIzaSyBlEvVLjNRwDyd2vNECoBSsS6v_yEYc0m0" />
    <variable name="API_KEY_FOR_IOS" value="AIzaSyBlOXsfHGBOwzQyoVs-fkrjo9LC8K3GeI0" />
</plugin>
```

###Manualy Install Correct Version of Module
You MUST install the plugin from the HEAD on the github repo, using the following command, the `cordova prepare` command will use the correct version which is saved in the `config.xml`

```console
cordova plugin add https://github.com/phonegap-googlemaps-plugin/cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_API_KEY_FOR_ANDROID" --variable API_KEY_FOR_IOS="YOUR_API_KEY_FOR_IOS"
```
