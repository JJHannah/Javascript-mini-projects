function PictureSlide() {
  const imageArray = [
    " https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    " https://images.unsplash.com/photo-1758575603807-1f01152edcb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1758221943117-6e1f900b957a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  ];

  function cyclePictures() {
    let pics = imageArray[count];
    display.append(pics);

    count++;

    //reset
    if (count === imageArray.length) {
      count = 0;
    }
  }
  // setInterval(cyclePictures, 1000);
  console.log(pictures.length);

  return (
    <div className="container">
      <button>previous</button>
      <p></p>
      <button>next</button>
    </div>
  );
}
export default PictureSlide;
