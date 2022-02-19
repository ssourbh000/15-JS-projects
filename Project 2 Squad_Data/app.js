let data = [
{
    name: 'Sourabh',
    age: '27'
},
{
    name: 'Deepak',
    age: '27'
},
{
    name: 'Bala',
    age: '27'
},
{
    name: 'Pani',
    age: '25'
}
];

const info = document.querySelector('#info');

const details = data.map(function (item){
    return '<div>' + item.name + ' is ' + item.age + ' years old ' + '</div>';
});

info.innerHTML = details.join('\n');