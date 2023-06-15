const pageviews = document.querySelector('h2');


const price = document.querySelectorAll('.price');


const monthYear = document.querySelectorAll('.month-year');


const range = document.querySelector(".range")


const checkMark = document.querySelector('#uniqueID')



range.addEventListener('input', (e) => {
    inputChange(e)
    if(!checkMark.checked) {
        if(range.value == '1') {
            price.forEach((el) => {
                el.textContent = '$8'
            })
            pageviews.textContent = '10K Pageviews'
        }
        if(range.value == '2') {
            price.forEach((el) => {
                el.textContent = '$12'
            })
            pageviews.textContent = '50K Pageviews'
        }
        if(range.value == '3') {
            price.forEach((el) => {
                el.textContent = '$16'
            })
            pageviews.textContent = '100K Pageviews'
        }
        if(range.value == '4') {
            price.forEach((el) => {
                el.textContent = '$24'
            })
            pageviews.textContent = '500K Pageviews'
        }
        if(range.value == '5') {
            price.forEach((el) => {
                el.textContent = '$36'
            })
            pageviews.textContent = '1M Pageviews'
        }
    }else {
        if(range.value == '1') {
            price.forEach((el) => {
                el.textContent = '$72'
            })
            
        }
        if(range.value == '2') {
            price.forEach((el) => {
                el.textContent = '$108'
            })
            
        }
        if(range.value == '3') {
            price.forEach((el) => {
                el.textContent = '$144'
            })
        }
        if(range.value == '4') {
            price.forEach((el) => {
                el.textContent = '$216'
            })
        }
        if(range.value == '5') {
            price.forEach((el) => {
                el.textContent = '$324'
            })
        }
    }
    
})

checkMark.addEventListener('input', () => {
    console.log(checkMark.checked)
    if(checkMark.checked){
        monthYear.forEach((el) => {
            el.textContent = '/yearly'
        })
        if(range.value == '1') {
            price.forEach((el) => {
                el.textContent = '$72'
            })
            
        }
        if(range.value == '2') {
            price.forEach((el) => {
                el.textContent = '$108'
            })
            
        }
        if(range.value == '3') {
            price.forEach((el) => {
                el.textContent = '$144'
            })
        }
        if(range.value == '4') {
            price.forEach((el) => {
                el.textContent = '$216'
            })
        }
        if(range.value == '5') {
            price.forEach((el) => {
                el.textContent = '$324'
            })
        }
    }
})

const inputChange = (e) => {
    let target = e.target
    const min = target.min
    const max = target.max
    const val = target.value
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
    console.log(target)
} 








