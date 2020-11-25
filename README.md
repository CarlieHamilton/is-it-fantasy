# Is It Fantasy?

A quick react app that lets you know _Is it fantasy?_

This app queries the Google Books api to let you know if the book you entered in the search bar is fantasy or not.

## About

 I had a simple idea. An app that checks if a book is fantasy or not. It turns out, this is not such a simple idea. After searching through a few APIs, I couldn't find one easily that showed what genre a book is, as well as an image of the book cover.

 In the end I have used `Open Library API` to discover what is the genre of a book.

 In this app, a user simply types the title of a book into the search bar, and after the click to search they will be told if the book is fantasy or not.

## How To Run

Clone or fork this repository onto your computer. Make sure you are in the root directory and run the following to install:

```bash
npm i
```

To run the app, type:

```bash
npm start
```

This runs the app in development mode. It will automatically open the app, or you can view it in your browser under [http://localhost:3000](http://localhost:3000).

## Limitations

Currently this app only checks the first book that comes back from the API to see if it has the genre (or "subject", as it is called in the API) "fantasy". There is also only limited error checking. Future iterations would allow you to select which book you meant, for example, and show an image of the book you searched for.

## How To Test

```bash
npm test
```
