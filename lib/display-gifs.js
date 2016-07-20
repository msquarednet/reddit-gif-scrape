export default (urls) => {
  let el = document.querySelector('#gifs');
  el.innerHTML = urls.map(url => `<img src="${url}">`).join('\n');
}