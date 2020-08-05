let addressUser = [];

window.onload = function() {
    getUser()
  
  }
const getUser = () => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => {
          addressUser = data.results;

          addressUser.map(user => {
            let allUsers = document.getElementById('user-entries');
            let li = document.createElement('li');
            let image = document.createElement('img');
            image.setAttribute('src', user.picture.thumbnail);
            // button.setAttribute('onclick', expand() )

            let hidden = document.createElement('div');
            hidden.classList.add('collapse');
            let hiddenTxt = document.createTextNode(`Email: ${user.email}`);
            hidden.appendChild(hiddenTxt);

            let button = document.createElement('button')
            let text = document.createTextNode(`Name: ${user.name.first}  ${user.name.last} `);
            let buttonText = document.createTextNode('button')
            button.appendChild(buttonText);


            li.appendChild(text);
            li.appendChild(image);
            li.appendChild(button);
            li.appendChild(hidden);
            allUsers.append(li);
          })

          console.log(addressUser)
      }) 
  }

