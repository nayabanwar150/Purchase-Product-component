
var number = 1;
var num = document.getElementById('number');
var amt = document.getElementById('amount');
var Price = document.getElementById('Price');
var selectPrice = document.querySelector('.pack-sizes .active button').value;


function select(){
     document.querySelector('.pack-size-5kg').classList.add("active");
     document.querySelector('.pack-size-10kg').classList.remove("active");
     selectPrice = document.querySelector('.pack-size-5kg button').value;
     amt.innerHTML = selectPrice;
     Price.innerHTML = selectPrice;
     number = 1;
     num.innerHTML = number;
}

function reSelect(){
    document.querySelector('.pack-size-10kg').classList.add("active");
    document.querySelector('.pack-size-5kg').classList.remove("active");
    selectPrice = document.querySelector('.pack-size-10kg button').value;
    amt.innerHTML = selectPrice;
    Price.innerHTML = selectPrice;
    number = 1;
    num.innerHTML = number;
}

function amount(){
    totAmount = number * selectPrice;
    amt.innerHTML = totAmount;
}

function minus(){
    if(number > 0){
        number--;
        num.innerHTML = number;
        amount();
    }else{
        alert("Item (s) can't be negative");
    }
}

function plus(){
    if(number < 10 ){
        number++;
        num.innerHTML = number;
        amount();
    }else{
        alert("You can order max "+number+" item(s)");
    }
}