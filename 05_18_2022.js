function rockPaperScissors(){
  let random = Math.random()
  if(random < .33){
      return 'paper'
  }else if(random < .66) {
      return 'scissors'
  }
  else{
  return 'rock'
}
}

function checkWin(playerChoice){
  let botChoice = rockPaperScissors()
  
  if((playerChoice === 'rock' && botChoice ==='scissors') ||(playerChoice === 'paper' && botChoice ==='rock') || (playerChoice === 'scissors' && botChoice === 'paper') ){
    console.log('You win')
  }else if(playerChoice === botChoice){
    console.log('You tied')

  }else{
    console.log('You tied')
  }

}

checkWin('rock')
