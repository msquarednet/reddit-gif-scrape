import RedditAPI from './reddit-api';
import ExtractGifs from './extract-gifs';
import DisplayGifs from './display-gifs';

RedditAPI.load()
  ////.then(posts => console.log(posts))
  .then(ExtractGifs)
  .then(DisplayGifs)

// // console.log('main.js : dynamically loaded');
// let state = `'compiled and loaded'`;
// console.log(`main.js : dynamically ${state}`);

//export default {};