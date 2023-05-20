 //menampilkan pop up
function tampilkanPopUp() {
  document.getElementById("pop-up").style.display = "block";
}

//menyembunyikan dan menampilkan konten
//hapus atau tambah jumlah card dengan menambahkan function 
function tampilkanKonten() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia").style.display = "none";
  document.getElementById("konten").style.display = "block";
  document.getElementById("1").style.display = "block";
}
function tampilkanKonten1() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia1").style.display = "none";
  document.getElementById("konten1").style.display = "block";
}
function tampilkanKonten2() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia2").style.display = "none";
  document.getElementById("konten2").style.display = "block";
}
function tampilkanKonten3() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia3").style.display = "none";
  document.getElementById("konten3").style.display = "block";
}
function tampilkanKonten4() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia4").style.display = "none";
  document.getElementById("konten4").style.display = "block";
}
function tampilkanKonten5() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia5").style.display = "none";
  document.getElementById("konten5").style.display = "block";
}
function tampilkanKonten6() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia6").style.display = "none";
  document.getElementById("konten6").style.display = "block";
}
function tampilkanKonten7() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("haia7").style.display = "none";
  document.getElementById("konten7").style.display = "block";
}

//button untuk menampilkan konten
document.getElementById("tombol-mulai").addEventListener("click", tampilkanKonten, ) ;

//next button
document.getElementById("next").addEventListener("click", tampilkanKonten1, ) ;
document.getElementById("next2").addEventListener("click", tampilkanKonten2, ) ;
document.getElementById("next3").addEventListener("click", tampilkanKonten3, ) ;
document.getElementById("next4").addEventListener("click", tampilkanKonten4, ) ;
document.getElementById("next5").addEventListener("click", tampilkanKonten5, ) ;
document.getElementById("next6").addEventListener("click", tampilkanKonten6, ) ;
document.getElementById("next7").addEventListener("click", tampilkanKonten7, ) ;
//ketika halaman di muat menampilkan pop up
window.addEventListener("load", tampilkanPopUp);
