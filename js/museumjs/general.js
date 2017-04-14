
$.ajax({
  url: 'https://gateway.marvel.com:443/v1/public/characters?apikey=0e1be5e02b8caea25a3b20f3e7be07c0',
  
  success: function successHandler(data){
  	console.log(data);
  }
  
});

console.log("hello world");

