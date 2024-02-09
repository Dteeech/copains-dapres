import axios from "axios"
import { BASE_URL } from '../tools/constantes.js'
import { useState, Fragment } from "react"
import { Navigate } from 'react-router-dom'

const Login = () => {

    //sauvegarder
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    //mettre en forme
    //requeter

    const handleChange = () => {

    }
    
    const handleSubmit = () => {

    }


    return (
        <>
            {state.user.isLogged ? ( //verification user connecté si oui
                state.user.isLogged ? ( //si user connecté on le redirige vers l'accueil
                    <Navigate to="/" replace={true} />
                ) : (
                    <div className="form_container login">

                        <form className="form" onSubmit={submit}>
                            <p>Se connecter</p>
                            <input
                                type="text"
                                name="email"
                                value={setUserData.email}
                                onChange={handleChange}
                                placeholder="email"
                            />
                            <input
                                type="password"
                                name="password"
                                value={setUserData.password}
                                onChange={handleChange}
                                placeholder="password"
                            />
                            <input type="submit" />
                            <div>
                                <p>Pas encore de compte ? </p>
                                <NavLink to="/register">S'enregistrer</NavLink>
                            </div>
                            <NavLink to="/">Accueil</NavLink>
                        </form>
                        {messErr.length > 0 && <p>{messErr}</p>}

                    </div>
                )
            ) : ( // si non 
                <div className="form_container login">

                    <form className="form" onSubmit={submit}>
                        <p>Se connecter</p>
                        <input
                            type="text"
                            name="email"
                            value={setUserData.email}
                            onChange={handleChange}
                            placeholder="email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={setUserData.password}
                            onChange={handleChange}
                            placeholder="password"
                        />
                        <input type="submit" value="Me connecter" />
                        <div>
                            <p>Pas encore de compte ? </p>
                            <NavLink to="/register">S'enregistrer</NavLink>
                        </div>
                        <NavLink to="/">Accueil</NavLink>
                    </form>
                    {messErr.length > 0 && <p>{messErr}</p>}

                </div>
            )}
        </>

    )
}