# grunt-webfont

A docker image encapsulating https://github.com/sapegin/grunt-webfont.

## Usage

For a very basic setup, you can simply mount in two directories (one containing
the source SVGs to build a font from & the other where you want emitted fonts
/CSS files), and run the container.

```
docker run \
  --volume "$PWD:/src" \
  --volume "$PWD/build:/dest" \
  --tty \
  thorisalaptop/grunt-webfont
```

If you wish to further customize grunt-webfont's behavior, you can write your
own `Gruntfile.js`, mount it into the container, and specify it:

```
docker run \
  --volume "Gruntfile.js:/Gruntfile.js" \
  --volume "$PWD.src:/src" \
  --volume "$PWD/build:/dest" \
  --tty \
  thorisalaptop/grunt-webfont \
  --gruntfile /Gruntfile.js
```
