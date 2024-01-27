import axios from "axios"
import { BASE_URL } from '../tools/constantes.js'
import { useState, Fragment } from "react"
import { Navigate } from 'react-router-dom'
// fonction de vérification de nombre de caractères
import { lengthLimit, checkVide } from "../tools/maxLength.js"

const AddUser = () => {

    const [isRegistered, setIsRegistered] = useState(false)
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        password: ''
    })

    const handleChange = (e) => {
        //on appelle la fonction validateForm
        if (!lengthLimit(e.target.value, 250)) {
            alert('erreur ne doit pas dépasser 250')
            return
        }
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()

        if (!checkVide(Object.values(userData))) {
            alert('le champ ne peut pas être vide')
            return
        }
        //force la data en minuscules
        const trimmedFormData = {
            first_name: userData.first_name.trim(),
            last_name: userData.last_name.trim(),
            email: userData.email.trim().toLowerCase(),
            age: userData.age.trim().toLowerCase(),
            password: userData.password
        }

        axios.post(`${BASE_URL}/create-account`, trimmedFormData)

            .then(res => {
                console.log(res)
                if (res.data.response.affectedRows > 0)
                    setIsRegistered(true)
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log(isRegistered)

    return (

        <>
            {isRegistered === false ?

                (

                    <div className="form_container register">
                        <form className="form" onSubmit={submit}>

                            <input className="" type='text' placeholder='nom' name='last_name' onChange={handleChange} value={userData.last_name} />
                            <input type='text' placeholder='prenom' name='first_name' onChange={handleChange} value={userData.first_name} />
                            <input type='email' placeholder='email' name='email' onChange={handleChange} value={userData.email} />
                            <input type="age" placeholder='age' name='age' onChange={handleChange} value={userData.age} />
                            <input type='password' placeholder='password' name='password' onChange={handleChange} value={userData.password} />
                            <input type='submit' />

                        </form>

                    </div>)

                :

                <Navigate to="/login" />

            }
        </>
    )
}

export default AddUser
