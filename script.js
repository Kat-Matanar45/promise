'use strict'

const getData = () => {
   return fetch('db.json')
        .then(response => response.json())
        .catch(error => {console.log(error)})
};

const sendData = () => {
    getData()
        .then(object => {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  }
            })
                .then(response => response.json()) 
                .then(result => console.log('Результат:', result))
                .catch(error => console.log('Ошибка:', error));
        }) 
};

sendData();