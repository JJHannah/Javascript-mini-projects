const calculator = () => {
  const input  = document.getElementById('input')
  const buttons = document.querySelectorAll('.btn')

  function appendToDisplay(){
    buttons.forEach((button)=>{
      button.addEventListener('click',()=>{
      console.log(button.textContent);
       })
    })
  }
   
};

export default calculator;
