let bot_sequence=[];
let player_sequence=[];
let all_box=["red","purpel","blue","yellow"];

let game_start=false;
let level=0;

let h3 =document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(game_start==false){
        game_start=true;
        game_level();
    }
})

function btn_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300); 

}

function game_level(){
    player_sequence=[];
    level++;
    h3.innerText=`Level: ${level}`;

    let random_btn=Math.floor(Math.random()*4);
    let select_btn=all_box[random_btn];
    let selected_btn=document.querySelector(`.${select_btn}`); 
    bot_sequence.push(select_btn);
    console.log(bot_sequence); 
    btn_flash(selected_btn);
    


}

function box_press(){
    let clicked_box=this;
    c_box_colour=clicked_box.getAttribute("id");
    player_sequence.push(c_box_colour);
    console.log(player_sequence);
    btn_flash(clicked_box);
    game_control(player_sequence.length-1);

}

let boxs = document.querySelectorAll(".box");
for (box of boxs){
    box.addEventListener("click",box_press);

}

 function game_control(current_level){
    if(player_sequence[current_level]==bot_sequence[current_level]){
        if(bot_sequence.length==player_sequence.length){
            setTimeout(game_level,850);
        }
    }
    else{
        h3.innerHTML= `Game Over! Your score was <b>${level-1} </b> <br> Press any key to start again`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },300)
        game_restart();
    }
 }

function game_restart(){
    game_start=false;
    bot_sequence=[];
    player_sequence=[];
    level=0;
}