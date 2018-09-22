import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup,FormBuilder,Validator,ReactiveFormsModule ,FormControl } from '@angular/forms';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  firstNum :number;
  secondNum:number;
  sum  :number;
  min :number;
  max :number;
   tempFisrtNum :number;
   temSecondNum :number;
  multiplyForm :FormGroup;
  numberMxRange =[10,100,1000,1000];
   disp_num1 :String;
   disp_num2 :String;
  constructor() {

    this.multiplyForm =this.createFormGroup();

   }

  ngOnInit() {
        this.firstNum=12;
        this.secondNum=23;
        this.disp_num1="1 2";
        this.disp_num2="2 3"
      }


  createFormGroup() {
    return new FormGroup({
      firstNum: new FormControl(),
      secondNum: new FormControl(),
      sum: new FormControl() ,      
      max :new FormControl (100) ,
      disp_num1:new FormControl (),
      disp_num2:new FormControl ()
    });
  }

  generateRanadomNumber (){
   
   
    do {

      this.tempFisrtNum = Math.floor(Math.random() * this.multiplyForm.value.max );    
      this.temSecondNum = Math.floor(Math.random() * this.multiplyForm.value.max ); 
     
    }
    while ( this.tempFisrtNum<=this.temSecondNum);

    this.firstNum =this.tempFisrtNum;
    this.secondNum =this.temSecondNum;
    this.disp_num1= this.separateDigits_num( this.firstNum);
    this.disp_num2 =this.separateDigits_num( this.secondNum);
 

  }

  separateDigits_num (number){
       
        var sNumber = number.toString();
        var retnum ="" ;
            for (var i = 0, len = sNumber.length; i < len; i += 1) {
          retnum+=+sNumber.charAt(i)+"    ";
        }
              return retnum;  
   }

   onChange(deviceValue) {
    // alert(deviceValue)
    console.log(deviceValue);
    this.max=deviceValue;
    this.generateRanadomNumber();
}

  addNumber(addForm){
      
    //alert("first num ->"+this.firstNum)
   // alert ("second num -"+this.secondNum)
    //alert("sum file ->"+this.multiplyForm.value.sum)
   var  total =this.firstNum * this.secondNum;
   // alert ("total -"+total)
   if (this.multiplyForm.value.sum ==total){
    this.playAudio("22006348_well-done_4.mp3");
      alert("correct answer")
   }
   else{
    this.playAudio("7528479_wrong-answer_2.mp3");
   alert("wrong answer")
   
   }

   
  // 
   this.generateRanadomNumber();
 
  }


  playAudio(voice){
let audio = new Audio();
audio.src = "../../../assets/"+voice;
audio.load();
audio.play();
}


}
