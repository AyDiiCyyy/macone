document.addEventListener('DOMContentLoaded', ()=>{
    var search = document.querySelector('.js-search');
    var formsearch = document.querySelector('.search');
    var form = document.querySelector('#form-search');
    var logo = document.querySelector('.logo');

    search.addEventListener('click', (event)=>{
        if(getComputedStyle(formsearch).visibility=='hidden'){
            formsearch.style.visibility="visible";
            form.classList.add('top');
            document.querySelector('body').style.overflow='hidden';
        }
    })
    // click out
    formsearch.addEventListener('click', (e)=>{
        if(e.target!=form && e.target!=document.querySelector('#form-search input')&&e.target!=document.querySelector('#form-search i')){
            form.classList.remove('top');
            formsearch.style.visibility="hidden";
            document.querySelector('body').style.overflow='visible';
        }
    })

    // 
    // sự kiện lăn lên đầu trang 
    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
        // Kiểm tra nếu người dùng đã lăn đến đầu trang
        if (scrollPosition === 0) {
            logo.classList.add('class');
            // Thực hiện hành động của bạn ở đây
        }else{
            logo.classList.remove('class');

        }
    });
})