    var fold=document.getElementsByClassName('fold');
    var unfold=document.getElementsByClassName('unfold');
    var length=fold.length
    for (let i = 0; i <length; i++) {
        fold[i].onclick = function(){
            if (unfold[i].style.display='none') {
                for (var n = 0;n<length; n++) {
                    unfold[n].style.display='none';
                    fold[n].style.display='block';
                }
                unfold[i].style.display='block';
                fold[i].style.display='none';
            }else {
                unfold[i].style.display='none'
            }
        }
    }
    for (let i = 0; i <length; i++) {
        unfold[i].onclick=function(){
            if (fold[i].style.display='none') {
                fold[i].style.display='block';
                unfold[i].style.display='none';
            } else {
                fold[i].style.display='none'
            }
        }    
    }
