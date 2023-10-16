# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: https://github.com/Olumightty/Newsletter-sign-up.git
- Live Site URL: https://olumightty.github.io/Newsletter-sign-up/


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- DOM Manipulation


### What I learned

- How to use and submit forms (setting the action and method of the form)
- Labels and Input element attributes

```html
<input name= "" id = "" placeholder= "" type = "" required>
```

- How to access the submited forms in another website using javascript

```js
var result = window.location.search
var params = new URLSearchParams(result)
var content = params.get("name attribute of input")
```
- How to use CSS to set the type of cursor to display when hovering over an element

```css
.class{
  cursor: pointer;
}
```


If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

- Know how to use all the input element types
- Practice more on javascript and DOM Manipulation

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - How to use Input element in HTML 5
- [Google Fonts](https://fonts.google.com/) - To obtain various letter fonts



## Author

- Frontend Mentor - [@Olumightty](https://www.frontendmentor.io/profile/Olumightty)
- GitHub - [@Olumightty](https://github.com/Olumightty)
- Instagram - [that.olu](https://www.instagram.com/that.olu/)


## Acknowledgments

- Dr. Angela Yu for the Web development tutorials on Udemy
- Random Youtube totorials out there, for the learning of the "input" html element

