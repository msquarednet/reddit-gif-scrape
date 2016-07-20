export default (posts) => {
  //console.log('ExtractGifs...');
  let urls = posts
    .filter(post => !post.data.over_18)
    .map(post => post.data.url)
    .filter(url => /gifv?$/.exec(url))
    .map(url => url.replace(/v$/,''));
  console.log(urls);
  return urls;
}