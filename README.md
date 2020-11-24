# Is It Fantasy?

A quick react app that lets you know _Is it fantasy?_

This app queries the Google Books api to let you know if the book you entered in the search bar is fantasy or not.  (Also, try a non-fiction book maybe...).

## About

 I had a simple idea. An app that checks if a book is fantasy or not. It turns out, this is not such a simple idea. After searching through a few APIs, I couldn't find one easily that showed what genre a book is, as well as an image of the book cover. I

 In the end I have used `Open Library API` to discover what the genre of a book is, and then `Google Books API` to load an image of the book cover.

 In this app, a user simply types the title of a book into the search bar, and after the click to search they will be told if the book is fantasy or not.

## How To Run

Clone or fork this repository onto your computer. Make sure you are in the root directory and run the following to install:

```bash
npm i
```

You will need to add your Google Books API key to the `.env` file.

To run the app, type:

```bash
npm start
```

This runs the app in development mode. It will automatically open the app, or you can view it in your browser under [http://localhost:3000](http://localhost:3000).

## How To Test

```bash
npm test
```
