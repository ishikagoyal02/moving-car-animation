// var audio = document.createElement('audio');
// audio.setAttribute('src','./music/car audio.m4a');
// audio.loop=true;
// audio.play();

// $(document).ready(function(){
//     $surface=$('.surface');
//     $car=$('.car');

//     $(document).on('keypress',function(e){
//         if(e.which==13){
//             $($surface).toggleClass('moveRight');
//         }
//     })
// });

var x;
var m=0;
function start()
{
 x=setInterval(anim,100);
 
  function anim()
  {
      
      console.log(m);
        if(m==1200)
        {
            clearInterval(x);           
            m=0;
        }
        
        else
        {
            m=m+5;
            document.getElementById("car");
            var target=document.getElementById("car");
            target.style.marginLeft=m+'px';
        }
   }

}

function stop()
{
    clearInterval(x)
}