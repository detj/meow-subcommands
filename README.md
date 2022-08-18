# Subcommands in meow

A simple proof-of-concept prototype demonstrating a way to implement subcommands using [meow](https://github.com/sindresorhus/meow).

> Proof of Concept: This project is not a library or utility. It exists just for demonstration purpose.

## Why?

[meow](https://github.com/sindresorhus/meow) is nice and simple. You can use it to quickly build CLI utilities for whatever that you wanna do. But, it doesn't support an extra layer of commands natively. If you wish to design your interface like the Docker CLI or git CLI but with meow, then you might find this useful.

```sh
$ docker ps ...
$ docker run ...
```

## Installation

After cloning, install dependencies

```sh
npm install
```

## Usage

Try out these commands

```sh
node index --help
node index -h
node index --version
node index -v

node index walk
node index run
node index walk --help
node index run --help

node index walk --slow
node index walk -s
node index walk --fast
node index walk -f
```

## Issues

If you have any question, feel free to [open an issue](https://github.com/detj/meow-subcommands/issues).
