

let form=document.getElementById('forms')
let mvg= document.getElementById('mvg');
let uniqueId;
mvg.addEventListener("click",()=>{

 if(mvg.textContent=="SendMessages"){
  createuser();
 }else{
  update();
 }
})

  function createuser() {
   
 fetch('http://localhost:3000/post', {
      method: 'POST',
      body: JSON.stringify({

        firstname: document.getElementById("firstname").value,
        scondname: document.getElementById("scondname").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        messsages: document.getElementById("messsages").value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response)
      .then(() => {
        getAllList()
      });
      
  }

  function edit(id) {
    uniqueId=id;
    fetch('http://localhost:3000/'+id)
      .then((response) => response.json())
      .then((res) => {
        // console.log(res)
        console.log('DDDD',res)
        // json.forEach(e=>{
          // let{}=e[0]
         
         document.getElementById("firstname").value=res[0].firstname;
        document.getElementById("scondname").value=res[0].scondname;
      document.getElementById("phone").value=res[0].phone;
         document.getElementById("email").value=res[0].email;
       document.getElementById("messsages").value=res[0].messsages;
       document.getElementById('mvg').textContent = "Update";
       update();
       getAllList()
        
  });
  
  }
 



function update(){
   
   console.log(uniqueId,"vgggggg")
  fetch('http://localhost:3000/update/'+ uniqueId, {
        method: 'PUT',
        body: JSON.stringify({
          
         firstname:document.getElementById("firstname").value,
         scondname: document.getElementById("scondname").value,
         phone: document.getElementById("phone").value,
         email: document.getElementById("email").value,
         messsages: document.getElementById("messsages").value,
           uid:uniqueId,
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

    function deleted(id){
        fetch(' http://localhost:3000/delete/'+ id, {
             method: 'delete',
        
             headers: {
               'Content-type': 'application/json; charset=UTF-8',
             },
           })
             .then((response) => response.json())
             .then(() => {
               getAllList()
             });
           
         }
     

    // function deleted{
    //     let uid=document.getElementById("id").value;
    //     console.log(uid,"vgggggg")
    //    fetch('http://localhost:3000/upadte/'+ uid, {
    //          method: 'PUT',
    //          body: JSON.stringify({
               
    //           firstname:document.getElementById("firstname").value,
    //           scondname: document.getElementById("scondname").value,
    //           phone: document.getElementById("phone").value,
    //           email: document.getElementById("email").value,
    //           messsages: document.getElementById("messsages").value,
    //         id:uniqueId,
    //          }),
    //          headers: {
    //            'Content-type': 'application/json; charset=UTF-8',
    //          },
    //        })
    //          .then((response) => response.json())
    //          .then((json) => {
    //            getAllList()
    //          });
           
    //      }

   

  

function getAllList() {
  fetch('http://localhost:3000/get/')
    .then(res => res.json())
    .then(user => {

      console.log(user)

      html = ""

      user.forEach(e => {html += `<tr>
          <td>${e.id}</td>
 <td>${e.firstname}</td>
 <td>${e.scondname}</td>
 <td>${e.phone}</td>
 <td>${e.email}</td>
 <td>${e.messsages}</td>
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


  // function edit(id) {
  //   fetch('http://localhost:3000/'+id)
  //     .then((response) => response.json())
  //     .then((json) => {console.log(json)
  //       json.forEach(e=>{
  //         console.log(e,'fghj')
  //         // let{}=e[0]
  //         document.getElementById("id").value=e.id,
  //        document.getElementById("firstname").value=e.firstname,
  //       document.getElementById("scondname").value=e.scondname,
  //     document.getElementById("phone").value=e.phone,
  //        document.getElementById("email").value=e.email,
  //      document.getElementById("messsages").value =e.messsages
  //       })
  // });
  // }

 
// function Get(){
  
//    console.log(uid,"vgggggg")
//   fetch( 'http://localhost:3000/GET', {
//         method: 'PUT',
//         body: JSON.stringify({
          
//          firstname:document.getElementById("firstname").value,
//          scondname: document.getElementById("scondname").value,
//          phone: document.getElementById("phone").value,
//          email: document.getElementById("email").value,
//          messsages: document.getElementById("messsages").value,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
      
//     }