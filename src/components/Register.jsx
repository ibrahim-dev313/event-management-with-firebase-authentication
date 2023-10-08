import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.error(err))
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => console.log(res.user))
            .catch(err => console.error(err))
    }
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-base-200">
            <div className="flex-col w-full hero-content lg:flex-row-reverse">

                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-outline">Register</button>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>
                            <div className="grid">
                                <div onClick={handleGoogleSignIn} className="btn btn-outline">Sign in with Google</div>                            </div>
                        </div>
                        <p>Already Registered? Please <Link className="text-red-300" to="/login">Login.</Link></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;