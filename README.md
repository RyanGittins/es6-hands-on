# Setup

## TL;DR

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install request-promise --no-save
sudo apt-get install -y inotify-tools
sudo chmod +x runner.sh

./runner.sh
```

## Details

If you want to run this on your local machine with NodeJS, you'll need an experimental copy which supports ES6 features.

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

If you want to play with promises, you'll need the `request-promise` module.

```bash
npm install request-promise --no-save
```

If you want to use the `runner.sh` script to automatically run your .js files on save, you'll need inotify-tools.

```bash
sudo apt-get install -y inotify-tools
```

You may also need to mark the script as executable.

```bash
sudo chmod +x runner.sh
```

Then you can simply start the script and it will automatically run your .js files on save.

```bash
./runner.sh
```
