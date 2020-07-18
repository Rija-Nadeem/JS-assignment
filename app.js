                                // ****************chapter 1*****************

// task 1
// alert('Welcome to XYZ website, We are happy to see you here !');

//task 2
// alert('Error! Please enter a valid password.');

//task 3
// alert('Welcome to JS Land... \r\nHappy coding');

//task 4
// alert('Welcome to JS Land...');
// alert('Happy coding');

//task 5
// var myalert=alert("hello i can run JS through my brower's console");
// console.log(myalert);

//task 6
//script is working fine

//task 7a
//content of page appears the script is working
//task7b
//content of page appears then script is working
//task 7c
//content of page appears then script is working
//task 7d
//script runs first then content of page appears




                            // ****************chapter 2*****************

//task 1
// var username;

//task 2
// var myName= 'Rija Nadeem';

//task 3a
// var message;
//task 3b
// message="hello world";
//task 3c
// alert(message);

//task 4
// var name= prompt('Enter your name: ');
// var age = prompt('Enter your age: ');
// var course= prompt('Enter course');
// var record=[name,age,course];
// for(var i=0; i<record.length; i++){
//     alert(record[i]);
// }

//task 5                      
// var msg="PIZZA\r\nPIZZ\r\nPIZ\r\nPI\r\nP";
// alert(msg);

//task 6
// var email="rijanadeem42@gmail.com";
// alert("My email address is "+ email);

//task 7
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the book "+book);

// task 8
// document.write("Yah! I can write HTML content through JavaScript");

//task 9
// var content="\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u0B9C\u06E9\u06DE\u06E9\u0B9C\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC\u25AC";
// alert(content);
// document.write(content);


                            // ****************chapter 3*****************

//task 1
// var age=22;
// alert("I am "+age+" years old");

//task 2                   
// var num=localStorage.getItem("counter");
// if(num===null){
//     num=1;
// }
// alert("No of visit: "+num+" time(s)");
// localStorage.setItem("counter",++num);

//task 3
//var birthYear=1997;
//document.write("My birth year is "+birthYear+"<br>");
//document.write("Data Type of my declared variable is "+ typeof(birthYear));

//task 4
// var name= prompt('Enter your name: ');
// var product = prompt('What you want to buy ');
// var quantity= prompt('Enter quantity');
// document.write(name+" ordered "+quantity+" "+product+"(s) on XYZ Clothing store");


                            // ****************chapter 4*****************

//task 1
// var variable1 = "Hello World!",
//     variable2 = "Testing",
//     variable3 = 23;
 
//task 2
//legal
// var $age, my_name, familyMembers, article1, Job;
//illegal
// var first-name, last name, fav#color, 3arrow, break;


//task 3a
// document.write("<h1>Rules for naming JS variables</h1><br>");
//task 3b
// document.write("<p>Variable names can only contain numbers, $ and _. For example: $my_1stVariable</p>");
//task 3c
// document.write("<p>Variable must begin with a letter, $ or _. For example: $name, _name or name</p>");
//task 3d
// document.write("<p>Variable names are case sensitive</p>");
//task 3e
// document.write("<p>Variable names should not be JS keywords</p>");


                        // ****************chapter 3*****************

//task 1
// var num1=+prompt("Enter your first number");
// var num2=+prompt("Enter your second number");
// var sum=num1+num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum);

//task 2
// var num1=+prompt("Enter your first number");
// var num2=+prompt("Enter your second number");
// var sum=num1+num2;
// var diff=num1-num2;
// var product=num1*num2;
// var division=num1/num2;
// var modulus=num1%num2;
// document.write("Sum of "+num1+" and "+num2+" is "+sum +"<br>");
// document.write("Difference of "+num1+" and "+num2+" is "+diff +"<br>");
// document.write("product of "+num1+" and "+num2+" is "+product +"<br>");
// document.write(num1+" divide by "+num2+" is "+division +"<br>");
// document.write(num1+" modulus "+num2+" is "+modulus +"<br>");

//task 3
// var num;
// document.write("Value after variable declaration is "+num+"<br>");
// num=5;
// document.write("Initial value: "+num+"<br>");
// num++;
// document.write("Value after increment is: "+num+"<br>");
// num=num+7;
// document.write("Value after addition is: "+num+"<br>");
// num--;
// document.write("Value after decrement is: "+num+"<br>");
// var rem=num%3;
// document.write("The remainder is: "+rem+"<br>");

//task 4
// var ticket_price=600;
// var no_of_tickets=5;
// var total_amount=ticket_price*no_of_tickets;
// document.write("Total cost to buy "+no_of_tickets+" tickets to a movie is "+total_amount+"PKR");

//task 5
// var table= +prompt("Table of?");
// document.write("Table of "+table+"<br>");
// for(var i=1; i<=10; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br>");
// }

//task 6
// var celsius= +prompt("Enter a celsius temperatue");
// var fahren= +prompt("Enter a Fahrenheit temperature");
// var c_to_f=(celsius*9/5)+32;
// var f_to_c=(fahren-32)*5/9
// document.write(celsius+"&#8451; is"+c_to_f+"&#8457; <br>");
// document.write(fahren+"&#8457; is"+f_to_c+"&#8451; <br>");

//task 7
// var item1=+prompt("Enter price of item 1");
// var quan1=+prompt("Enter quantity of item 1");
// var item2=+prompt("Enter price of item 2");
// var quan2=+prompt("Enter quantity of item 2");
// var total = (item1*quan1)+(item2*quan2)+100;
// document.write("<h1>Shopping Cart</h1><br><br><br>");
// document.write("Price of item 1 is "+item1+"<br>");
// document.write("Quantity of item 1 is "+quan1+"<br>");
// document.write("Price of item 2 is "+item2+"<br>");
// document.write("Quantity of item 2 is "+quan2+"<br>");
// document.write("Shipping Charges 100<br><br>");
// document.write("Total cost of your order is "+total+"<br>");

//task 8
// var marks=+prompt("Enter total marks");
// var Omarks=+prompt("Enter obtained marks");
// var percentage=(Omarks/marks)*100;
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks: "+marks+"<br>" );
// document.write("Marks obtained: "+Omarks+"<br>" );
// document.write("Percentage: "+percentage+" &#37;<br>" );

//task 9
// var dollars=10;
// var riyals=25;
// var val=(dollars*104.80)+(riyals*28);
// document.write("<h1>Currency in PKR</h1><br><br>");
// document.write("Total Currency in PKR: "+val+"<br>" );

//task 10
// var num=+prompt("Enter a number");
// var result=(((num+5)*10)/2);
// document.write("result is "+result);

//task 11
// var year=+prompt("Enter current year");
// var birthYear=+prompt("Enter your birth year");
// var age1=year-birthYear;
// var age2=age1-1;
// document.write("Current year: "+year+"<br>");
// document.write("Birth year: "+birthYear+"<br>");
// document.write("Your Age: either "+age1+" or "+ age2+" years old");

//task 12
// var radius=+prompt("Enter radius of circle");
// var circumference=2*3.142*radius;
// var area=3.142*radius*radius;
// document.write("<h1>The Geometrizer</h1><br><br>");
// document.write("Radius of circle: "+radius+"<br>");
// document.write("The circumference is: "+circumference+"<br>");
// document.write("The area is: "+area+"<br>");

//task 13
// var snack=prompt("Enter your favourite snack");
// var C_age=+prompt("Enter your current age");
// var E_age=+prompt("Enter your estimated age");
// var amount=+prompt("Enter estimated amount of intake of a day ");
// var needed=(E_age-C_age)*amount;
// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current age: "+C_age+"<br>");
// document.write("Estimated Maximum Age: "+E_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+needed+" "+snack+" to last until the ripe old age of "+E_age+"<br>");


                                // ****************chapter 6-8*****************


//task1
// var num=+prompt("Enter a number");
// document.write("<h1>RESULT</h1><br>");
// document.write("The value of a is: "+num+"<br>");
// document.write("***********************************<br>");
// document.write("The value of ++a is: "+ ++num +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of a++ is: "+ num++ +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of --a is: "+ --num +"<br>");
// document.write("The value of a is: "+num+"<br><br>");
// document.write("The value of a-- is: "+ num-- +"<br>");
// document.write("The value of a is: "+num+"<br>");

//task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//             // 1   -  0  +  1  + 1 = 3
//              //a will be decrement and value will go in a so a=1, 
//              //b will be decrement and value will go in b so b=0,
//              //b will be increment and value will go in b so b=1,
//              // value of b will remain same but then it will be decresed by 1. so b=1 at this stage but after execution of this statement it will be 0
//             // a=1 b=0 
// console.log(a,b,result);

//task 3
// var name=prompt("Enter your name");
// document.write("Welcome, "+name);

//task 4 question is not written

//task 5                (confusion)
// var table= +prompt("Table of?");
// if(table){
//     document.write("Table of "+table+"<br>");
//     for(var i=1; i<=10; i++){
//         document.write(table+" x "+i+" = "+table*i+"<br>");
//     }
// }
// else{
//     table=5;
//     document.write("Table of "+table+" (default)<br>");
//     for(var i=1; i<=10; i++){
//         document.write(table+" x "+i+" = "+table*i+"<br>");
//     }
// }

//task 6
// var sub1= prompt("Enter first subject ");
// var sub2= prompt("Enter second subject ");
// var sub3= prompt("Enter third subject ");
// var total_marks=100;
// var marks1= +prompt("Enter marks for first subject ");
// var marks2= +prompt("Enter marks for second subject ");
// var marks3= +prompt("Enter marks for third subject ");
// var final_total_marks = total_marks + total_marks + total_marks;
// var final_marks = marks1 + marks2 + marks3;
// function percentage(obtained,total){
//     return (obtained/total)*total_marks;
// }
// var percentage1=percentage(marks1,total_marks);
// var percentage2=percentage(marks2,total_marks);
// var percentage3=percentage(marks3,total_marks);
// var total_percentage=percentage(final_marks,final_total_marks);
// document.write(
//     "<table>"+
//         "<tr>"+
//             "<th>Subject</th>"+
//             "<th>Total marks</th>"+
//             "<th>Obtained marks</th>"+
//             "<th>Percentage</th>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub1+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks1+"</td>"+
//             "<td>"+percentage1+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub2+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks2+"</td>"+
//             "<td>"+percentage2+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td>"+sub3+"</td>"+
//             "<td>"+total_marks+"</td>"+
//             "<td>"+marks3+"</td>"+
//             "<td>"+percentage3+"&#37;</td>"+
//         "</tr>"+
//         "<tr>"+
//             "<td></td>"+
//             "<td>"+final_total_marks+"</td>"+
//             "<td>"+final_marks+"</td>"+
//             "<td>"+total_percentage+"&#37;</td>"+
//         "</tr>"+
//     "</table>"
// );

                                 //************* chapter 9-11 *******************

// task 1
// var city=prompt("enter city");
// if(city=='karachi'){
//     alert("welcome to the city of lights")
// }

// task 2
// var gender=prompt("enter your gender");
// if(gender=="male"){
//     alert("Good Morning Sir")
// }
// else if(gender=="female"){

//     alert("Good Morning Ma'am")
// }

// task 3
// var color=prompt("enter signal color");
// if(color=='red'){
// alert('Must stop')
// }
// else if (color=='yellow'){
//     alert('Ready to move')
// }
// else if (color=='green'){
//     alert('Move now')
// }

// task 4
// var liters=+prompt("enter remianing liters");
// if(liters<0.25){
//     alert("Please refill the fuel in your car")
// }

// task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }          //output: alert showing given condition for variable a is true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }               //output: no alert is shown

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }   //output: 2nd alert showing condition 2 is true and 4th alert is showing condition 4 is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }    //output: alert showing the cost equals

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }   //output: alert showing true

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }     //output: alert showinng car is smaller than cat

// task 6
// var sub1=+prompt("enter 1st marks");
// var sub2=+prompt("enter 2nd marks");
// var sub3=+prompt("enter 3rd marks");
// var totalMarks=+prompt("enter total marks");
// var obtainedMarks=sub1+sub2+sub3;
// var per=(obtainedMarks/totalMarks)*100;
// var grade, remarks;
// if(per>=80){
// grade="A-one";
// remarks="Excellent"
// }
// else if(per>=70){
//     grade="A";
//     remarks="Good";
// }
// else if(per>=60){
//     grade="B";
//     remarks="You need to improve";
// }
// else if(per<60){
//     grade="Fail";
//     remarks="Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br><br>");
// document.write("Total marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+obtainedMarks+"<br>");
// document.write("Percentage : "+per+"<br>");
// document.write("Grade : "+grade+"%<br>");
// document.write("Remarks : "+remarks+"<br>");

// task 7
// var num=+prompt("guess the number between 1- 10");
// var snum=9;
// if(num==snum){
//     alert("Bingo! Correct Answer")
// }
// if(num==++snum)
// {
//     alert("Close enough to the correct answer")
// }

// task 8
// var num=+prompt("enter num");
// if(num%3==0){
//     alert(num+" is divisible by 3");
// }
// else{
//     alert(num+" is not divisible by 3 ");
// }


// task 9
// var num=+prompt("enter num");
// if(num%2==0){
//     alert(num+" is even number")
// }
// else{
//     alert(num+" is odd number")
// }

// task 10
// var T=+prompt("enter temperature");
// if(T>40){
//     alert("It is too hot outside")
// }
// else if(T>30){
//     alert("The Weather today is Normal.")
// }
// else if(T>20){
//     alert("Today’s Weather is cool.")
// }else if(T>10){
//     alert("“OMG! Today’s weather is so Cool.")
// }

// task 11
// var n1=+prompt("enter 1st number");
// var n2=+prompt("enter 2nd number");
// var ope=prompt("enter operator");
// if(ope=='+'){
//     alert(n1+" + "+n2+" =  "+(n1+n2))
// }
// else if(ope=='-'){
//     alert(n1+" - "+n2+" =  "+(n1-n2))
// }
// else if(ope=='*'){
//     alert(n1+" * "+n2+" =  "+(n1*n2))
// }
// else if(ope=='/'){
//     alert(n1+" / "+n2+" =  "+(n1/n2))
// }




                                         //*********chapter 12-13 ******************

//task 1
// var a=prompt("Enter a character");
// var b=a.charCodeAt(0);
// if(b>=65&&b<=90)
// {
//     alert("Uppercase letter")
// }
// else if(b>=97&&b<=127){

//     alert("lowercase letter")
// }
// else if(b>=48&&b<=57){
//     alert("number")
// }
// else{
//     alert("other than a number and letter");
// }

//  task 2
// var a=+prompt("Enter 1st number");
// var b=+prompt("Enter 2nd number");

// if(a>b){
//     alert(a + ' is greater')
// }
// else if(b>a){
//     alert(b+ ' is greater')
// }
// else if(a==b){
//     alert("both are equal")
// }

//  task 3
// var a=+prompt("Enter number");

// if(a>0){
//     alert("Positive Number")
// }
// else if(a<0){
//     alert("Negative Number")
// }
// else{
//     alert("Number is 0")
// }

//  task 4
// var letter=prompt("Enter letter");
// if(letter==='a'||letter==='e'||letter==='i'||letter==='o'||letter==='u'){
//     alert("true");
// }
// else{
//     alert('false');
// }

//  task 5
// var pass="mypassword";
// var userpass=prompt("Enter password");

// if(userpass==''){
//     alert('Please enter your password');
// }
// else if(pass===userpass){
//     alert('Correct! The password you entered matches the original password');
// }
// else{
//     alert('Incorrect password');
// }

// chpater 8 task 6
// var greeting;
// var hour = 13;
// if(hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//  task 7
// var time=+prompt("Enter a time in 24-hr formate");
// if(time==24){
//     time=0;
// }
// var AmOrPm = time >= 12 ? 'pm' : 'am';
// formatedTime= time%12;
// if(time==0||time==12||time==24){
//     formatedTime=formatedTime+12;
//     alert("time is "+formatedTime+AmOrPm+" in 12-hr formate");
// }
// else{
//     alert("time is "+formatedTime+AmOrPm+" in 12-hr formate");
// }
//  //for greeting
// if(time>=0&&time<12){
//     alert("Good morning");
// }
// else if(time>=12&&time<17){
//     alert("Good afternoon");
// }
// else if(time>=17&&time<21){
//     alert("Good evening");
// }
// else if(time>=21&&time<=24){
//     alert("Good night");
// }


                                //***********chapter 14-16********************

//task 1
// var arr=[];

//task 2
// var arr={};

//task 3
// var arr;
// arr=['ahmed','rauf','hamza'];

//task 4
// var arr;
// arr=[1,2,3];

//task 5
//var arr;
//arr=[true,false];

//task 6
// var arr;
// arr=["name",true,50];

//task 7
// var arr=["SSC", 'HSC', 'BCS',' BS',' BCOM',' MS', 'M. Phil.', 'PhD']
// for(i=0;i<=arr.length;i++){
//     document.write(i +' )'+ arr[i]+'<br>')
// }

//task 8
// var students=[];
// var marks=[];
// var s1=prompt('Enter 1st name');
// var marks1=prompt('Enter 1st marks');
// var s2=prompt('Enter 2nd name');
// var marks2=prompt('Enter 2nd marks');
// var s3=prompt('Enter 3rd name');
// var marks3=prompt('Enter 3rd marks');
// var total=500;
// students.push(s1,s2,s3);
// marks.push(marks1,marks2,marks3);
// var p1=(marks[0]/total)*100;
// var p2=(marks[1]/total)*100;
// var p3=(marks[2]/total)*100;
// document.write("Score of "+students[0]+ ' is '+marks[0]+' . Percentage: '+ p1 +'%<br>');
// document.write("Score of "+students[1]+ ' is '+marks[1]+' . Percentage: '+ p2 +'%<br>');
// document.write("Score of "+students[2]+ ' is '+marks[2]+' . Percentage: '+ p3 +'%<br>');

//task 9a
// var color=['red','blue','yellow','green'];
// var addColor=prompt("Enter color");
// color.unshift(addColor);
// document.write(color)
//task 9b
// var addColor=prompt("Enter color");
// color.push(addColor);
// document.write(color)
//task 9c
// var addColor1=prompt("Enter color1");
// var addColor2=prompt("Enter color2");
// color.unshift(addColor1,addColor2);
// document.write(color)
//task 9d
// color.shift();
// document.write(color)
//task 9e
// color.pop();
// document.write(color)
//task 9f
// var index=+prompt("Enter index");
// var addColor1=prompt("Enter color name");
// color.splice(index,0,addColor1)
// document.write(color)
//task 9g
// var index=prompt("Enter index you want to delete");
// var index1=prompt("Enter how many color you want to delete");
// color.splice(index,index1)
// document.write(color)

//task 10
// var arr=[320,230,480,120];
// document.write("Score of students "+arr+'<br>');
// document.write("Ordered Score of students "+arr.sort());

//task 11
// var cities=['karachi','lahore','quetta','islamabad','peshawar'];
// document.write("Cities List : "+cities+"<br>");
// var selectedcities=cities.slice(2,4);
// document.write("Selected Cities List : "+selectedcities);

//task 11
// var arr = ['This ', ' is ', ' my ', ' cat'];
// var arr1=arr.join("");
// document.write("Array: "+arr+'<br>');
// document.write("String: "+arr1+'<br>');

//task 11
// var arr=[];
// var Device1=prompt("Enter Device name");
// var Device2=prompt("Enter Device name");
// var Device3=prompt("Enter Device name");
// var Device4=prompt("Enter Device name");
// var Device5=prompt("Enter Device name");
// var length;
// arr.push(Device1,Device2,Device3,Device4,Device5);
// document.write("Devices: "+arr+"<br>");
// length=arr.length;
// for(i=0;i<length;i++){

//     document.write(arr.shift()+'<br>')
// }

//task 12
// var arr=[];
// var Device1=prompt("Enter Device name");
// var Device2=prompt("Enter Device name");
// var Device3=prompt("Enter Device name");
// var Device4=prompt("Enter Device name");
// var Device5=prompt("Enter Device name");
// var length;
// arr.push(Device1,Device2,Device3,Device4,Device5);
// document.write("Devices: "+arr+"<br>");
// length=arr.length;
// for(i=0;i<length;i++){

//     document.write(arr.pop()+'<br>')
// }

//task 13
// var mobiles=['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
// document.write("<select>"+
// "<option>"+  mobiles[0] +"</option>"+
// "<option>"+  mobiles[1] +"</option>"+
// "<option>"+  mobiles[2] +"</option>"+
// "<option>"+  mobiles[3] +"</option>"+
// "<option>"+  mobiles[4] +"</option>"+
// "<option>"+  mobiles[5] +"</option>"+
// "</select>"
// );


                    // ******************************chapter 17-20************************

//task 1
//var arr = [[],[]];

//task 2
//  var arr=[
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// console.table(arr);

//task 3
// for(var i=1; i<=10;i++){
//     document.write(i+"<br>");
// }

//task 4
// var table= +prompt("Table of: ");
// var count= +prompt("Length of table: ");
// document.write("Table of "+table+"<br>");
// document.write("Length "+count+"<br><br>");
// for(var i=1; i<=count; i++){
//     document.write(table+" x "+i+" = "+table*i+"<br>");
// }

//task 5
// var fruits=["apple", "banana", "mango", "orange", "strawberry" ];
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>");
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

//task 6
// document.write("<h1>Counting</h1><br>");
// for(var i=1; i<=15; i++){
//     document.write(i+",");
// }
// document.write("<h1>Reverse Counting</h1><br>");
// for(var i=10; i>=1; i--){
//     document.write(i+",");
// }
// document.write("<h1>Even</h1><br>");
// for(var i=0; i<=20; i++){
//     if(i%2===0){
//         document.write(i+",");
//     }
// }
// document.write("<h1>Odd</h1><br>");
// for(var i=0; i<=20; i++){
//     if(i%2!==0){
//         document.write(i+",");
//     }
// }
// document.write("<h1>Series</h1><br>");
// for(var i=1; i<=20; i++){
//     if(i%2===0){
//         document.write(i+"k,");
//     }
// }

//task 7
// var items=["cake", "apple pie", "cookie", "chips","patties"];
// var found=false;
// var index;
// var userItem=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0; i<items.length; i++){
//     if(userItem===items[i]){
//         found=true;
//         index=i;
//     }
// }
// if(found){
//     document.write(userItem+" is available at index "+index+" in our bakery");
// }
// else{
//     document.write("We are sorry. "+userItem+" is not available in our bakery");
// }

//task 8
// var arr=[24,53,78,91,12];
// var num=arr[0];
// for(var i=1; i<arr.length; i++){
//     if(arr[i]>num){
//         num=arr[i];
//     }
   
// }
// document.write("Array Items: ");
// for(var j=0; j<arr.length;j++){
//         document.write(arr[j]+", ");
// }
// document.write("<br>The Largest number is "+num);

//task 9
// var arr=[24,53,78,91,12];
// var num=arr[0];
// for(var i=1; i<arr.length; i++){
//     if(arr[i]<num){
//         num=arr[i];
//     }
   
// }
// document.write("Array Items: ");
// for(var j=0; j<arr.length;j++){
//         document.write(arr[j]+", ");
// }
// document.write("<br>The smallest number is "+num);

//task 10
// for(var i=1; i<=100; i++){
//     if(i%5===0){
//         document.write(i+", ");
//     }
// }


// *********************************chapter 21 to 25


//task 1
// var firstName= prompt("Enter first name: ");
// var lastName= prompt("Enter last name: ");
// var fullName= firstName +" "+ lastName;
// alert("Welcome "+ fullName);

//task 2
// var mob= prompt("Enter favourite mobile model: ");
// document.write("Your favourite Phone is: "+mob+"<br>");
// document.write("Length of string: "+mob.length);

//task 3
// var nationality="Pakistani";
// document.write("String: "+nationality+"<br>");
// document.write("Index of 'n': "+nationality.indexOf("n")+"<br>");

//task 4
// var string="Hello World";
// document.write("String: "+string+"<br>");
// document.write("Index of 'l': "+string.lastIndexOf("l")+"<br>");

//task 5
// var nationality="Pakistani";
// document.write("String: "+nationality+"<br>");
// document.write("Character at index 3: "+nationality.charAt(3)+"<br>");

//task 6
// var firstName= prompt("Enter first name: ");
// var lastName= prompt("Enter last name: ");
// var fullName= firstName.concat(" "+lastName);
// alert("Welcome "+ fullName);

//task 7
// var word="Hyderabad";
// document.write("City: "+word+"<br>");
// document.write("After replacement: "+word.replace("Hyder", "Islam"));

//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// for(var i=0; i< message.length; i++){
//     if(message.slice(i,i+3)==="and"){
//         var message= message.slice(0,i)+ "&" + message.slice(i+3);
//     }
// }
// alert(message);

//task 9
// var value="472";
// var value2=Number(value);
// document.write("Value: "+value+"<br>");
// document.write("Type: "+typeof(value)+"<br>");
// document.write("Value: "+value2+"<br>");
// document.write("Type: "+typeof(value2)+"<br>");

//task 10
// var text=prompt("Enter some text");
// alert("You entered: "+text.toUpperCase());

//task 11
// var text=prompt("Enter some text");
// alert("You entered: "+text.charAt(0).toUpperCase()+text.slice(1));

//task 12
// var num= 35.36;
// var string=num.toString();
// for(var i=0; i< string.length; i++){
//     if(string.slice(i,i+1)==="."){
//         string=string.slice(0,i)+string.slice(i+1);
//     }
// }
// document.write("number: "+num+"<br>");
// document.write("Result: "+string);

//task 13
// var name = prompt("Enter your name");
// if(name.includes("!")||name.includes(".")||name.includes(",")||name.includes("@")){
//     alert("please enter a valid name");
// }
// else{
//     alert("valid name");
// }

//task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input=prompt("Search items: ").toLowerCase();
// var found=false;
// for(var i=0; i<arr.length; i++){
//     if(input===arr[i]){
//         found=true;
//         var index=i;
//     }
// }
// if(found){
//     document.write(input+" found at index "+index);
// }
// else{
//     document.write(input+" doesnot found");
// }

//task 15 
// var password=prompt("Enter password");
// document.write("<h1>Entered Password: "+password+"<br>")
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;

// if(password.length<6){
//     alert("Password length should not be less than 6, Please enter a valid password")
// }
// if(password.match(numbers)&&(password.match(upperCaseLetters)||password.match(lowerCaseLetters))){
//     if(password[0]>=0||password[0]<=9){
//         alert("Password should not begin with number")
//     }
// }
// else{
//     alert("Password must contain letters and number")
// }

//task 16
// var university = "University of Karachi";
// var result= university.split("");
// for(var i=0; i<university.length; i++){
//     document.write(result[i]+"<br>");
// }

//task 17
// var input= prompt("Enter some text");
// document.write("User Input: "+input+"<br>");
// document.write("Last character: "+input.charAt(input.length-1));

//task 18
// var text="The quick brown fox jumps over the lazy dog";
// var counter=0;
// for(var i=0; i<text.length; i++){
//     if(text.slice(i,i+3).toLowerCase()==="the"){
//         counter++;
//     }
// }
// document.write("Text: "+text+"<br>");
// document.write("There are "+counter+" occurence(s) of the word 'the' ");


// ****************************************chapter 26-30

//task 1
// var num=+prompt("Enter a number");
// if(Math.sign(num)===1){
// document.write("number: "+num+"<br>");
// document.write("number: "+Math.round(num)+"<br>");
// document.write("number: "+Math.floor(num)+"<br>");
// document.write("number: "+Math.ceil(num)+"<br>");
// }
// else{
//     alert("Enter Positive Number")
// }

//task 2
// var num=+prompt("Enter a number");
// if(Math.sign(num)===-1){
// document.write("number: "+num+"<br>");
// document.write("number: "+Math.round(num)+"<br>");
// document.write("number: "+Math.floor(num)+"<br>");
// document.write("number: "+Math.ceil(num)+"<br>");
// }
// else{
//     alert("Enter a Negative Number")
// }

//task 3
// var num= +prompt("Enter a number");
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//task 4
// document.write("random dice value: "+Math.ceil(Math.random() * 6));

//task 5
//var val= Math.ceil(Math.random() * 2);
// if(val===1){
//     document.write("random coin value: Tails ");
// } else{
//     document.write("random coin value: Heads ");
// }

//task 6
//document.write("random number between 1 and 100: "+Math.ceil(Math.random() * 100));

//task 7   
// var regex = /[+-]?\d+(\.\d+)?/g;
// var str2 = prompt("Enter your weight in kg");
// var floats2 = str2.match(regex).map(function(v) { return parseFloat(v); });
// document.write("The weigh of user is "+floats2+" kilograms");

//task 8
// var secret= Math.ceil(Math.random() * 10) ;
// var input= +prompt("Enter a number between 1 and 10");
// if(input===secret){
//     alert("you won");
// }
// else{
//     alert("try again");
// }


//********************************************* */ chapter 31-34

//task 1
// var today= new Date();
// document.write(today);

//task 2
// var today= new Date();
// var months=["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];
// document.write("Current month: "+months[today.getMonth()]);

//task 3
// var today= new Date();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// document.write("Today is: "+days[today.getDay()]);

//task 4
// var today= new Date();
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// if(today.getDate()==="0" || today.getDate()==="6" ){
//     document.write("It's Fun day");
// } else{
//     document.write("Not sunday or saturday");
// }

//task 5
// var today= new Date();
// if(today.getDate()<16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month");
// }

//task 6
// var today= new Date();
// var msec=today.getTime();
// document.write("Current Date: "+today+"<br>");
// document.write("Elapsed milliseconds since Jan 1, 1970: "+msec+"<br>");
// document.write("Elapsed minutes since Jan 1, 1970: "+(msec/1000*60)+"<br>");

//task 7 
// var today= new Date();
// if(today.getHours()<=12){
//     alert("Its AM");
// } else{
//     alert("Its PM");
// }

// task 8
// var laterDate= new Date("dec 31 2020 00:00:00");
// document.write(laterDate);

//task 9
// var ramadan= new Date("June 18 2015");
// var today= new Date();
// var ramadanTime= ramadan.getTime();
// var todayTime= today.getTime();
// var diff= todayTime-ramadanTime;
// var days= Math.floor(diff/(1000*60*60*24));
// alert(days+" days have passed since 1st Ramadan, 2015");

//task 10
// var refDate= new Date("Dec 5 2015 22:50:16");
// var refDateTime= refDate.getTime();
// var startDate= new Date("Jan 01 2015");
// var startDateTime= startDate.getTime();
// var diff= refDateTime - startDateTime;
// var acc= Math.floor(diff/(1000*60));
//document.write("On reference date "+refDate+" ,"+acc+" seconds had passed since beginning of 2015")

//task 11
// var currDate=new Date();
// var date=new Date();
// var hr=date.getHours();
// var date1=new Date(date.setHours(hr+1))
// document.write("<h1>Current date "+currDate)
// document.write("<h1>After 1 hour, it will be "+date1)

//task 12
// var currDate=new Date();
// var date=new Date();
// var year=date.getFullYear();
// var date1=new Date(date.setFullYear(year-100))
// document.write("<h1>Current date "+currDate)
// document.write("<h1>Hundred years back, it was "+date1)

//task 13
// function dob(age){
//     var date=new Date();
//     var year=date.getFullYear();
//     var dob=year-age;
//     document.write("<h1>Your age is "+age)
//     document.write("<h1>Your birth year is "+dob)
// }
// var a=prompt("Enter your age")
// dob(a)

// ***************************************************chapter 35-38

//task 1
// function showDate(){
//     return new Date();
// }
// var today= showDate();
// document.write(today);

//task 2
// function showName(firstName, lastName){
//     document.write(firstName+" "+lastName);
// }
// showName("Rija", "Nadeem");

//task 3
// function addition(num1, num2){
//     var sum= num1+num2;
//     return sum;
// }
// var arg1= +prompt("Enter 1st num");
// var arg2= +prompt("Enter 2nd num");
// var add= addition(arg1,arg2);
// alert(add);

//task 4
// function calc(num1,num2,oper) {
//     if(oper==="+"){
//         return num1+num2;
//     }
//     else if(oper==="-"){
//         return num1-num2;
//     }
//     else if(oper==="*"){
//         return num1*num2;
//     }
//     else if(oper==="/"){
//         return num1/num2;
//     }
//     else if(oper==="%"){
//         return num1%num2;
//     }
// }
// var arg1= +prompt("Enter 1st num");
// var arg2= +prompt("Enter 2nd num");
// var operator= prompt("Enter operator");
// var result= calc(arg1,arg2,operator);
// alert("Result of "+arg1+" "+operator+" "+arg2+" : "+result);

//task 5
// function getSquare(num){
//     return num*num;
// }
// var input = +prompt("Enter a number and get its square");
// alert(getSquare(input));

//task 6
// function factorial(num) {
//     var sum=1;
//     for(var i=num; i>=1; i--){
//         sum=sum*i;
//     }
//     return sum;
// }
// var input = +prompt("Enter a number and get its factorial");
// alert(factorial(input));

//task 7
// function counting(start,end) {
//     for(var i=start; i<=end; i++){
//         document.write(i+ " ");
//     }
// }
// var arg1= +prompt("Enter staring num");
// var arg2= +prompt("Enter ending num");
// counting(arg1, arg2);

//task 8
// function calcSquare(num) {
//     return num*num;
// }
// function calcHypotenuse(base,perp) {
//     var baseSquare= calcSquare(base);
//     var perpSquare= calcSquare(perp);
//     var hypo= Math.sqrt(baseSquare+perpSquare);
//     return hypo;
// }
// var arg1= +prompt("Enter base");
// var arg2= +prompt("Enter perpendicular");
// var result=calcHypotenuse(arg1, arg2);
// alert(result);

//task 9(i)
// function RecArea(width, height){
//     var area= width*height;
//     return area;
// }
// var result= RecArea(2,5);
// alert("Area of Rectangle is "+result);

//task 9(ii)
// function RecArea(width, height){
//     var area= width*height;
//     return area;
// }
// var arg1= +prompt("Enter width");
// var arg2= +prompt("Enter height");
// var result= RecArea(arg1,arg2);
// alert("Area of Rectangle is "+result);

//task 10
// function reverseString(str) {
//     var arr=str.split("");
//     var revArr=arr.reverse();
//     var revStr=revArr.join("");
//     if(revStr===str){
//         alert("String is palindrome");
//     }
//     else{
//         alert("String is NOT palindrome");
//     }
// }
// reverseString("hello");
// reverseString("madam");

//task 11
// function captialize(str) {
//     var arr=str.split(" ");
//     for(var i=0; i<arr.length;i++){
//         var first_letter  =arr[i].slice(0,1).toUpperCase();
//         arr[i] = first_letter+arr[i].slice(1);
//     }
//     var result= arr.join(" ");
//     alert(result);
// }
// captialize("hello world");
// captialize("Bbq");
// captialize("the black dog");
// captialize("believe in yourself, you can do it");

//task 12 
// function longestWord(str) {
//     var arr=str.split(" ");
//     var ans=arr[0];
//     for(var i=1; i<arr.length; i++){

//        if((arr[i].length) > (arr[i-1].length)){
//            ans=arr[i];
//        }
     
//     }
//     document.write("<h1>EXAMPLE STRING : "+str+"<br>")
//     document.write("<h1>EXPECTED STRING : "+ans+"<br>")
// }
// longestWord("my name is hamza");

//task 13
// function counter(str,letter){
//     var counter=0;
//     var str2=str.toLowerCase();
//     for(var i=0; i<str2.length; i++){
//         if(str2.slice(i,i+1)===letter){
//             counter++
//         }
//     }
//     return counter;
// }
// var arg1= prompt("Enter string");
// var arg2 =prompt("Enter letter to be searched");
// var result= counter(arg1,arg2);
// alert("the word "+arg2+" appears "+result+ " time(s) in the string: "+arg1);

//task 14
// function calcCircumference(radius) {
//     var circum= 2*3.14*radius;
//     alert("Circumference is: "+circum);
// }
// function calcArea(radius) {
//     var area= 3.14*radius*radius;
//     alert("Area is: "+area);
// }
// var r= +prompt("Enter radius of circle");
// calcCircumference(r);
// calcArea(r);


//****************************************chapter 38 to 42***********************

// task 1

// function power(a,b){
//     var result=1;
//     for(var i=1; i<=b; i++){
//       var result=result*a
//     }
//     return result;
// }
// var ans=power(2,4)
// console.log(ans);

// task 2

// function leapYear(year){
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
//         alert(year+" is a leap year");  
//     }
//     else{
//         alert(year+" is not a leap year");  
//     }
// }
// var year=+prompt("Enter Year");
// leapYear(year);

// task 3

// function AreaOfTriangle(S,a,b,c){
//     var area=S*(S-a)*(S-b)*(S-c)
//     document.write("Area of Triangle : "+area+"<br>")
// }

// function sidesOfTriangle(a,b,c){
// var S = ( a + b + c ) / 2;
// document.write("S : "+ S+"<br>")
// return S;
// }

// var a=+prompt("Enter one side");
// var b=+prompt("Enter second side");
// var c=+prompt("Enter third side");
// var s=sidesOfTriangle(a,b,c)
// AreaOfTriangle(s,a,b,c)

// task 4

// function mainFunction(){
//     var marks1=+prompt("Enter marks in 1st subject");
//     var marks2=+prompt("Enter marks in 2nd subject");
//     var marks3=+prompt("Enter marks in 3rd subject");
//     var obtain= marks1+marks2+marks3;
//     var averageMarks=average(obtain)
//     var percent=percentage(obtain)
//     document.write("Average Marks: "+averageMarks+"<br>")
//     document.write("Percentage: "+percent+"%"+"<br>")
// }
// function percentage(obtain){
//     var totalMarks=300;
//     var per=(obtain/totalMarks)*100;
//     var finalPercent=per.toFixed(2)
//     return finalPercent;
// }

// function average(obtain){
//     var avg=(obtain)/3;
//     var finalAvg=avg.toFixed(2)
//     return finalAvg;
// }
// mainFunction()

// task 5

// function indexCalculator(name,char){
//     document.write("Name: "+name+"<br>")
//     document.write("Character: "+char+"<br>")
//     for(var i=0;i<=name.length;i++){
//         if(name[i]===char){
//         document.write("Index of "+char+" is: "+i+"<br>")   
//         }
//     }
// }
// var name=prompt("Enter your name")
// var char=prompt("Which letter index you want to know?")
// indexCalculator(name,char)

// task 6

// function terminateVowel(string){
//     var vowels = "aeiou";
//     var strToArr = string.toLowerCase().split("");
//     var newArr = strToArr.filter(
//         function(alphabet){
//         if(vowels.indexOf(alphabet)  == -1){
//             return alphabet;
//         }
//     });
//     var string = "";
//     newArr.forEach(function(alphabet){
//         string += alphabet;
//     });
//     return string;
// }
// var string=prompt("Enter string")
// var result=terminateVowel(string);
// document.write("String : "+string+"<br>")
// document.write("String without vowels: "+result+"<br>")

//task 7

// var str = "Pleases read this application and give me gratuity";
// var arrStr = str.split('');
// var count = 0;
// for (var i = 0; i < arrStr.length; i++){
//   switch (arrStr[i]) {
//      case 'a':
//      case 'e': 
//      case 'i':
//      case 'o':
//      case 'u':
//        switch(arrStr[i+1]){
//             case 'a':
//             case 'e': 
//             case 'i':
//             case 'o':
//             case 'u':
//                 count++;
//                 document.write(arrStr[i]+arrStr[i+1]+'<br>');
//                 break;
//             default:
//                 break;
//        }
     
//      break;
//      default:
//      break;
//    }
 
//  }
//  document.write('No. of occurences: '+count);

// task 8

// function metersFun(d){
//     var m=d*1000;
//     document.write("Distance in meters: "+m+"<br>")
//     return m;
// }
// function feetFun(m){
//     var f=m*3.28084;
//     document.write("Distance in feet: "+f+"<br>")
//     return f;
// }   
// function inchesFun(f){
//     var i=f*12;
//     document.write("Distance in inches: "+i+"<br>")
//     return i;
// }
// function cmFun(i){
//     var c=i*2.54;
//     document.write("Distance in cm: "+c+"<br>")
// }

// var distance=prompt("Enter distance in kilometers");
// document.write("Distance in kilometers : "+distance+"<br>")
// var meters=metersFun(distance);
// var feet=feetFun(meters);
// var inches=inchesFun(feet);
// cmFun(inches);

// task 9

// function overTimePayCal(hr){
//     var overTime;
//     var Pay;
//     if(hr>40){
//         overTime = hr - 40;
//         Pay = overTime * 12.00;
//         document.write("Overtime Pay is "+Pay.toFixed(2))
//     }
//     else{
//         document.write("No over time")
//     }
// }
// var hr=prompt("Enter working hours")
// overTimePayCal(hr)

//task 10

// function denominations(amount){
//     var hundred=parseInt(amount/100);
//     var fifty=parseInt((amount-(hundred*100)) / 50);
//     var ten=parseInt((amount-(hundred*100)-(fifty*50))/ 10);
//     document.write("You have "+hundred+" hunderd notes "+fifty+" fifty notes "+ten+" ten notes")
// }
// var amount=prompt("Amount of withdrawal")
// denominations(amount)


//**************************************************chapter 43 to 48*****************

//task1

// function alertBox(){
//     alert("Welcome");
// }

//task 2

// function showAlert(){
//     alert("Thanks for purchasing a phone from us")
// }

//task 3

// document.body.addEventListener('click', function (evt) {
//     if (evt.target.className === 'del') {
//         evt.target.parentElement.parentElement.remove();
//     }
// });

//task 4

// function imageover(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./m1.jpeg"
// }

// function imageout(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./m2.jpg"
// }

// task 5

// var count=0;
// function increment(){
//     count=count+1;
//     var c=document.getElementsByClassName("counter")[0];
//     c.innerHTML=count;
// }
// function decrement(){
//     count=count-1;
//     var c=document.getElementsByClassName("counter")[0];
//     c.innerHTML=count;
// }

//*******************************************************chapter 49 to 52****************/

//task 1

// function signup(){
//   var name= document.getElementById('name');
//   var num= document.getElementById('num');
//   var email= document.getElementById('email');
//   var pw= document.getElementById('pw');
//   var data= document.getElementById('formdata');
//   var name2= document.createElement('p');
//   name2.innerText='NAME: '+name.value;
//   var email2= document.createElement('p');
//   email2.innerText='EMAIL: '+email.value;
//   var num2= document.createElement('p');
//   num2.innerText='NUMBER: '+num.value;
//   var pw2= document.createElement('p');
//   pw2.innerText='PASSWORD: '+pw.value;
//   data.appendChild(name2);
//   data.appendChild(num2);
//   data.appendChild(email2);
//   data.appendChild(pw2);
//   name.value=' ';
//   num.value=' ';
//   email.value=' ';
//   pw.value=' ';
// }

// task 2

// function readMore(){
//     var text=document.getElementById("text");
//     text.style.display='block'
//     var more=document.getElementById("more");
//     more.style.display="none";
// }

// task 3

// function createRow(){
//   var stdName= document.getElementById('name');
//   var stdClass= document.getElementById('std-class');
//   var stdTable= document.getElementsByClassName('student-table')[0];
//   var tableRow= document.createElement('tr');
//   var tableData1= document.createElement('td');
//   var tableData2= document.createElement('td');
//   var tableData3= document.createElement('td');
//   var tableData4= document.createElement('td');
//   tableData1.innerText=stdName.value;
//   tableData2.innerText=stdClass.value;
//   var deleteBtn= document.createElement('button');
//   deleteBtn.setAttribute('class', 'deleteRow');
//   deleteBtn.innerText="DELETE";
//   tableData3.appendChild(deleteBtn);
//   var editBtn= document.createElement('button');
//   editBtn.setAttribute('class', 'editRow');
//   editBtn.innerText="EDIT"
//   tableData4.appendChild(editBtn);
//   tableRow.appendChild(tableData1);
//   tableRow.appendChild(tableData2);
//   tableRow.appendChild(tableData3);
//   tableRow.appendChild(tableData4);
//   stdTable.appendChild(tableRow);
// stdName.value=" ";
// stdClass.value=" ";
// editBtn.addEventListener('click', editRow);
// deleteBtn.addEventListener('click', deleteRow);

// }
// function deleteRow(event){
//     event.target.parentElement.parentElement.remove();
// }
// function editRow(event){
//     var editForm= document.getElementById('editForm');
//     editForm.style.display="block";
//     var editname= document.getElementById('editname');
//     var editclass= document.getElementById('editclass');
//     editname.value=event.target.parentElement.parentElement.children[0].innerText;
//     editclass.value=event.target.parentElement.parentElement.children[1].innerText;
//     event.target.parentElement.parentElement.remove();
// }
// function saveChange(){
//     var editForm= document.getElementById('editForm');
//     editForm.style.display="none";
//     var editname= document.getElementById('editname');
//     var editclass= document.getElementById('editclass');
//     var stdTable= document.getElementsByClassName('student-table')[0];
//     var tableRow= document.createElement('tr');
//     var tableData1= document.createElement('td');
//     var tableData2= document.createElement('td');
//     var tableData3= document.createElement('td');
//     var tableData4= document.createElement('td');
//     tableData1.innerText=editname.value;
//     tableData2.innerText=editclass.value;
//     var deleteBtn= document.createElement('button');
//     deleteBtn.setAttribute('class', 'deleteRow');
//     deleteBtn.innerText="DELETE";
//     tableData3.appendChild(deleteBtn);
//     var editBtn= document.createElement('button');
//     editBtn.setAttribute('class', 'editRow');
//     editBtn.innerText="EDIT"
//     tableData4.appendChild(editBtn);
//     tableRow.appendChild(tableData1);
//     tableRow.appendChild(tableData2);
//     tableRow.appendChild(tableData3);
//     tableRow.appendChild(tableData4);
//     stdTable.appendChild(tableRow);
//     editBtn.addEventListener('click', editRow);
//     deleteBtn.addEventListener('click', deleteRow);
// }


//*********************************************************chapter 53 to 57****************/

//task 1

// var img=['1.jpg','2.jpg','3.jpg','4.png','5.jpg','6.jpg','7.png','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.png','15.jpg',];
// var images=document.getElementById('images');
// for(var i=0;i < img.length;i++){
// var imgTag = document.createElement('img')
// imgTag.setAttribute('width','200px')
// imgTag.setAttribute('height','200px')
// imgTag.setAttribute('src', img[i])
// imgTag.addEventListener('click', showModal)
// console.log(imgTag)
// images.appendChild(imgTag)
// }

// function showModal(e){
// var modal= document.getElementById('modal');
// modal.classList.remove('modal-close');
// modal.classList.add('modal-open')
// modal.style.display = "block";
// var modalImg= document.getElementById('modal-img')
// modalImg.setAttribute('src', e.target.src)
// console.log(modalImg)
// }
// function onClosedImag(){
//     var modal= document.getElementById('modal');
//     modal.classList.add('modal-close')
//     modal.classList.remove('modal-open')
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

//task 2
// function zoomIn(){
//   var para = document.getElementById('para');
//   para.style.fontSize = "40px";
// }
// function zoomOut(){
//   var para = document.getElementById('para');
//   para.style.fontSize = "30px";
// }

//**************************************************************chapter 58 to 67****************/

// TASK 1(i)
// var content = document.getElementById("main-content");

//TASK 1(ii)
// console.log(content.children);

//TASK 1(iii)
// var elements = document.getElementsByClassName("render");
// for(var i = 0; i<elements.length; i++){
//   var text = elements[i].innerHTML;
//   document.write(text + "<br>");
// }

//TASK 1(iv)
// var fname = document.getElementById("first-name");
// fname.value = "YOUR NAME HERE";

//TASK 1(v)
// var lname = document.getElementById("last-name");
// lname.setAttribute("value", "LAST NAME HERE");
// var email = document.getElementById("email");
// email.setAttribute("value","YOUR EMAIL");

// TASK 2(i)
// var contentType = document.getElementById("form-content");
// document.write(contentType.nodeType);

// TASK 2(ii)
// var lastname = document.getElementById("last-name");
// document.write(lastname.nodeType);
// document.write (lastname.hasChildNodes());
// document.write("The element doesn't have any child nodes");

// TASK 2(iii)
// var lastname = document.getElementById("last-name");
// var pTag = document.createElement("p");
// var text = document.createTextNode("New child");
// pTag.appendChild(text);
// lastname.appendChild(pTag);
// document.write(lastname.hasChildNodes() + "<br>");


// TASK 2(iv)
// var main = document.getElementById("main-content");
// document.write(main.firstChild.nodeName + "<br>");
// document.write(main.lastChild.nodeName);

// TASK 2(v)
// var lname = document.getElementById("last-name");
// document.write(lname.nextSibling.nodeName + "<br>");
// document.write(lname.previousSibling.nodeName);

// TASK 2(vi)
// var email = document.getElementById("email");
// document.write(email.parentNode.nodeName + "<br>");
// document.write(email.nodeType);
