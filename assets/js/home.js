// var dates = $('#todo-details span');
// for(let i = 0; i<dates.length; i++){
//     var date = dates.eq(i).text();
//     console.log(date);
//     var longDate = new Date(date);
//     console.log(longDate);
// }

var deleteTodos = $('#delete-todos input');
console.log(deleteTodos);

for(let i = 0; i<deleteTodos.length; i++){
    deleteTodos.eq(i).click(function(){
        $(this).parent().toggleClass('overline');
    });
}
