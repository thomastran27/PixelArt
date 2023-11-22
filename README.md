# PixelArt
Pixel art maker for CS 152 @ SJSU

## Setup

```sh
npm install
```

## Run

```sh
npm start
```


## If you encounter this error when trying to run: "Error: error:0308010C:digital envelope routines::unsupported"
Follow the steps in order:
For WLS:
```sh
export NODE_OPTIONS=--openssl-legacy-provider
```
For Windows Command Prompt:
```sh
set NODE_OPTIONS=--openssl-legacy-provider

```

```sh
npm start
```

### Make sure you are on Node version 18.17.0 or higher.

```sh
nvm install 18.17.0
```
```sh
nvm use 18.17.0
```
