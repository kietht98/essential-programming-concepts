---
title: "Using nvm to change Node.JS version"
description: "Parcel combines a great out-of-the-box development experience"
pubDate: "Jul 08 2022"
heroImage: "/install-nvm.png"
---

Using nvm to change Node.JS version

#

To get started changing your Node.JS version, you will need to install nvm, which stands for node version management. To install nvm, you can do it by running the following script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Alternatively, you can install it with wget:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

After it is installed, you have to run the following command to start using it immediately - simply copy and paste this into your terminal and press enter to get going:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

To test this has worked, write nvm into terminal, and press enter. You should be greeted with the nvm help functions.

Changing Node.JS version with nvm

#

To change Node.JS versions, we have to first download the version we want. Make sure you have nvm installed first. If you don't know the version you want to install, type nvm ls-remote to get a full list of all installable Node.JS versions.

Next, when you have selected the version you want to install, use nvm install to install it. The below code will install Node.JS v17.0.1:

```
nvm install 17.0.1
```

If you simply want to install the latest stable version of Node.JS, you can use the following command:

```
nvm install node
```

You can also use nvm install --lts instead!

Once the installation has finished, use the nvm use command to ensure the correct version is being used. The below code will ensure v17.0.1 is being used:

```
nvm use 17.0.1
```

As before, nvm use node or nvm use --lts will use the latest stable version. Now you have installed and changed your Node.JS version using nvm.

Upgrading an old project to a new Node.JS version

#

If you have been stuck on an old version of Node.JS, your project may be dependent on old versions of packages. To fully upgrade your old package.json after changing Node.JS version, you can use the npm package, npm-check-updates.

To install npm-check-updates, use cd to move into the directory you want to upgrade. Then run the following command:

```
npx npm-check-updates
```

You will be asked to install npm-check-updates - type 'y' and then press enter.

After the installation is complete, you will be given a list of possible upgrades for your package.json. If you wish to proceed, run ncu -u to fully upgrade your package.json.
