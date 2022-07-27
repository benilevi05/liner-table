import React from 'react'



const TestRequest = () => {


    const api_url = fetch('https://api.wheretheiss.at/v1/satellites')

    async function getISS() {

        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)
    }
    getISS()

    return (
        <div>
            <img src="" id="testimg" />
        </div>
    )
}

export default TestRequest