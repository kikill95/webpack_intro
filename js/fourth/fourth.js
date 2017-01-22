import $ from 'jquery';

export default function() {
    // es7
    // async - await
    // promises. Example: https://github.com/kikill95/nodejs-servers/blob/master/express/index.html
    function getRandomPonyFooArticle() {
        return new Promise((resolve, reject) => {
            $.get('http://api.alice.com/cors', (res, body) => {
                resolve(body);
            }).catch(err => {
                if (err) {
                    // reject(err);
                    resolve('Tested'); // we resolved for example
                    return;
                }
            });
        });
    }

    read();

    async function read() {
        var result = await getRandomPonyFooArticle();
        // console.log(result);
    }
}
