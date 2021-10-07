# krit

An easily configurable personal website template in React with great visuals.

## Set up

For setting up, you will need [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads).

## Usage

Open command line or terminal. Clone the project, install dependencies and run it.

```sh
# Clone the project
$ git clone https://github.com/9inpachi/krit.git

# Move into the directory containing the cloned project
$ cd krit

# Install dependencies using npm
$ npm i

# Run a development version of the project
$ npm run start
```

## Configuration

This is the best part. **krit** is easily configurable so that you can make your own personal website out of it!
All the configurable options exist inside [src/config/index.js](src/config/index.js).

Inside the file, there are 3 variable objects which contain all the information.

1. **CommonConfig**

    This variable contains all the common configuration of your profile including your name, your social links and the path to draw the signature.

1. **ProjectsConfig**

    This variable contains all the information which will be part of the projects section. Here you can add your own projects and provide a link for them and also change the icon as per your liking.

1. **CustomSectionsConfig**

    Now this is the fun part. This variable is an array which can hold any number of sections. Here you can define any of your custom sections may it be "Work", "Reviews", "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it however you like!

## Deploying / building

While you are in the root directory of the project, run the following command.

```sh
$ npm run build
```

This will put the built application in the `./build` directory which can be copied to a server.
