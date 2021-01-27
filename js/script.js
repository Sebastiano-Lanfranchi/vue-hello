

var app = new Vue({
 el: '#root',
 data:{
  titolo: 'Questo é un titolo',
  image: 'https://i1.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?resize=1024%2C640',
  colorList: ['red', 'blue', 'orange', 'purple', 'yelloh', 'green', 'grey', 'black', 'brown'],
  selectedColor: '#333'
},
 methods:{
   randomNumber: function(min, max) {
      var result = Math.floor(Math.random() * (max + 1 - min) + min);
     return result;
   },
   changeColor: function() {
    let sceltaColore = this.randomNumber(0, this.colorList.length - 1)
    this.selectedColor = this.colorList[sceltaColore];
  }
 }
});

Vue.config.devtools = true;
