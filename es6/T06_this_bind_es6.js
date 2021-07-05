const btn = {
  name: 'btn1',
  addClickEvent: function() {
    this.element = document.getElementById(this.name);
    
    this.element.addEventListener('click', () => {
      console.log(this.name);
      document.body.removeChild(this.element);
    });
    // btnElement에 다시 this 바인드를 하지 않아도 의도한대로 실행된다.
  }
}

btn.addClickEvent();