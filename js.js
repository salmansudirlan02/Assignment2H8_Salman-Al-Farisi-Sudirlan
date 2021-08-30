function ilang() {
    var x = document.getElementById("isi");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function ganti() {
  let name = document.getElementById("nama2")
  let work = document.getElementById("kerja2")
  let avia = document.getElementById("avi2")
  let age = document.getElementById("usia2")
  let location = document.getElementById("lokasi2")
  let exper = document.getElementById("penga2")
  let mail = document.getElementById("email2")
  
  console.log(name.value)
  console.log(work.value)
  console.log(avia.value)
  console.log(age.value)
  console.log(location.value)
  console.log(exper.value)
  console.log(mail.value)
  
  document.getElementById("nama").innerHTML = name.value
  document.getElementById("kerja").innerHTML = work.value
  document.getElementById("avi").innerHTML = avia.value
  document.getElementById("usia").innerHTML = age.value
  document.getElementById("lokasi").innerHTML = location.value
  document.getElementById("penga").innerHTML = exper.value
  document.getElementById("email").innerHTML = mail.value

  name.value = ""
  work.value = ""
  avia.value = ""
  age.value = ""
  location.value = ""
  exper.value = ""
  mail.value = ""
}