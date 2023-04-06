import {product} from "./app.js";
console.log(product);

const btnCategory=document.querySelector("#bike")
const blackDiv=document.querySelector('.bike-categories')
const bikeBtn=document.querySelector('.bike-btn')
const cancel=document.querySelector('.cancel');
const myBike=document.querySelector('.myBike');
let card="";
const multi_col=document.querySelector('.multi-col');
const mono_col=document.querySelector('.mono-col');
let colType='';
let colTypeImg='';

btnCategory.onclick=moveDiv;
cancel.onclick=cancelDiv;
function moveDiv() {

    blackDiv.classList.add('move')
    bikeBtn.classList.add('green')
}
function cancelDiv() {

    blackDiv.classList.remove('move')
    bikeBtn.classList.remove('green')
}



//  ----------------------------------------------------



const btn=document.querySelectorAll('.selected')
let selectedCategory='';

multi_col.onclick=()=>{
    card="";
    colType="col-12 col-sm-12 col-md-12 col-lg-12"
    colTypeImg="col-12 col-sm-12 col-md-4 col-lg-4";
    write(selectedCategory,colType,colTypeImg);
}
mono_col.onclick=()=>{
    card="";
    colType="col-6 col-sm-6 col-md-4 col-lg-4"
    colTypeImg="col-12 col-sm-12 col-md-12 col-lg-12"
    write(selectedCategory,colType,colTypeImg);
}


write(selectedCategory,colType,colTypeImg);
btn[0].onclick=()=>{
     card="";
    selectedCategory='BMX';
    write(selectedCategory,colType,colTypeImg)
}
btn[1].onclick=()=>{
     card="";
    selectedCategory='Children';
    write(selectedCategory,colType,colTypeImg)
}
btn[2].onclick=()=>{
     card="";
    selectedCategory='City';
    write(selectedCategory,colType,colTypeImg)
}
btn[3].onclick=()=>{
     card="";
    selectedCategory='Custom';
    write(selectedCategory,colType,colTypeImg)
}
btn[4].onclick=()=>{
     card="";
    selectedCategory='E-bike';
    write(selectedCategory,colType,colTypeImg)
}
btn[5].onclick=()=>{
     card="";
    selectedCategory='Freeriede';
    write(selectedCategory,colType,colTypeImg)
}
btn[6].onclick=()=>{
    card="";
    selectedCategory='Mountain';
    write(selectedCategory,colType,colTypeImg)
}
btn[7].onclick=()=>{
    card="";
    selectedCategory='Trial';
    write(selectedCategory,colType,colTypeImg)
}











function write(selectedCategory,colType,colTypeImg) {


    console.log(colType);

   let newPrduct=product.filter(checkCategory)
    function checkCategory(value) {
        return value.category.includes(selectedCategory);
    }




(selectedCategory==''?product:newPrduct).map(element =>{
    card+=`
    <div class=${colType}>   
    <div class="card " >
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row">
                <div class=${colTypeImg}>  
                    <div class="main-Sale">
                    <img src=${element.photo} class="card-img-top" alt="..." />
                    ${element.isSale?'<div class="Sale">SALE!</div>':""}
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-5">
                    <div class="card-body">
                        <h5 class="card-title text-muted">BIKE</h5>
                        <h5>${element.cardName}</h5>

                        <ol class="d-flex list-unstyled">
                        <li><i class="bi bi-star-fill text-success"></i></li>
                        <li><i class="bi bi-star-fill text-success"></i></li>
                        <li><i class="bi bi-star-fill text-success"></i></li>
                        <li><i class="bi bi-star-fill text-success"></i></li>
                        <li><i class="bi bi-star-fill text-success"></i></li>
                        </ol>
                        <p class="card-text fw-bold">
                        ${element.money}  
                        </p>
                        <a href="#" class="btn btn-success px-4">${element.botton}</a>
                        </div>
                </div>
            </div>


        </div>

        
    </div>
</div>
    `



})

myBike.innerHTML=card;
}


// card+= ` 
// <div class=${colType}>
//      <div class="card" style="width: 14rem">
//      <div>
//          <img src=${element.photo} class="card-img-top" alt="..." />
//          ${element.isSale?'<div class="Sale">SALE!</div>':""}
//      </div>
         
//          <div class="card-body">
//          <h5 class="card-title text-muted">BIKE</h5>
//          <h5>${element.cardName}</h5>
//          <ol class="d-flex list-unstyled">
//          <li><i class="bi bi-star-fill text-success"></i></li>
//          <li><i class="bi bi-star-fill text-success"></i></li>
//          <li><i class="bi bi-star-fill text-success"></i></li>
//          <li><i class="bi bi-star-fill text-success"></i></li>
//          <li><i class="bi bi-star-fill text-success"></i></li>
//          </ol>
//          <p class="card-text fw-bold">
//          ${element.money}  
//          </p>
//          <a href="#" class="btn btn-success px-4">${element.botton}</a>
//          </div>
       
//      </div>
// </div>`





