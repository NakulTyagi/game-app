import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {

   
   }

  ngOnInit() {
    document.getElementById("table").style.display="none";
    document.getElementById("selected").style.display="none";
   // document.getElementById("select2").style.display="none";
    document.getElementById("player2").style.display="none";
  }
  avatar1:string="https://image.flaticon.com/icons/svg/1995/1995509.svg";
  avatar2:string="https://image.flaticon.com/icons/svg/1163/1163126.svg";
  avatar3:string="https://image.flaticon.com/icons/svg/1204/1204571.svg";
  avatar4:string="https://image.flaticon.com/icons/svg/1999/1999107.svg";
  weapon1:string="https://image.flaticon.com/icons/svg/1204/1204570.svg";
  weapon2:string="https://image.flaticon.com/icons/svg/1204/1204605.svg";
  weapon3:string="https://image.flaticon.com/icons/svg/1204/1204602.svg";
  weapon4:string="https://image.flaticon.com/icons/svg/1978/1978121.svg";
  weapon5:string="https://www.flaticon.com/premium-icon/icons/svg/1971/1971734.svg";
  shield1:string="https://image.flaticon.com/icons/svg/1867/1867798.svg";
  selected1:any;
  selected2:any;
  weaponised:any="https://image.flaticon.com/icons/svg/1166/1166522.svg";
  public weapons =[this.weapon1,this.weapon2,this.weapon3,this.weapon4,this.weapon5];
  wepos =["","","","",""];




  select11(){
    document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="block";
      this.selected1=this.avatar1;
  }


  select12(){
    document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="block";
    this.selected1=this.avatar2;
}


select13(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="block";
  this.selected1=this.avatar3;
}


select14(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="block";
  this.selected1=this.avatar4;
}

select21(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="none";
    document.getElementById("selected").style.display="block";

  this.selected2=this.avatar1;
}


select22(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="none";
    document.getElementById("selected").style.display="block";

  this.selected2=this.avatar2;
}


select23(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="none";
    document.getElementById("selected").style.display="block";

  this.selected2=this.avatar3;
}


select24(){
  document.getElementById("player1").style.display="none";
    document.getElementById("player2").style.display="none";
    document.getElementById("selected").style.display="block";
  this.selected2=this.avatar4;
}


start(){
  document.getElementById("selected").style.display="none";
  document.getElementById("table").style.display="block";
  // this.player1();
  // this.player2();
  this.game();
}

// player1(){
//     var row = Math.floor((Math.random() * 8) + 1);
//     var column =Math.floor((Math.random() * 8) + 1);
//     var sum= (String)(row*10+column);
//     var x = document.createElement("IMG");
//     x.setAttribute("src", this.selected1);
//     x.setAttribute("width", "40");
//     x.setAttribute("height", "40");
//     document.getElementById(sum).appendChild(x);
// }

// player2(){
//   var row = Math.floor((Math.random() * 8) + 1);
//   var column =Math.floor((Math.random() * 8) + 1);
//   var sum= (String)(row*10+column);
//   var x = document.createElement("IMG");
//   x.setAttribute("src", this.selected2);
//   x.setAttribute("width", "40");
//   x.setAttribute("height", "40");
//   document.getElementById(sum).appendChild(x);
  
// }

game(){
  var row1 = Math.floor((Math.random() * 8) + 1);
  var column1 =Math.floor((Math.random() * 8) + 1);
  var sum1= (String)(row1*10+column1);
  var x = document.createElement("IMG");
  x.setAttribute("src", this.selected2);
  x.setAttribute("width", "40");
  x.setAttribute("height", "40");
  document.getElementById(sum1).appendChild(x);

      

  var one=this.selected1;
  var two=this.selected2;
  
  
  var row2 = Math.floor((Math.random() * 8) + 1);
  var column2 =Math.floor((Math.random() * 8) + 1);
  var sum2= (String)(row2*10+column2);
  var x = document.createElement("IMG");
  x.setAttribute("src", this.selected1);
  x.setAttribute("width", "40");
  x.setAttribute("height", "40");
  document.getElementById(sum2).appendChild(x);


    for(var i in this.weapons){
      var row = Math.floor((Math.random() * 8) + 1);
      var column =Math.floor((Math.random() * 8) + 1);
      var sum= (String)(row*10+column);
      var x = document.createElement("IMG");
      x.setAttribute("src", this.weapons[i]);
      x.setAttribute("width", "40");
      x.setAttribute("height", "40");
      document.getElementById(sum).appendChild(x);
      this.wepos[i]=sum;
    }
    var ammo=this.weapons;
    var gun =this.wepos;
    document.onkeydown = function(event) {
      
      switch (event.keyCode) {
         case 37:
              if(column1>1){
                var row=row1;
                var column =column1-1;
                  var presum=(String)(row*10+column+1);
                  sum=(String)(row*10+column);
                  var x = document.createElement("IMG");
                      x.setAttribute("src",two);
                      x.setAttribute("width", "40");
                      x.setAttribute("height", "40");
                      for(var i in gun){
                      if(gun[i]==sum){
                      
                        var y = document.createElement("IMG");
                        y.setAttribute("src",ammo[i]);
                        y.setAttribute("width", "40");
                        y.setAttribute("height", "40");
                        document.getElementById(sum).appendChild(y);

                      }   
                    }                   
                      document.getElementById(sum).appendChild(x);
                      
                row1=row;
                column1=column;
                document.getElementById(presum).innerHTML=null;

              
              }
              // alert('Left key pressed');

            break;
         case 38:
            if(row1<=8){
              var row=row1-1;
              var column =column1;
                var presum=(String)((row+1)*10+column);
                sum=(String)(row*10+column);
                var x = document.createElement("IMG");
                    x.setAttribute("src",two);
                    x.setAttribute("width", "40");
                    x.setAttribute("height", "40");
                    for(var i in gun){
                      if(gun[i]==sum){
                      
                        var y = document.createElement("IMG");
                        y.setAttribute("src",ammo[i]);
                        y.setAttribute("width", "40");
                        y.setAttribute("height", "40");
                        document.getElementById(sum).appendChild(y);

                      }   
                    }    
                    document.getElementById(sum).appendChild(x);
              row1=row;
              column1=column;
              document.getElementById(presum).innerHTML=null;
            }
              // alert('Up key pressed');
            break;
         case 39:
            if(column1<8){
              var row=row1;
              var column =column1+1;
                var presum=(String)(row*10+column-1);
                sum=(String)(row*10+column);
                var x = document.createElement("IMG");
                    x.setAttribute("src",two);
                    x.setAttribute("width", "40");
                    x.setAttribute("height", "40");
                    for(var i in gun){
                      if(gun[i]==sum){
                      
                        var y = document.createElement("IMG");
                        y.setAttribute("src",ammo[i]);
                        y.setAttribute("width", "40");
                        y.setAttribute("height", "40");
                        document.getElementById(sum).appendChild(y);

                      }   
                    }    
                    document.getElementById(sum).appendChild(x);
              row1=row;
              column1=column;
              document.getElementById(presum).innerHTML=null;
            }
              // alert('Right key pressed');
            break;
         case 40:
            if(row1>=1){
              var row=row1+1;
              var column =column1;
                var presum=(String)((row-1)*10+column);
                sum=(String)(row*10+column);
                var x = document.createElement("IMG");
                    x.setAttribute("src",two);
                    x.setAttribute("width", "40");
                    x.setAttribute("height", "40");
                    for(var i in gun){
                      if(gun[i]==sum){
                      
                        var y = document.createElement("IMG");
                        y.setAttribute("src",ammo[i]);
                        y.setAttribute("width", "40");
                        y.setAttribute("height", "40");
                        document.getElementById(sum).appendChild(y);

                      }   
                    }       
                    document.getElementById(sum).appendChild(x);
              row1=row;
              column1=column;
              document.getElementById(presum).innerHTML=null;
            }
              // alert('Down key pressed');
            break;
      

      case 87 :
          if(row2<=8){
            var row=row2-1;
            var column =column2;
              var presum=(String)((row+1)*10+column);
              sum=(String)(row*10+column);
              var x = document.createElement("IMG");
                  x.setAttribute("src",one);
                  x.setAttribute("width", "40");
                  x.setAttribute("height", "40");
                  document.getElementById(sum).appendChild(x);
            row2=row;
            column2=column;
            document.getElementById(presum).innerHTML=null;
          }
            // alert('Up key pressed');
          break;
      
      case 65 :
          if(column2>1){
            var row=row2;
            var column =column2-1;
              var presum=(String)(row*10+column+1);
              sum=(String)(row*10+column);
              var x = document.createElement("IMG");
                  x.setAttribute("src",one);
                  x.setAttribute("width", "40");
                  x.setAttribute("height", "40");
                  document.getElementById(sum).appendChild(x);
            row2=row;
            column2=column;
            document.getElementById(presum).innerHTML=null;
          }
          // alert('Left key pressed');

        break;
      
      case 83:
            if(row2>=1){
              var row=row2+1;
              var column =column2;
                var presum=(String)((row-1)*10+column);
                sum=(String)(row*10+column);
                var x = document.createElement("IMG");
                    x.setAttribute("src",one);
                    x.setAttribute("width", "40");
                    x.setAttribute("height", "40");
                    document.getElementById(sum).appendChild(x);
              row2=row;
              column2=column;
              document.getElementById(presum).innerHTML=null;
            }
              // alert('Down key pressed');
            break;
      
      case 68:
          if(column2<8){
            var row=row2;
            var column =column2+1;
              var presum=(String)(row*10+column-1);
              sum=(String)(row*10+column);
              var x = document.createElement("IMG");
                  x.setAttribute("src",one);
                  x.setAttribute("width", "40");
                  x.setAttribute("height", "40");
                  document.getElementById(sum).appendChild(x);
            row2=row;
            column2=column;
            document.getElementById(presum).innerHTML=null;
          }
            // alert('Right key pressed');
          break;
      }
    }

   


}



}
