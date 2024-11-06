'use strict'

const sendData = (object) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(response => response.json())
        .then(result => console.log('Результат:', result))
        .catch(error => console.log('Ошибка:', error))
};

const getData = () => {
    return fetch('db.json')
        .then(response => response.json())
        .then(result => {
            console.log('Результат:', result);
            return result
        })
        .catch(error => {
            console.log(error)
        })
};

getData()
    .then(result => {
        sendData(result)
    });