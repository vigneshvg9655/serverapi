function createuser(){
    fetch('http://localhost:3000/post', {
          method: 'POST',
          body: json.stringify({
           firstname:document.getElementById("firstname").value,
           scondname: document.getElementById("scondname").value,
           phone: document.getElementById("phone").value,
           email: document.getElementById("email").value,
           messsages: document.getElementById("messsages").value,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      }