// $(document).ready(function(){

// 	$('body').on('click', function(event) {
// 	  let target = event.target; // where was the click?
// 	  console.log($(event.target).attr('class'), 'evt')

// 	  console.log(target, 'target'); // highlight it

// 	});


// })
Vue.use(VueRouter)

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


var mainvm = new Vue({
  el: '#app-7',
  data: {

    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]

  }
})
