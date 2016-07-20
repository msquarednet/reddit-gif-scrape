import jsonp from 'jsonp';

class RedditAPI {
  constructor() {
    this.url = 'https://www.reddit.com/r/perfectloops/top.json?sort=top&t=week';
  }
  load() {
    //console.log('RedditAPI.load() called...');
    return new Promise((resolve, reject)=>{
      jsonp(this.url, {param:'jsonp'}, (err,data)=>{
        //console.log(data);
        //extract GIF here? Nah, create surrounding promise instead
        err ? reject(err) : resolve(data.data.children);
      });
    })
  }
}


export default new RedditAPI(); //singleton