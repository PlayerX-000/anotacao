function autoResize(el){
    while (el.scrollHeight > el.offsetHeight){
      el.rows += 1;
    }
  }