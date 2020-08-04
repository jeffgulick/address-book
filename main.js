let addressUser = [];

window.onload = function() {
    getUser()
  
  }
const getUser = () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
          const user = data.results[0]
          console.log(user);
          const allUsers = document.getElementById('user-entries');
          const li = document.createElement('li');
          const image = document.createElement('img');
          image.setAttribute('src', user.picture.thumbnail);
          const text = document.createTextNode(`Name: ${user.name.first} `)
          li.appendChild(text)
          li.appendChild(image)
          allUsers.append(li)
      }) 
  }

