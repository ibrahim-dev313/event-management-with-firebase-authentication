import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const { signIn, googleLogin, setLoading } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                toast.success("Log In Successful");

                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);

            })
            .catch(err => {
                console.log(err.code);
                if (err.code == "auth/invalid-login-credentials") {

                    return toast.error("Email & Password does not match")
                }
            })
        setLoading(false)
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                toast.success("Log In Successful");

                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);

            })
         
            .catch(err => { console.error(err.message) })
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full min-h-screen bg-base-200">
                <div className="my-5 text-3xl font-bold text-center">Login</div>

                <div className="flex-col w-full hero-content lg:flex-row-reverse">

                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-neutral hover:btn-">Login</button>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">

                                <div className="divider">OR</div>
                                <div className="grid">
                                    <div onClick={handleGoogleSignIn} className="btn btn-outline">Sign in with Google</div>                            </div>
                            </div>
                            <p>New to Firebase? Please <Link className="text-red-300" to="/register">Register.</Link></p>
                        </form>

                    </div>
                </div>
                <Toaster />

            </div>
        </>
    );
};

export default Login;