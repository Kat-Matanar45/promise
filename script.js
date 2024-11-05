'use strict'

const urlGet = 'db.json';
const urlPost = 'https://jsonplaceholder.typicode.com/posts';
let body;

function sendRequest(method, url, body=null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(console.log("Ошибка"))
            } else {resolve(xhr.response)}
        };
        xhr.onerror = () => {
            reject("Ошибка сети");
        };
        xhr.send(body ? JSON.stringify(body) : null);
    })
}

sendRequest('GET', urlGet)
    .then(data => {
        body = data;
        console.log('GET response:', data);
        return sendRequest('POST', urlPost, body);})
    .catch (error => {console.log(error)})



