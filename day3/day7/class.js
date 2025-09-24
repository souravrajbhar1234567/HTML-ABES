const stu3={
    rollno:3,
    name:"pqr"
}
class student {
    constructor( rollno ,name)
{
    this.rollno=rollno;
    this.name=name;

}

greet(){
    return 'hello $(this.name)';

}

}
let stu1=new student(1,'xyz');
let stu2=new student(2,"abc");
console.log(stu1);
console.log(stu2);
