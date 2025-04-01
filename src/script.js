function converter() {
    // Vars
    
    let year = document.querySelector('input#YYYY')
    let month = document.querySelector('input#MM')
    let day = document.querySelector('input#DD')

    let year_span = document.querySelector('span#year-span')
    let month_span = document.querySelector('span#month-span') 
    let day_span = document.querySelector('span#day-span')
    
    let year_v = Number(year.value)
    let month_v = Number(month.value)
    let day_v = Number(day.value)

    let actual_year = new Date().getFullYear()
    let actual_month = new Date().getMonth() + 1
    let actual_day = new Date().getDate()
    let ditm = new Date(actual_year, actual_month + 1, 0).getDate();
    // ditm = days in this month

    let pyear = document.querySelector('p#pyear')
    let pmonth = document.querySelector('p#pmonth')
    let pday = document.querySelector('p#pday')

    let error_year = document.querySelector('p#error-year')
    let error_month = document.querySelector('p#error-month')
    let error_day = document.querySelector('p#error-day')



    // Erros
    let dayError = false
    let monthError = false
    let yearError = false

    if (year.value == '') {
        error_year.innerHTML = 'This field is required'
        yearError = true
    } else if (year_v > actual_year) {
        error_year.innerHTML = 'Must be in the past'
        yearError = true
    } else if (year_v < 0) {
        error_year.innerHTML = 'Year must be d.C'
        yearError = true
    }
    else {
        error_year.innerHTML = ''
    }

    if (month.value == '') {
        error_month.innerHTML = 'This field is required'
        monthError = true
    } else if (month_v >= 13 || month_v < 1) {
        error_month.innerHTML = 'Must be a valid month'
        monthError = true
    } else { 
        error_month.innerHTML = ''
    }

    if (day.value == '') {
        error_day.innerHTML = 'This field is required'
        dayError = true
    } else if (day_v > 31 || day_v <= 0){
        error_day.innerHTML = 'Must be a valid day'
        dayError = true
    } else {
        error_day.innerHTML = ''
    }

    if (yearError) 
        error_year.style.color = "hsl(0, 100%, 67%)"
        year.style.borderColor = "hsl(0, 100%, 67%)"
        pyear.style.color = "hsl(0, 100%, 67%)"
    if (monthError)
        error_month.style.color = "hsl(0, 100%, 67%)"
        month.style.borderColor = "hsl(0, 100%, 67%)"
        pmonth.style.color = "hsl(0, 100%, 67%)"
    if (dayError)
        error_day.style.color = "hsl(0, 100%, 67%)"
        day.style.borderColor = "hsl(0, 100%, 67%)"
        pday.style.color = "hsl(0, 100%, 67%)"
        
    if (dayError|| monthError|| yearError) return

    // Maths

    let year_result = actual_year - year_v
    let month_result = actual_month - month_v
    let day_result = actual_day - day_v

    if (month_result < 0) {
        year_result -= 1
        month_result += 12
    }

    if (day_result < 0) {
        month_result -= 1
        day_result += ditm
    }

    if (month_result < 0) {
        month_result += 12
        year_result -= 1
    }

    year_span.innerHTML = year_result
    month_span.innerHTML = month_result
    day_span.innerHTML = day_result >= 0 ? day_result : 0
}