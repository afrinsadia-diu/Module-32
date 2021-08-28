fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))



  function clickme(data){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(clicks => console.log(clicks));
  };

  function createData (data){
    const ul = document.getElementById(users);
    for(const user of data){
      const li = document.creatElement('li');
      li.innerText= "Ami tomay valobasii"
      ul.appendChild(li);
    }
  }