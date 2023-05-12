 




 function insert(){
 
    fetch('http://localhost:4000/post', {
           method: 'POST',
           body: JSON.stringify({
             sname: document.getElementById("sname").value,
             fname: document.getElementById("fname").value,
             email: document.getElementById("email").value,
             messages: document.getElementById("messages").value,
           }),
           headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
         })
           .then((response) => response.json())
           .then((json) => console.log(json));
       }
   
       function getAllList() {
        fetch('http://localhost:4000/GET')
          .then(res => res.json())
          .then(user => {
      
            console.log(user)
      
            html = ""
      
            user.forEach(e => {html += `<tr>
                <td>${e.id}</td>
       <td>${e.sname}</td>
       <td>${e.fname}</td>
       <td>${e.email}</td>
       <td>${e.messages}</td>
       <td><button type="button" class="btn btn-primary" onclick="edit(${e.id})">Edit</button></td>
       <td><button type="button" class="btn btn-primary" onclick="deleted(${e.id})">Delete</button></td>
       
      
       </tr>`
      
            });
      
            console.log(html)
      
            document.getElementsByTagName("tbody")[0].innerHTML = html
          }).catch((err) => {
            console.log('DDD', err)
          })
        
      }
      
      getAllList()  
      
      
       