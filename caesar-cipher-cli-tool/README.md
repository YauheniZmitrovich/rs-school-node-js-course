# Caesar cipher CLI tool

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

CLI tool that will encode and decode a text by Caesar cipher

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

```
- node.js 12.18.4 - https://nodejs.org/en/
- yarn 1.22.0 - https://yarnpkg.com/getting-started/install
```

### Installing

```
yarn
```

## Usage <a name = "usage"></a>

### Options

CLI tool accepts 4 options:

1. -s, --shift: a shift
1. -i, --input: an input file
1. -o, --output: an output file
1. -a, --action: an action encode/decode

### Examples

```
> node index.js -a encode -s 2 -i "./test/input.txt" -o "./test/encoded.txt"
```

```
> node index.js --action encode --shift 2 --input "./test/input.txt" --output "./test/encoded.txt"
```

```
> node index.js --action decode --shift 2 --input "./test/encoded.txt" --output "./test/decoded.txt"
```

```
> node index.js --action encode --shift 2
```
