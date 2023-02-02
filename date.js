module.exports =  function (){
    const day = new Date();
    return day.toLocaleString('en-IN', { weekday: 'short', month: '2-digit', year: 'numeric', day: 'numeric' });
}