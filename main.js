let addressUser = [];

window.onload = function() {
    getUser()
  
  }
const getUser = () => {
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(data => {
          addressUser = data.results;

          addressUser.map(user => {
            let allUsers = document.getElementById('user-entries');
            let li = document.createElement('li');
            let text = document.createTextNode(`Name: ${user.name.first}  ${user.name.last} `);
            let image = document.createElement('img');
            image.setAttribute('src', user.picture.thumbnail);

            //hidden info
            let hidden = document.createElement('div');
            let hiddenTxt = document.createTextNode(`Email: ${user.email}`);
            hidden.style.visibility = 'hidden';
            hidden.appendChild(hiddenTxt);

            let hiddenTwo = document.createElement('div');
            let hiddenTxtTwo = document.createTextNode(`City: ${user.location.city}, State: ${user.location.state}`);
            hiddenTwo.style.visibility = 'hidden';
            hiddenTwo.appendChild(hiddenTxtTwo);

            //button
            let button = document.createElement('button');
            let buttonText = document.createTextNode('More Info');
            button.onclick = function() {
              hidden.style.visibility = 'visible';
              hiddenTwo.style.visibility = 'visible'; 
            };
            button.appendChild(buttonText);

            li.appendChild(text);
            li.appendChild(image);
            li.appendChild(button);
            li.appendChild(hidden);
            li.appendChild(hiddenTwo);
            allUsers.append(li);
          })

          console.log(addressUser)
      }) 
  }

