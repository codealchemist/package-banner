# pkg-banner

Easily print ASCII art and package name and version when you run your CLI tool.

## How it works?

Import it and use it in your main package file.

```
import pkgBanner from 'pkg-banner'

// Having `index.js`, the main package file, inside `/src`.
// We use the second param to go up one level to get the project's root folder,
// where `package.json` will most likely be placed.
pkgBanner(import.meta.url, '../')
```

Getting the calling node module path is really hard if not impossible in node :(

This is why we have this two params being passed to `pkgBanner`.

If you're using CommonJS:

```
const pkgBanner = require('pkg-banner')

pkgBanner.default(__filename, '../')

```

## Get app dir

`pkgBanner([main-package-file], [[subdir]])`

If your package is of type module (ESM) you can get the main file with `import.meta.url`.

The second argument specifies a sub directory, which is useful if your main file lives
inside `[root]/src` for example, in which case you need to go up one level to get the app dir
or root dir.

If you're using CommonJS you can get the main file with `__filename`.

## Motivation

Automate the process of reading and printing the project's ASCII art, package name and version.

It's not a crazy amount of effort, but why not just import a package to solve it once and for all?

I didn't find an existing package that does exactly what I needed, so here's `pkg-banner`.

## ASCII art

If there's a file called `ascii-art.txt` at your project's root `pkg-banner` will read it
and print it.

To keep it simple, there's no option to customize this.
