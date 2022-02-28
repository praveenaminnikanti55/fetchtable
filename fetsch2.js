// const resultElement = document.getElementById('result');
// const buttonsElement = document.getElementById('buttons');

// function button(){
//     const getData = () => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => response.json())
//         .then(data =>{
//             receive(data);
//             console.log(data);
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }
//     getData();
// }

// const receive = (data) =>{
//     for(let i=0; i<data.length; i++){
//         let idElement = document.createElement('p')
//         idElement.textContent = data[i].id;
//         resultElement.appendChild(idElement);

//         let headElement = document.createElement('h3');
//         headElement.textContent = data[i].title;
//         resultElement.appendChild(headElement);
        
//         let bodyElement = document.createElement('h2');
//         bodyElement.textContent = data[i].body;
//         resultElement.appendChild(bodyElement);

//         let hrline = document.createElement('hr');
//         resultElement.appendChild(hrline);
//     }
// }



const userElement = document.getElementById("userResult");










function show(datas){
    let tableElement = document.createElement('TABLE')
    userElement.appendChild(tableElement);

    let trElement = document.createElement('TR');
    tableElement.appendChild(trElement);

    let thElement = document.createElement('TH');
    thElement.textContent = "S.NO";
    trElement.appendChild(thElement);

    let thElement1 = document.createElement('TH');
    thElement1.textContent = "Name";
    trElement.appendChild(thElement1);

    let thElement2 = document.createElement('TH');
    thElement2.textContent = "user name";
    trElement.appendChild(thElement2);

    let thElement3 = document.createElement('TH');
    thElement3.textContent = "email";
    trElement.appendChild(thElement3);

    let thElement4 = document.createElement('TH');
    thElement4.textContent = "phone";
    trElement.appendChild(thElement4);

    let thElement5 = document.createElement('TH');
    thElement5.textContent = "Website";
    trElement.appendChild(thElement5);

    for(let i=0; i<datas.length; i++){
        let trElement1 = document.createElement("TR");
        tableElement.appendChild(trElement1);
        let tdEle = document.createElement("TD");
        let tdElement = document.createElement("TD");
        let tdElement2 = document.createElement("TD");
        let tdElement1 = document.createElement("TD");
        let tdElement3 = document.createElement("TD");
        let tdElement4 = document.createElement("TD");

        tdEle.textContent=datas[i].id;
        tdElement.textContent = datas[i].name;
        tdElement1.textContent = datas[i].username;
        tdElement2.textContent=datas[i].email;
        tdElement3.textContent=datas[i].phone;
        tdElement4.textContent=datas[i].website;

        trElement1.appendChild(tdEle);
        trElement1.appendChild(tdElement);
        trElement1.appendChild(tdElement1);
        trElement1.appendChild(tdElement2);
        trElement1.appendChild(tdElement3);
        trElement1.appendChild(tdElement4);
    }  
}  

function clicks(){
const get_data=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((result)=>result.json())
    .then(datas=>{
        show(datas)
        console.log(datas)
          
    })
    .catch((err)=>{
        console.log(err);
    })
}


get_data();

}

