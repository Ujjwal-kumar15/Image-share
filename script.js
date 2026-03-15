function uploadImage(){

let input=document.getElementById("imageUpload");

let file=input.files[0];

let reader=new FileReader();

reader.onload=function(e){

let img=document.createElement("img");

img.src=e.target.result;

document.getElementById("gallery").appendChild(img);

}

reader.readAsDataURL(file);

}
