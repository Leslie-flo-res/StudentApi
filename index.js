const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));



let students = [
    {id:001,name:"Nick Miller",grade:10,gpa:2.5,nationality:"American"},
    {id:002,name:"Jessica Day",grade:12,gpa:3.0,nationality:"Canadian"},
    {id:003,name:"Amy Santiago",grade:11,gpa:4.0,nationality:"Cuban"},
    {id:004,name:"Terry Crews ",grade:10,gpa:3.4,nationality:"Polish"}
];

// Get all Students
app.get('/students', function(req,res){
    res.send(students);
});

//add a new student 
app.post('/students',function(req,res){
    let student_data = req.body;
    student_data.grade = parseInt(student_data.grade);   
    student_data.gpa= parseInt(student_data.gpa);    
    student_data.id= parseInt(student_data.id);   
   students.push(student_data);      
    res.send(student_data);
});




// get Student by ID 
app.get('/students/:student_id', function(req,res){
    let studentId = parseInt(req.params.student_id);
     let student_data = students.find(function(item){
        return item.id === studentId;
            
        

    });res.send(student_data); 
    
    student_data != studentId;
   
    res.send( 'ERROR NO STUDENT ');
    
});


// update student name
app.patch('/students/:student_id',function(req,res){
    let student_id = parseInt(req.params.student_id);
let student_data = req.body;
let index = students.findIndex(function(item){
        return item.id === student_id;
}); 
students[index].name = student_data.name;

    res.send( students[index]);

});


//delete a student
app.delete('/students/:student_id',function(req,res){
    let student_id = parseInt(req.params.student_id);
    let index = students.findIndex(function(item){
        return item.id === student_id;
});
    
       let removedStudent = students.splice(index,1);
       res.send(removedStudent);

});
              


var server = app.listen(8000,function(){
    console.log(' Server running on port 8000...');
});