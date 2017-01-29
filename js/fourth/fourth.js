import $ from 'jquery';

export default function() {
    // es7
    // async - await
    // Nice example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

    // promises. Example: https://github.com/kikill95/nodejs-servers/blob/master/express/index.html
    function getRandomPonyFooArticle() {
      return new Promise((resolve, reject) => {
        $.get('https://111crossorigin.me/https://google.com', (res, status) => {
          resolve(status);
        }).catch(err => {
          if (err) {
            reject(err);
          }
        });
      });
    }

    read()
      .then(function(result) {
        console.log('then', result);
      })
      .catch(function(err) {
        console.log('err', err);
      });

    async function read() {
      // try {
        var result = await getRandomPonyFooArticle();
      // } catch (err) {
      //   console.log('err in the catch', err);
      //   // in this way we can handle every await one by one
      // }
      console.log('after await', result);
      return result;
    }
}
