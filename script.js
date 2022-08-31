//------------------------calculating the user Age----------------------------------------------------- exercise

// var userDateBirth = prompt("give ur birth date")
// if (userDateBirth < 1401){
//     if (isNaN(userDateBirth)){
//         alert("your date birth is invalid")
//     } else {
//         alert(1401 - userDateBirth)
//     }
// } else{
//     alert("your date birth is invalid")
// }

// ----------------------------calculating minutes into hours------------------------------------------ exercise

// var userMinuts = Number(prompt("Please enter amount of time by minutes"))
// var hours = 60
// if (isNaN(userMinuts)){
//     alert("invalid amount")
// } else if (userMinuts < 0 , userMinuts == 0 ){
//     alert("invalid amount")
// } else  {
//       alert("minuts to hours : " + userMinuts / hours + " Hours")
//     }

// -----------------------------------user limit lock ------------------------------------------------ exercise

// var userGen = prompt("Are you male or female")
// var userAge = Number(prompt("Please enter your age"))
// if (isNaN(userAge)) {
//     alert("invalid age amount")
// } else if (userGen == "female" || userAge < 18){
//     alert("You dont have the access to enter")
// } else  {
//     alert("Enter")
// }

// ------------------------------app supporting only special browsers--------------------------------- exercise

// var browser = prompt("enter your browser type")
// if (browser == "Edge"){
//     alert("You've got the Edge")
// } else if (browser == "chrome" || "firefox" || "Opera" || "Safari" ) {
//     alert("we suppurt these too")
// } else {
//     alert("We hope that this page looks ok!")
// }

//-----------------------------------simple switch case exercise----------------------------------------- exercise

// var a = +prompt("give me a number" , "")
// switch (a){
//     case 0:
//         alert( 0 )
//     break;
//     case 1:
//         alert( 1 )
//     break;
//     case 2:
//     case 3:
//         alert( '2,3' )
//     break;
// }

//--------------------------simple application for discribing the students levels------------------------ exercise

// var averagePoints = prompt("give me your average points in school");
// switch (averagePoints) {
//   case "18":
//   case "19":
//   case "20":
//     alert("A Class");
//     break;
//   case "15":
//   case "16":
//   case "17":
//     alert("B Class");
//     break;
//   case "12":
//   case "13":
//   case "14":
//     alert("C Class")
//     break;
//   default:
//     alert("failed")
// }

//--------------application for caluculating numbers if they are odd or even----------------------------- exercise

// function evenOdd(userNumber){
//     if (isNaN(userNumber)){
//         alert("invalid amount")
//     }else if (userNumber % 2 == 0){
//         alert("this is an even number")
//     } else {
//         alert("this is an odd number")
//     }
// }
// evenOdd(prompt("give a number i show its even or odd"))

//-------------------------------------------return execise---------------------------------------------- exercise

// var num1 = +prompt("give me a number")
// var num2 = +prompt("another one")
// var num3 = +prompt("another one")
// function plusNumbers (num1 , num2 , num3){
//     return num1 + num2 + num3
// }
// var result = plusNumbers(num1 , num2 , num3)
// alert(result)

//-------------------------------------Sign up form------------------------------------------------------ exercise

// var userName = prompt("Please enter your Name")
// var userPass = prompt("Please enter your Password")
// if (userName.length < 3 || userPass.length < 8){
//     alert("your name must be at least 3 characters andPassword must be at least 8 characters")
// } else{
//     alert("you're all done")
// }

//-----------------------------------------login form validation----------------------------------------- exercise

// var userName = prompt("enter your username for login")
// if (userName.toLowerCase() == "ali"){
//     alert("login succesful")
// } else {
//     alert("you cannot login into websit")
// }

//-------------------------------------captcha code generator-------------------------------------------- exercise

// var number = Math.random() * 100000
// console.log("Your captcha code : " + Math.floor(number))

//-------------------------------------------simple loop exercise---------------------------------------- exercise

// for (var i=0 ; i <101 ; i +=2){
//     console.log(i)
// }

//---------------------------------basket calculating price---------------------------------------------- exercise

// allPrices = 0
// for (var i=0 ; i < 5 ; i++){
//     allPrices = allPrices + Number(prompt("enter your product price : "))
// }
// alert("Your basket price is at total of : " + allPrices + " T ")

//---------------------------------------calculating average of 5 numbers-------------------------------- exercise

// allnumbers = null
// for (var i=0 ; i < 5 ; i++ ){
//     allnumbers = allnumbers + Number(prompt("give 5 numbers, number " + (i+1)))
// }
// averageNumbers = allnumbers / 5
// alert(averageNumbers)

//--------------------Program to calculate the sum of numbers-------------------------------------------- exercise

// var userNumber = prompt("give me a number")
// var lengthPlus = 0
// for (i=0 ; i < (+userNumber.length) ; i++){
//     lengthPlus = lengthPlus + Number(userNumber.charAt(i))
// }
// alert(lengthPlus)

// ----------------------program to calculate the length of numbers-------------------------------------- exercise

// var userNumber = prompt("give me a number")
// if (isNaN(userNumber)){
//     alert("invalid amount")
// } else {
//     alert(userNumber.length)
// }

//---------------------Program to calculate the sum of numbers whith while loop-------------------------- exercise

// userNumber = prompt("give me a number");
// var lengthPlus = 0;
// var i = 0;
// while (i < userNumber.length) {
//   lengthPlus = lengthPlus + Number(userNumber.charAt(i));
//   i++;
// }
// alert(lengthPlus);

//---------------------------Program showing sum and length of digits------------------------------------ exercise

// var userNumber = Number(prompt("give me a number", 0));
// var sum = 0;
// var count = 0;
// while (userNumber / 10 != 0) {
//   sum = sum + (userNumber % 10);
//   count++;
//   userNumber = Math.floor(userNumber / 10);
// }
// alert("Sum of digits = " + sum + "\n" + "Count of digits = " + count);

//--------------------------showing even numbers between two random numbers------------------------------ exercise

// var userNum1 = +prompt("give me a number");
// var userNum2 = +prompt("give me another number");
// var sum = 0;
// if (userNum1 % 2 == 0) {
//   while (userNum1 < userNum2) {
//     userNum1 = userNum1 + 2;
//     console.log(userNum1);
//   }
// } else {
//   userNum1--;
//   do {
//     userNum1 = userNum1 + 2;
//     console.log(userNum1);
//   } while (userNum1 < userNum2);
// }

//-------------------------Program to calculate average of custom amount of numbers---------------------- exercise

// var devideNumber = +prompt("how many numbers u wanna add ?");
// var allnumbers = 0;
// for (i = 0; i < devideNumber; i++) {
//   var userNumber = +prompt("give me the " + i + " number");
//   allnumbers = allnumbers + userNumber;
// }
// var averageNumbers = allnumbers / devideNumber;
// alert(averageNumbers);

//------------------------Program to calculate a number in power of another one-------------------------- exercise

// var userNum1 = Number(prompt("give me a number"));
// var userNum2 = Number(prompt("give me another one"));
// var power = 1;
// for (i = 0; i < userNum2; i++) {
//   power = power * userNum1;
// }
// alert(power);

//------------------Program to calculate a number in power of another one - while loop------------------- exercise

// var userNum1 = +prompt("give me a number");
// var userNum2 = +prompt("give me another one");
// var power = 1;
// var i = 0;
// while (i < userNum2) {
//   i++;
//   power = power * userNum1;
// }
// alert(power);

//-----------Program to calculate a number in power of another one - do while loop----------------------- exercise

// var userNum1 = +prompt("give me a number");
// var userNum2 = +prompt("give me another one");
// var i = 0;
// var power = 1;
// do {
//   i++;
//   power = power * userNum1;
// } while (i < userNum2);
// alert(power);

//----------------------Program to calculate the average of an array numbers------------------------------ exercise

// var numbers = [];
// var sum = 0;
// var i = 0;
// while (userNumbers != -1) {
//   var userNumbers = +prompt("Give me a number , enter -1 when you are done");
//   if (userNumbers != -1) {
//     numbers.push(userNumbers);
//     sum = sum + userNumbers;
//     i++;
//   }
// }
// alert(sum / i);

//----------------------------------------------user info container-------------------------------------- exercise

// var usersInfo = [
//   {
//     id: 1,
//     firstName: "ali",
//     lastName: "mohammady",
//     age: 22,
//     email: "ali.mohammady@gmail.com"
//   },
//   {
//     id: 2,
//     firstName: "hossein",
//     lastName: "bagheri",
//     age: 25,
//     email: "hossein@gmail.com"
//   },
//   {
//     id: 3,
//     firstName: "hasan",
//     lastName: "gholami",
//     age: 28,
//     email: "hasan.gholami@gmail.com"
//   },
// ];
// var newUserName = prompt("Enter your name");
// var newUserLastName = prompt("Enter your last name");
// var newUserAge = prompt("Enter your age");
// var newUserEmail = prompt("Enter your email");
// if (newUserName.length < 3 || newUserName.length > 10) {
//   alert("name must be between 3 to 10 characters");
// } else if (newUserLastName < 3 || newUserLastName > 11) {
//   alert("last name can be 3 to 11 characters");
// } else if (isNaN(newUserAge) || newUserAge.length > 3) {
//   alert("wrong amount of number");
// } else {
// var newUser =
//     {
//       id: 4,
//       firstName: newUserName,
//       lastName: newUserLastName,
//       age: newUserAge,
//       email: newUserEmail
//     }
// }
// usersInfo.push(newUser)
// console.log(usersInfo);

//------------------------------user info container and showing info in----------------------------------- exercise

// var users = [
//   {
//     name: "arsalan",
//     lastName: "ghoohcani",
//     age: 19,
//     email: "arsi@gmail.com",
//   },
//   {
//     name: "mostafa",
//     lastName: "mostafaZade",
//     age: 22,
//     email: "mos@gmail.com",
//   },
//   {
//     name: "ali",
//     lastName: "alizade",
//     age: 28,
//     email: "ali@gmail.com",
//   },
// ];
// var newUserName = prompt("give me your name");
// var newUserLastName = prompt("give me your last name");
// var newUserAge = prompt("give me your age");
// var newUserEmail = prompt("give me your email");
// if (isNaN(newUserAge)) {
//   alert("ur age number is invalid");
// } else {
//   var newUser = {
//     name: newUserName,
//     lastName: newUserLastName,
//     age: newUserAge,
//     email: newUserEmail,
//   };
// }
// users.push(newUser);
// users.forEach(function (info) {
//   console.log("name : " + info.name + " Family : " + info.lastName);
// });

//----------------------------------------login form validation------------------------------------------- exericse

// var users = ["ali", "hasan", "hossein", "mohammad"];
// var userName = prompt("enter your userName");
// var isLogin = users.includes(userName);
// if (isLogin === true) {
//   alert("Hello " + userName + " welcome");
// } else {
//   alert("Please sign in first");
// }

//--------------------------shopping center basket price calculation------------------------------------- exercise

// var allproducts = [
//   { id: 1, name: "PC", price: 30 },
//   { id: 2, name: "laptop", price: 20 },
//   { id: 3, name: "monitor", price: 10 },
//   { id: 4, name: "mobile", price: 15 },
//   { id: 5, name: "car", price: 100 },
//   { id: 6, name: "motor", price: 50 },
// ];

// var userBasket = [
//   { id: 1, name: "PC", price: 30 },
//   { id: 2, name: "monitor", price: 10 },
//   { id: 3, name: "laptop", price: 20 },
// ];

// var userProductChoose = prompt("enter the product u wanna buy");

// var requestProduct;

// var isAvailabel = allproducts.some(function (userProductcheck) {
//   if (userProductcheck.name === userProductChoose) {
//     requestProduct = userProductcheck;
//     return true;
//   }
// });

// if (isAvailabel === true) {
//   var newProduct = {
//     id: 4,
//     name: requestProduct.name,
//     price: requestProduct.price,
//   };
//   userBasket.push(newProduct);
//   var sum = 0;
//   userBasket.forEach(function (allPriceCount) {
//     sum = sum + allPriceCount.price;
//   });
//   console.log(userBasket);
//   console.log(sum);
// } else {
//   alert("the product u wanna get is not available");
// }

//-----------------------------conference access by age validation test----------------------------------- exercise

// var ages = [];
// for (i = 1; userAges != 60; i++) {
//   var userAges = +prompt("enter the user ages , enter 1000 when users' ends"); //1000 dont know what is DOM yet
//   var newUser = { id: i, age: userAges };
//   ages.push(newUser);
// }
// var isAccess = ages.every(function (userAgesCount) {
//   return userAgesCount.age > 18;
// });
// if (isAccess == true) {
//   alert("u can enter the confrance");
// } else {
//   alert("u can not enter the confrance cause of not having the enough age");
// }

//------------------------------shopping simulation------------------------------------------------------- exercise

// var products = [
//   { id: 1, name: "mobile" },
//   { id: 2, name: "ipad" },
//   { id: 3, name: "macbook" },
//   { id: 4, name: "pc" },
//   { id: 5, name: "mouse" },
//   { id: 6, name: "keyboard" },
//   { id: 7, name: "headphone" },
//   { id: 8, name: "watch" },
// ];
// var userBasket = [
//   { id: 1, name: "mobile" },
//   { id: 2, name: "ipad" },
//   { id: 3, name: "watch" },
// ];
// var question = prompt("do yo wanna add or delete something?", "Add /  Delete");
// if (question == "Add") {
//   var AddProduct = prompt("which product u wanna add?");
//   var newAddprod;
//   var addproductCheck = products.some(function (userProduct) {
//     if (userProduct.name == AddProduct) {
//       newAddprod = userProduct;
//       return true;
//     }
//   });
//   if (addproductCheck === true) {
//     var addprod = {
//       id: 4,
//       name: newAddprod.name,
//     };
//     userBasket.push(addprod);
//     console.log(userBasket);
//   } else {
//     console.log("The product u wanna add is already in your basket");
//   }
// } else if (question == "Delete") {
//   userdelprod = prompt("which product u wanna delete ?");
//   var newDelprod;
//   var delproductCheck = userBasket.some(function (delprod) {
//     if (delprod.name == userdelprod) {
//       newDelprod = delprod;
//       return true;
//     }
//   });
//   if (delproductCheck === true) {
//     delproditem = {
//       id: 4,
//       name: newDelprod.name,
//     };
//     var spliceIndex = userBasket.findIndex(function (prodIndex) {
//         return prodIndex.name === userdelprod;
//     });
//     userBasket.splice(spliceIndex , 1)
//     console.log(userBasket)
//   } else {
//     console.log("the item u wanna delete is not in your basket yet");
//   }
// } else {
//   console.log("invalid amount");
// }

//---------------------------------Shoppin center -Post Price calculating----------------------------------- exercise
// var userBasket = [
//   { id: 1, name: "meat", Price: 200000 },
//   { id: 2, name: "yougurt", Price: 50000 },
//   { id: 3, name: "milk", Price: 30000 },
//   { id: 4, name: "rice", Price: 300000 },
//   { id: 5, name: "oil", Price: 90000 },
//   { id: 6, name: "hen", Price: 100000 },
//   { id: 7, name: "heno", Price: 80000 },
// ];
// if (userBasket.Price >= 100000) {
//   var upperThanOneThousands = userBasket.filter(function (product) {
//     return product.Price >= 100000;
//   });
// } else {
//   var lowrThanOneThousands = userBasket.filter(function (product) {
//     return product.Price < 100000;
//   });
// }
// var prodplusService = 0;
// var Price = lowrThanOneThousands.forEach(function (prod) {
//   prodplusService += prod.Price + 1000;
// });
// console.log(prodplusService);
//--------------------------------word being same when it is writing in backward -------------------------- exercise

// var userText = prompt(
//   "give me a word that can write backward and be the same as before"
// );
// var textSpell = userText.split("");
// var backTextSpell = textSpell.reverse();
// var backwardUserText = backTextSpell.join("");
// if (userText === backwardUserText) {
//   alert(backwardUserText + "\n" + "it cant be read backward");
// } else {
//   alert(backwardUserText + "\n" + "it cant be read backward");
// }

//-----------------------------------todo list program---------------------------------------------------- exercise

// var todolist = [
//   { id: 1, name: "work", status: "not done yet" },
//   { id: 2, name: "learning", status: "not done yet" },
//   { id: 3, name: "study", status: "not done yet" },
// ];
// var userReq = +prompt(
//   "please select one of the commands u want to do" +
//     "\n" +
//     "1) Add todo" +
//     "\n" +
//     "2) Delete todo" +
//     "\n" +
//     "3 ) Change status to have been done"
// );
// if (userReq === 1) {
//   var AddName = prompt("enter the name u wanna call the task");
//   var AddTask = {
//     id: todolist.length + 1,
//     name: AddName,
//     status: "not done yet",
//   };
//   todolist.push(AddTask);
// } else if (userReq === 2) {
//   var Deltodo = prompt("enter the todo u wanna delete");
//   var taskDel;
//   var isIn = todolist.some(function (task) {
//     taskDel = task;
//     return task.name === Deltodo;
//   });
//   if (isIn === true) {
//     var indexDel = todolist.findIndex(function (task) {
//       return task === taskDel;
//     });
//     todolist.splice(indexDel, 1);
//   } else {
//     alert("the called task isnt in the list");
//   }
// } else if (userReq === 3) {
//   var userRequest = prompt("which task u have finished ?");
//   var changeStat;
//   var isAvailabel = todolist.some(function (task) {
//     changeStat = task;
//     return task.name === userRequest;
//   });
//   if (isAvailabel === true) {
//     var indexDone = todolist.findIndex(function (task) {
//       return task === userRequest;
//     });
//     var taskDone = { id: changeStat.id, name: changeStat.name, status: "done" };
//     todolist.splice(indexDone, 1, taskDone);
//   } else {
//     alert("the called task isnt in the list");
//   }
// } else {
//   alert("invalid amount");
// }
// console.log(todolist);

//--------------------------task management controling by boss-------------------------------------------- exercise
// var ali = [
//   { task: "front develop" },
//   { task: "Ui design" },
//   { task: "fixing bugs" },
// ];
// var amir = [
//   { task: "backend develop" },
//   { task: "Product test" },
//   { task: "developing database" },
// ];
// var hassan = [
//   { task: "fixing server" },
//   { task: "fixing bugs" },
//   { task: "uploading the beta" },
// ];
// var hossein = [
//   { task: "front design" },
//   { task: "seo" },
//   { task: "digital marketing" },
// ];
// var userSelection = prompt("which employi u wanna add task to his schedule ?");
// if (userSelection === "ali") {
//   var AliNewTask = prompt("what task u wanna add to ali schedule");
//   var isAvailabeltask = ali.some(function (part) {
//     return part.task === AliNewTask;
//   });
//   if (isAvailabeltask === true) {
//     alert("the task u wanna add is already in the schedule");
//   } else {
//     var newTask = { task: AliNewTask };
//     ali.push(newTask);
//   }
//   console.log(ali);
// } else if (userSelection === "amir") {
//   var amirNewTask = prompt("what task u wanna add to amir schedule ?");
//   var isAvailabeltask = amir.some(function (part) {
//     return part.task === amirNewTask;
//   });
//   if (isAvailabeltask === true) {
//     alert("the task u wanna add is already in the schedule");
//   } else {
//     var newTask = { task: amirNewTask };
//     amir.push(newTask);
//   }
//   console.log(amir);
// } else if (userSelection === "hassan") {
//   var hassanNewTask = prompt("what task u wanna add to hassan schedule ?");
//   var isAvailabeltask = hassan.some(function (part) {
//     return part.task === hassanNewTask;
//   });
//   if (isAvailabeltask === true) {
//     alert("the task u wanna add is already in the schedule");
//   } else {
//     var newTask = { task: hassanNewTask };
//     hassan.push(newTask);
//   }
//   console.log(hassan);
// } else if (userSelection === "hossein") {
//   var hosseinNewTask = prompt("what task u wanna add to hossein schedule ?");
//   var isAvailabeltask = hossein.some(function (part) {
//     return part.task === hosseinNewTask;
//   });
//   if (isAvailabeltask === true) {
//     alert("the task u wanna add is already in the schedule");
//   } else {
//     var newTask = { task: hosseinNewTask };
//     hossein.push(newTask);
//   }
//   console.log(hossein);
// } else {
//   alert("the employ name u asked for is not in the list");
// }
//---------------------task management controling by boss - better version----------------------------------- exercise
// var usersAndtasks = {
//   ali: ["front", "package", "seo"],
//   amir: ["back", "Database", "fixing bugs"],
//   arezoo: ["digital marketing", "seo", "link"],
//   arash: ["product test", "fixing bugs", "server"],
// };
// var employSelection = prompt(
//   "enter the employ name u wanna add the task to his/her scheduale : "
// );
// if (usersAndtasks[employSelection] === usersAndtasks.ali) {
//   var newTask = prompt("what task u wanna add to ali scheduale ?");
//   var isAvailabelTaks = usersAndtasks.ali.some(function (task) {
//     return task === newTask;
//   });
//   if (isAvailabelTaks === true) {
//     alert("the task is already in the list");
//   } else {
//     usersAndtasks.ali.push(newTask);
//   }
// } else if (usersAndtasks[employSelection] === usersAndtasks.amir) {
//   var newTask = prompt("what task u wanna add to amir scheduale ?");
//   var isAvailabelTaks = usersAndtasks.amir.some(function (task) {
//     return task === newTask;
//   });
//   if (isAvailabelTaks === true) {
//     alert("the task is already in the list");
//   } else {
//     usersAndtasks.amir.push(newTask);
//   }
// } else if (usersAndtasks[employSelection] === usersAndtasks.arezoo) {
//   var newTask = prompt("what task u wanna add to arezoo scheduale ?");
//   var isAvailabelTaks = usersAndtasks.arezoo.some(function (task) {
//     return task === newTask;
//   });
//   if (isAvailabelTaks === true) {
//     alert("the task is already in the list");
//   } else {
//     usersAndtasks.arezoo.push(newTask);
//   }
// } else if (usersAndtasks[employSelection] === usersAndtasks.arash) {
//   var newTask = prompt("what task u wanna add to arash scheduale ?");
//   var isAvailabelTaks = usersAndtasks.arash.some(function (task) {
//     return task === newTask;
//   });
//   if (isAvailabelTaks === true) {
//     alert("the task is already in the list");
//   } else {
//     usersAndtasks.arash.push(newTask);
//   }
// } else {
//   alert("the employ u entered isnt in the list");
// }
// console.log(usersAndtasks);
//---------------------------------online ticket service------------------------------------------------ exercise

// var CitiesAndStates = {
//   tehran: ["Tehran", "ghods", "shahriar", "robat karim", "pardis"],
//   esfahan: [
//     "Aran bidgol",
//     "esfahan",
//     "shahin shahr",
//     "khomeini shahr",
//     "shahr reza",
//   ],
//   khorasanRazavi: ["mashahd", "neishaboor", "kashmer", "chenaran", "golbahar"],
//   yazd: ["yazd", "meybod", "taft", "ahmad abad", "mehrdasht"],
//   azarbayjanGharbi: ["Tabriz", "tork", "torkaman chay", "jolfa", "bonab"],
// };
// var UserCitiReq = prompt("which city u want to travel ?");
// if (CitiesAndStates[UserCitiReq] === CitiesAndStates.tehran) {
//   console.log("cities u can visit in tehran : " + CitiesAndStates.tehran);
// } else if (CitiesAndStates[UserCitiReq] === CitiesAndStates.esfahan) {
//   console.log("cities u can visit in esfahan : " + CitiesAndStates.esfahan);
// } else if (CitiesAndStates[UserCitiReq] === CitiesAndStates.khorasanRazavi) {
//   console.log(
//     "cities u can visit in khorasan razavi : " + CitiesAndStates.khorasanRazavi
//   );
// } else if (CitiesAndStates[UserCitiReq] === CitiesAndStates.yazd) {
//   console.log("cities u can visit in yazd : " + CitiesAndStates.yazd);
// } else if (CitiesAndStates[UserCitiReq] === CitiesAndStates.azarbayjanGharbi) {
//   console.log(
//     "cities u can visit in azarbayjanGharbi : " +
//       CitiesAndStates.azarbayjanGharbi
//   );
// } else {
//   alert("invalid city name");
// }

//---------------------------------online ticket service better version--------------------------------- exercise

// var CitiesAndStates = {
//   tehran: ["Tehran", "ghods", "shahriar", "robat karim", "pardis"],
//   esfahan: [
//     "Aran bidgol",
//     "esfahan",
//     "shahin shahr",
//     "khomeini shahr",
//     "shahr reza",
//   ],
//   khorasanRazavi: ["mashahd", "neishaboor", "kashmer", "chenaran", "golbahar"],
//   yazd: ["yazd", "meybod", "taft", "ahmad abad", "mehrdasht"],
//   azarbayjanGharbi: ["Tabriz", "tork", "torkaman chay", "jolfa", "bonab"],
// };
// var UserCitiReq = prompt("which city u want to travel ?");
// var mainCities = CitiesAndStates[UserCitiReq];
// mainCities.forEach(function (city) {
//   console.log(city);
// });

//---------------------------------online test simulation--------------------------------------------- exercise

// var queAndans = [
//   { id: 1, que: "what is 2+2 ? ", answer: "4" },
//   { id: 2, que: "what is 2+4 ? ", answer: "6" },
//   { id: 3, que: "what is 2+6 ? ", answer: "8" },
//   { id: 4, que: "what is 2+8 ? ", answer: "10" },
//   { id: 5, que: "what is 2+1 ? ", answer: "3" },
// ];
// var userScore = 0;
// var userAnswer = "";
// queAndans.forEach(function (question) {
//   userAnswer = prompt(question.que + " ? ");
//   if (userAnswer === question.answer) {
//     userScore++;
//   }
// });
// alert(userScore);

//---------------------------------calculator project------------------------------------------------ exercise

// var userFirstNumber = +prompt("enter the first number");
// var userSecondNumber = +prompt("enter the second number");
// var userMissionWanted = prompt(
//   "what u wanna do with it \n 1) +   2) -   3) *   4) /"
// );

// if (userMissionWanted === "1") {
//   sum(userFirstNumber, userSecondNumber);
// } else if (userMissionWanted === "2") {
//   minus(userFirstNumber, userSecondNumber);
// } else if (userMissionWanted === "3") {
//   multiply(userFirstNumber, userSecondNumber);
// } else if (userMissionWanted === "4") {
//   devide(userFirstNumber, userSecondNumber);
// } else {
//   alert("the selected mission is undefinded");
// }

// function sum(userFirstNumber, userSecondNumber) {
//   alert(userFirstNumber + userSecondNumber);
// }
// function minus(userFirstNumber, userSecondNumber) {
//   alert(userFirstNumber - userSecondNumber);
// }
// function multiply(userFirstNumber, userSecondNumber) {
//   alert(userFirstNumber * userSecondNumber);
// }
// function devide(userFirstNumber, userSecondNumber) {
//   alert(userFirstNumber / userSecondNumber);
// }
