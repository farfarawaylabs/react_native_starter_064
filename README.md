# React Native Starter

This project can be used to fast start your React Native development. It contains a React Native project configured with sensible list of packages almost any project needs.

## React Native

This project is based on React Native 0.62.2 and is using the TypeScript enabled template.

## How to use

Simply download the source code and use the react-native-rename package to rename the project. After renaming, search for the string "com.react_native_starter" and make sure all Java files were renamed correctly
See more info here: https://www.npmjs.com/package/react-native-rename

### Additional instructions

- To utilize react-native-permissions you need to edit your Pod file, your info.plist file and AndroidManifest.xml. and enable the permission you want to ask for. I left all the possible options commented out in each file

- If you are checking out the master the project configured default splash screen. To make it your own you will need to do the following:

1. For iOS, open the Images.xcasssets and replace the icons in the SplashIcon asset

2. For Android first replace the images named splash_screen.png with your own images (under android/app/src/main/res and each of the different resolution subfolders).

3. Search the repository for #424242 and replace it with the splash screen background color of your choice.

for more info check out this tutorial: https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9

## Commits

Each commit represent addition of a different package so you can easily pull from the commit you want. Each commit message describe what package was added to the project

## Tags

There are also a few tags you can pull from, each representing "a milestone" in the project. Each tag is built on top of the other.

### BASE Tag

This tag contains the following packages:

- react-native-vector-icons
- @react-native-community/async-storage
- React Navigation (all required pacakges including Stack)
- axios
- react-native-device-info
- react-native-keyboard-aware-scroll-view

### BASE_PLUS_REDUX Tag

This tag adds the redux packages:

- redux
- react-redux
- @reduxjs/toolkit

### BASE_FULLY_LOADED

This tag adds additional useful packages:

- react-native-animatable
- react-native-reanimated
- react-native-redash
- @react-native-community/react-native-permissions
- @farfarawaylabs/react-native-layout
- @farfarawaylabs/react-native-beautiful-notifications
- react-native-splash-screen

### STRUCTURE Tag

This tag adds the basic structure folders for the project. You can find all the new folders under the src folder.
Each of the new folder also has its own package.json file which allows you to import things in a much more efficient way. For example:

import X from 'screens/screenX'
instead of:
import X from '../../../screens/screenX'

### FUNCTIONALITY Tag

This tag goes one step further and actually adds basic functionality that most apps need. You can check out this tag and then simply remove/edit things and adopt the provided functionality to your needs.
Search the repository in your IDE for the string "TODO" for helpful hints on places you probably want to lok at and make your own edits.

#### Provided Functionality

- Redux: You will find a base store, slice and reducer under the "state" folder. It has the skelton code for a signin/out code and a slice holding the login use information. The provided functionality also persists the redux store after any change for offline usage.
- AppContainer.tsx: This component wraps the app and provides it with the current theme as well as the redux Store. It also uses a helper class called OfflineDataManager to load the persested redux state on app load.
- Popup notifications: The app renders the Billboard from @farfarawaylabs/react-native-beautiful-notifications so you can easily display popup notifications throughout the app.

#### Provided Navigation

You will find three stacks of screens already provided:

- AuthStack: Put here all your auth relaetd screens (login, signup, forgot password, etc)
- MainStack: This is the main stack that holds the actual app screens. It is implemenetd as a Stack Navigator but you can easily change it to a TabNavigator based on your needs

The main stack also holds a walkthrough screen. The stack checks the redux store to decide if the user seen the walkthrough already or not and based on that decide wether to show it again.

The AppNavigationContainer has code that checks if the user is already logged in to decide which stack to show. You can easily edit it as your app requires.
