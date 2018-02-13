const request=require('request');
module.exports.getLatestNews=(callback)=>{
    request.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=25fd2106bcbf49eaa4d02d0595371d80',callback)
}