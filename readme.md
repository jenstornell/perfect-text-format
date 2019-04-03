# Perfect text format

*Version 1.0*

This is a serious attempt to create the perfect text format for readability.

![Screenshot](screenshot.png)

## In short

- Neutral feeling, not branded in any way.
- The most common content tags are supported.
- Perfect balanced colors for eye comfort.
- Maximum readability because of perfect font families, letter spacings, line heights and font sizes.
- Maximum scanability because of perfect spaces between elements (paddings/margins).

If you disagree, add an issue.

## Tags supported

- a
- blockquote
- br
- cite
- code
- img
- em
- h1-h4
- li
- ol
- p
- pre
- strong
- table
- td
- th
- ul

## About the text format

If it's not yet perfect, I want an issue from you what you want to improve and how.

### The fonts

- Default - [Roboto](https://fonts.google.com/specimen/Roboto)
- `h1` - [Fira sans](https://fonts.google.com/specimen/Fira+Sans)
- `code` - [PT Mono](https://fonts.google.com/specimen/PT+Mono)

### Other things

- Default line height: `1.4`
- Default text color: `#444`
- Link color: `#0074d9` taken from https://clrs.cc/

### This and that

- **Code:** If you use code and it overflows, you will see a scrollbar. It's styled up but so far it will only work in webkit browsers.
- **Blockquote:** A fat solid left line indicate that it's a blockquote. You can use elements inside it as well.
- **Images:** In case an image is too wide, it will shrink to the max width of the text container.
- The font size is fluid and responsive. It will be larger on larger screens and smaller on smaller screens.

## Table

Table headings `th` is black. The table rows containing `td` is white but every odd line is light gray.

## FAQ

### There is no such thing as a perfect text format?

It's probably debatable, but I think it is. Take away everything that has to do with branding. What do we have left? Readability!

- Is a font size of 16px more readable than 10px? **Yes!**
- Is the color #333 more readable than #ccc? **Yes!**

Fine tune every little value like this and we will eventually get the perfect text format. For readability that is, not for brandning.

### Why use Google fonts?

- They are common and free
- They are beautiful and are placed on a fast CDN
- It's possible to download them and host them yourself if needed

### Why not use Bootstrap?

[Bootstrap](https://getbootstrap.com/) and other frameworks contain very much. Most of that stuff is not needed.

## Libraries used

- [Boom Lorem Ipsum](https://www.boom-online.co.uk/lorem-ipsum/)
- [Colors - The New Defaults](https://clrs.cc/)

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT