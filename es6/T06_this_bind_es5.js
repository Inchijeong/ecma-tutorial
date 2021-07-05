var btn = {
  name: 'btn1',
  addClickEvent: function() {
    this.element = document.getElementById(this.name);

    var logNameAndRemoveButton = function() {
      console.log(this.name);
      document.body.removeChild(this.element);
    };

    this.element.addEventListener('click', logNameAndRemoveButton.bind(this));
    // logNameAndRemoveButton 핸들러 함수 실행시 this 객체가 엘리먼트 객체이므로
    // "bind(this)를 이용해서 this 객체를 지정해준다."
  }
}

btn.addClickEvent();