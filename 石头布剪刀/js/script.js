const gameContainer = document.querySelector('.container'),
userResult = document.querySelector('.user_result img'),
cpuResult = document.querySelector('.cpu_result img'),
result = document.querySelector('.result'),
optionImages = document.querySelectorAll('.option_image');


// console.log(gameContainer, userResult, cpuResult, result, optionImages)

optionImages.forEach((image,index) => {
  image.addEventListener('click', (e) => {
    image.classList.add('active')

    userResult.src = cpuResult.src = './images/rock.png'
    result.textContent = '等待...'
    optionImages.forEach((image2, index2)=>{
      // console.log(index, index2)
      index !== index2 &&  image2.classList.remove('active')
    })

    gameContainer.classList.add('start')
    // add animateion
    let time = setTimeout(() => {
      let imageSrc = e.target.querySelector('img').src
      userResult.src = imageSrc
      gameContainer.classList.remove('start')
 
      let randomNumber = Math.floor(Math.random() * 3)
     //  console.log(randomNumber)
 
     let cpuImages = ['./images/rock.png', './images/parper.png', './images/scissors.png']
     cpuResult.src = cpuImages[randomNumber]
 
     let cpuValue = ['R', 'P', 'S'][randomNumber]
 
     let useValue = ['R', 'P', 'S'][index]
    
     // create an object with all possible outcomes
     let outcomes = {
       RR: '平局',
       RP: '电脑',
       RS: '你',
       PP: '平局',
       PR: '你',
       PS: '电脑',
       SS: '平局',
       SR: '电脑',
       SP: '你'
     }
 
     // look up the outcome value based on user and CPU options
     let outComeValue = outcomes[useValue  + cpuValue]
 
      // console.log(cpuValue, useValue)
     //  console.log(outComeValue)
     result.textContent = useValue === cpuValue ? '平局' : `${outComeValue} 赢!!`
    }, 2500);
  })
})
