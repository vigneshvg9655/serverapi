 




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

       
       function edit(id) {
        // uniqueId=id;
        fetch('http://localhost:4000/' + id)
          .then((response) => response.json())
          .then((res) => {
            // console.log(res)
            console.log('DDDD',res)
            // json.forEach(e=>{
              // let{}=e[0]
            
             document.getElementById("sname").value=res[0].sname;
            document.getElementById("fname").value=res[0].fname;
          document.getElementById("email").value=res[0].email;
             document.getElementById("messages").value=res[0].messages;
           document.getElementById('mvg').textContent = "Update";
    
        //    mvg.setAttribute("userid",id)
          //  update();
           getAllList()
            
      });
    }

    function update(){
  

        let id=mvg.getAttribute('userId')
      
        //  console.log(uniqueId,"vgggggg")
        fetch('http://localhost:4000/update/', {
              method: 'PUT',
              body: JSON.stringify({
                
               firstname:document.getElementById("firstname").value,
               scondname: document.getElementById("scondname").value,
               phone: document.getElementById("phone").value,
               email: document.getElementById("email").value,
               messsages: document.getElementById("messsages").value,
               
               id:id,
                // id:mvg.getAttribute('userId'),
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then((response) => response.json())
              .then(() => {
                getAllList()
              });
            
          }
      












       function getAllList() {
        fetch('http://localhost:4000/GET')
          .then(res => res.json())
          .then(user => {
      
            console.log(user)
      
            html = ""
      
            user.forEach(e => {html += `<tr>
                <td>${e.id}</td>
       <td>${e.sname} </td>
       <td>${e.fname}</td>
       <td>${e.email}</td>
       <td>${e.messages}</td>
       <td><button type="button" class="btn btn-primary" onclick="intable([${e.id}])">Edit</button></td>
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
      function intable(){
        fetch('http://localhost:4000/GET')
          .then(res => res.json())
          .then(user => {
      
            console.log(user)
      
            html = ""
      
            user.forEach(e => {html += `<tr>
                
            <form id="intable">
       <td>
       <div class="input-group mb-3">
        
       <input type="text" class="form-control"   id="sname" name="sname" placeholder="sname" aria-label="Username" aria-describedby="basic-addon1">
     </div>
       </td>
       <td>
       <div class="input-group mb-3">
        
        <input type="text" class="form-control"   id="fname" name="fname"  placeholder="email"  aria-label="Username" aria-describedby="basic-addon1">
      </div></td>
       <td>
       <div class="input-group mb-3">
        
       <input type="text" class="form-control"  id="email" name="email"  placeholder="email"  aria-label="Username" aria-describedby="basic-addon1">
    </td>
       <td>
       <div class="input-group mb-3">
        
       <input type="text" class="form-control"    id="messages" name="messages"  placeholder="messages"  aria-label="Username" aria-describedby="basic-addon1">
     </div>
     </td>
       <td><button type="button" class="btn btn-primary" onclick="">submit</button></td>
       <td><button type="button" class="btn btn-primary" onclick="update()">update</button></td>
       
      </form>
       </tr>`
    
            });
      
            console.log(html)
      
            document.getElementsByTagName("tbody")[0].innerHTML = html
          }).catch((err) => {
            console.log('DDD', err)
          })
        
      }
      
     
      
      
       