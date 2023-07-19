let trueList = document.getElementById('true');
let falseList = document.getElementById('false')



let url='https://jsonplaceholder.typicode.com/users/1/todos';

function loadToDo() {
let response = fetch(url); /// return Promise
// response
//   .then(resolveFunction)
 
response.then((response)=>{
    
    dataPromise = response.json();

   let promiseFromResponse =  dataPromise.then((res)=>{  
     //console.log(res); 
     //arrayKeysRes = Object.keys(res[0]);
     //console.log(arrayKeysRes); ///'userId', 'id', 'title', 'completed'

     res.forEach(element => {
        
        if(element.completed == true){
            const li = document.createElement('li');
            li.textContent = `id: ${element.id}, title: ${element.title}`
            trueList.append(li);

        }
        
        const li = document.createElement('li');
            li.textContent = `id: ${element.id}, title: ${element.title}`
            falseList.append(li);
        
        console.log(element)})



    
    //  for (let index = 0; index < res.length; index++) {
    //  let arrayValuesRes = Object.values(res[index]);
      
    //     if (arrayValuesRes[3]==true){
    //         const li = document.createElement('li');
    //     li.textContent = `userId: ${arrayValuesRes[0]}, 
    //     id: ${arrayValuesRes[1]}, title: ${arrayValuesRes[2]}`
    //     trueList.append(li);
    // } else {
    //     const li = document.createElement('li');
    //     li.textContent = `userId: ${arrayValuesRes[0]}, 
    //     id: ${arrayValuesRes[1]}, title: ${arrayValuesRes[2]}`
    //     falseList.append(li);}


    // }

     
    });
  
})
};

loadToDo();



