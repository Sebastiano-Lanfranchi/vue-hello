

var app = new Vue({
 el: '#root',
 data:{
  titolo: 'Questo é un titolo',
  image: 'https://i1.wp.com/www.giacomocusano.com/wp-content/uploads/2016/07/coastal-wash-web.jpg?resize=1024%2C640',
  colori: ['red', 'blue', 'orange', 'purple', 'yelloh', 'green', 'grey', 'black', 'brown'],
  result: ''
},
 // methods:{
 //   randomNumber: function(min, max) {
 //      result = Math.floor(Math.random() * (max + 1 - min) + min);
 //     return result;
 //   },
 //   cambioColore: function() {
 //    var sceltaColore = colori[randomNumber(0,8).value],
 //  },
 // }
});

Vue.config.devtools = true;
