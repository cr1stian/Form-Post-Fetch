var title = document.querySelector("#title")
var body = document.querySelector("#body")
var userId = document.querySelector("#userId")
var btn = document.querySelector("#button")

//function with click eventlistener
btn.addEventListener('click',function(event){
// grabbing input values
  let titleValue = title.value
  let bodyValue = body.value
  let userIdValue = userId.value

  let params = {title: titleValue, body: bodyValue, userId: parseInt(userIdValue) }
//creating params to match original API & parseInt turns string into integer.


  fetch("http://jsonplaceholder.typicode.com/posts",{ //pulling API
    method: "post",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(params)
    }).then(function(response){
      return response.json()
    }).then(function(json){
      console.log(json)
    })

  event.preventDefault() //prevents the whole page from refreshing when submitting
});
