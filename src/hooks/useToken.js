import { useEffect, useState } from "react"

const useToken = userInformation => {
    const [token, setToken] = useState('')

    useEffect(() => {
        console.log('User information inside use Token', userInformation)
        const email = userInformation?.user?.email;
        console.log(email);
        // const displayName=userInformation?.user?.displayName
        // console.log(displayName)
        // const providerData=userInformation?.user?.providerData[0]?.uid
        // console.log(providerData)
        const currentUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside usetoken', data)
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }

    }, [userInformation])
    return [token, setToken]

}
export default useToken;