// One page App code

export default class Switch {
  static changeForm(key) {
    const bookContainer = document.querySelector('.container');
    const awesomeForm = document.querySelector('.form');
    const contactForm = document.querySelector('.contact');
    const linkOne = document.querySelector('#nav-booklist');
    const linkTwo = document.querySelector('#nav-addnew');
    const linkThree = document.querySelector('#nav-contact');

    if (key === 'List') {
      bookContainer.style.display = 'block';
      awesomeForm.style.display = 'none';
      contactForm.style.display = 'none';
      linkOne.style.color = 'tomato';
      linkTwo.style.color = 'black';
      linkThree.style.color = 'black';
    } else if (key === 'Add new') {
      bookContainer.style.display = 'none';
      awesomeForm.style.display = 'block';
      contactForm.style.display = 'none';
      linkTwo.style.color = 'tomato';
      linkOne.style.color = 'black';
      linkThree.style.color = 'black';
    } else {
      bookContainer.style.display = 'none';
      awesomeForm.style.display = 'none';
      contactForm.style.display = 'block';
      linkThree.style.color = 'tomato';
      linkOne.style.color = 'black';
      linkTwo.style.color = 'black';
    }
  }
}
