const toogleButton=document.getElementById('toogle-button');
const naviList=document.getElementById('navi-list');

toogleButton.addEventListener('click',()=>{
    naviList.classList.toggle('active');
})

window.onscroll = function() {myFunction()};

var widget = document.getElementById('navbar-stick');
var sticky = widget.offsetTop;

function myFunction(){
if (window.pageYOffset >= sticky){
widget.classList.add("navbar-sticky")
} else{
widget.classList.remove("navbar-sticky");
}
}


function hitungBMI(){   
var boxHasil=document.getElementById("hasil-hitungbmi");
boxHasil.style.display="block";
var bb=document.getElementById("bb").value;
var tb=document.getElementById("tb").value;
var perhitungan=bb/(tb/100)**2;
var hasilHitung=perhitungan.toFixed(1);
var displayHasil=document.getElementById("text-hasil-bmi");
var kurus="Kamu Termasuk Kurus";
var normal="Kamu Termasuk Normal";
var kelebihan="Kamu Termasuk Kelebihan Berat Badan";
var obesitas1="Kamu Termasuk Obesitas 1";
var obesitas2="Kamu Termasuk Obesitas 2";
var saran=document.getElementById("saran");
var saranKurus="Tambah asupan kalorimu";
var sarannormal="Pertahankan asupan kalorimu";
var sarankelebihan="Kurangi asupan kalorimu";
var detailSaran=document.getElementById("detail-saran")
var ketSaran="Untuk Mencapai BMI yang normal dan tetap sehat";
var ketSaranNormal="Agar BMI tetap terjaga dan sehat";
displayHasil.innerHTML=hasilHitung;
var masukKategori=document.getElementById("kategori");

if(hasilHitung<18.5){
masukKategori.innerHTML=kurus;
saran.innerHTML=saranKurus;
detailSaran.innerHTML=ketSaran;
}else if(hasilHitung>=18.5 && hasilHitung<=23.9){
masukKategori.innerHTML=normal;
saran.innerHTML=sarannormal;
detailSaran.innerHTML=ketSaranNormal;
}else if(hasilHitung>=24 && hasilHitung<=26.9){
masukKategori.innerHTML=kelebihan;
saran.innerHTML=sarankelebihan;
detailSaran.innerHTML=ketSaran;
}else if(hasilHitung>=27 && hasilHitung<=29.9){
masukKategori.innerHTML=obesitas1;
saran.innerHTML=sarankelebihan;
detailSaran.innerHTML=ketSaran;
}else if(hasilHitung>30){
saran.innerHTML=sarankelebihan;
detailSaran.innerHTML=ketSaran;
masukKategori.innerHTML=obesitas2;
}else{
    masukKategori.innerHTML="Masukkan Berat Badan dan Tinggi Badan Kamu!!";
    displayHasil.innerHTML="Tidak Diketahui";
}
}   

function myFunctionMoreSatu(){

var titik=document.getElementById("titik");
var more=document.getElementById("more");
var btnMore=document.getElementById("myButton-satu");

if(titik.style.display=="none"){
titik.style.display="inline";
btnMore.src="assets/add.png";
more.style.display="none";

}else{
titik.style.display="none";
btnMore.src="assets/minus.png";
more.style.display="inline";
}
}
function myFunctionMoreDua(){

var titik=document.getElementById("titik-dua");
var more=document.getElementById("more-dua");
var btnMore=document.getElementById("myButton-dua");

if(titik.style.display=="none"){
titik.style.display="inline";
btnMore.src="assets/add.png";
more.style.display="none";

}else{
titik.style.display="none";
btnMore.src="assets/minus.png";
more.style.display="inline";
}
}

function myFunctionMoreTiga(){

var titik=document.getElementById("titik-tiga");
var more=document.getElementById("more-tiga");
var btnMore=document.getElementById("myButton-tiga");

if(titik.style.display=="none"){
titik.style.display="inline";
btnMore.src="assets/add.png";
more.style.display="none";

}else{
titik.style.display="none";
btnMore.src="assets/minus.png";
more.style.display="inline";
}
}

var posisiY=0;
var jarak=15;
function smoothScroll(id){
    var target=document.getElementById(id).offsetTop;
    var scroll=setTimeout(function(){
        smoothScroll(id);
    },5)
    posisiY=posisiY+jarak;

    if(posisiY >= target){
        clearTimeout(scroll);
        posisiY=0;
    }else{
        window.scroll(0,posisiY)
    }
}