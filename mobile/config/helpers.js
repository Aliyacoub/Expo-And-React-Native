export const transFormName = name=>{
   let i=0;
    const firstLetters=name.split(' ');
    return firstLetters.map(letter=>{
       i++
       if(i<=2)
        return letter[0];
        
        
       
    })
    .join('')
};

export const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  