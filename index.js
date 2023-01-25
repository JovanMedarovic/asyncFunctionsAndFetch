const skupljanjeNovca = () => {
  return new Promise(skupljenNovac => {
    setTimeout(() => { skupljenNovac('Give back 200$') }, 5000);
  });
}


const pozajmica = async () => {
  console.log('Give 200$');
  const result = await skupljanjeNovca();
  console.log(result);
}

pozajmica();

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST', // -GET- , PUT, DELETE ...
    headers: {
      'Contet-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getData = async (url = '') => {
  const response = await fetch(url);
  return response.json();
};

getData('https://jsonplaceholder.typicode.com/todos/1').then(res=>{console.log(res)})