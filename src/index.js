import {initializeApp} from 'firebase/app'
import {getFirestore,collection,doc,getDoc,serverTimestamp,addDoc,updateDoc, Timestamp, deleteDoc} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyACUYjV0Dnw6ZiM9wa4kVpcNNeCkk4XjUc",
  
    authDomain: "waldo-6090f.firebaseapp.com",
  
    projectId: "waldo-6090f",
  
    storageBucket: "waldo-6090f.appspot.com",
  
    messagingSenderId: "1050184940144",
  
    appId: "1:1050184940144:web:ce5e02bab34458699152b5"
  
  };

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db,'cordinations')
let idSession = ''
// const docRef = doc(db,'cordinations', '1')
// getDoc(docRef).then((doc)=>{
//     console.log(doc.data(),doc.id)
// })


const colRef2 = collection(db,'time')
addDoc(colRef2, {name:'anonymous',startAt:serverTimestamp(), endAt:0}).then((doc)=>{idSession=doc.id})





const image = document.querySelector('.image')
image.addEventListener('click', (e)=>{
    let cordX = e.offsetX;
    let cordY = e.offsetY;
    createCircle(cordX,cordY)
    
    console.log(cordX,cordY)
})

let validTime = 0;


function createCircle(x,y) {

    
    let removeCircle = document.querySelectorAll('.circle')
    removeCircle.forEach(item=>{
        item.remove()
    })

    let removeList = document.querySelectorAll('.list')
    removeList.forEach(item=>{
        item.remove()
    })

    const circle = document.createElement('div')
    circle.classList = 'circle'
    const image = document.querySelector('.containerImg')
    let newX=x-25
    let newY=y-25
    circle.style.top = newY+'px'
    circle.style.left = newX+'px'
    image.appendChild(circle)

    createSelect(x,y)

    
    const options = document.querySelectorAll('.list__option')
    options.forEach((option)=>{
            option.addEventListener('click', ()=>{
            const optionDel = document.querySelector('.list') 
            optionDel.remove()
            circle.classList.remove('circle');
            circle.classList.add('circleVer');
            checkValid(option,x,y)

        })

    })

    function checkValid(e,x,y) {
        console.log(e)
        const docRef = doc(db,'cordinations', e.id)
        getDoc(docRef).then((docu)=>{
            const response = docu.data()
            console.log(x,y)
            if((response.x >= x-25 && response.x <= x+25)&&(response.y >= y-25 && response.y <= y+25)) {
                
                    let classRef = '.' + e.textContent
                    valid(classRef);
                    validTime++;
                    console.log(validTime)
                    if(validTime==3) {
                        const decRef = doc(db,'time',idSession)
                        updateDoc(decRef,{endAt:serverTimestamp()}).then(()=>{
                            getDoc(decRef).then((doc)=>{
                                console.log(doc.data().endAt)
                                console.log(doc.data().startAt)
                                alert('you won in ' + (Math.round(doc.data().endAt-doc.data().startAt))+' seconds')
                                deleteDoc(decRef)
                            })
                        })
                        
                        
                    }
                
            }
            else{
                invalid()
            }
        }) 
    }



    function valid(e) {
        const circle = document.querySelector(e)
        circle.style.border = '10px solid green'
    }

    function invalid() {
        circle.remove()
    }

}

function createSelect(x,y) {
    const list = document.createElement('ul')
    list.classList = 'list'

    const listOption1 = document.createElement('li')
    listOption1.classList = 'list__option'
    listOption1.setAttribute("id", "1");
    listOption1.textContent = 'waldo'
    list.appendChild(listOption1)

    const listOption2 = document.createElement('li')
    listOption2.classList = 'list__option'
    listOption2.setAttribute("id", "2");
    listOption2.textContent = 'odlaw'
    list.appendChild(listOption2)

    const listOption3 = document.createElement('li')
    listOption3.classList = 'list__option'
    listOption3.setAttribute("id", "3");
    listOption3.textContent = 'wizard'
    list.appendChild(listOption3)

    const image = document.querySelector('.containerImg')
    list.style.top = y+'px'
    list.style.left = x+'px'
    image.appendChild(list)
}