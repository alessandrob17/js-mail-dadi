var emailList = ['test1@example.com', 'test2@example.com', 'test3@example.com'];

var userEmail = prompt("Inserisci la tua email:");

var emailFound = false;
for (var i = 0; i < emailList.length; i++) {
  if (emailList[i] === userEmail) {
    emailFound = true;
    break;
  }
}

if (emailFound) {
  console.log("La tua email è presente.");
} else {
  console.log("La tua email non è presente.");
}
