// grab the generator button
const btn = document.getElementById('generator')

// add eventLstener to the button on click
btn.addEventListener('click', generateData)


function generateData() {

    // define the url
    const url = `https://randomuser.me/api/`

    // send the request using promise
    let responseData = new Promise(function (success, fail) {

        // create a http request object 
        const xhr = new XMLHttpRequest()
        xhr.open('GEt', url, true)

        xhr.onload = function () {
            if (xhr.status === 200) {
                success(xhr.responseText, "The request accepted successfully.")
            } else {
                fail(xhr.status, 'There was an error.')
            }
        }

        xhr.send()

    })


    // now access the resopnse data
    responseData.then(function (resData, txt) {
        let data = JSON.parse(resData)
        data = data.results[0]
        console.log(data)

        // destructuring the data object
        const {
            cell,
            email,
            location: {
                state
            },
            name: {
                first
            },
            name: {
                last
            },
            picture: {
                large
            }
        } = data

        // now grab the place to pass the data
        let fname = document.getElementById('first')
        let lname = document.getElementById('second')
        let mail = document.getElementById('third')
        let phone = document.getElementById('four')
        let stateName = document.getElementById('five')
        let photo = document.getElementById('img')

        // placing all the data
        photo.src = large
        fname.textContent = first
        lname.textContent = last
        mail.textContent = email
        phone.textContent = cell
        stateName.textContent = state

    }).catch(function (err, msg) {
        console.log(`${msg} and the error status was: ${err}`)
    })

}