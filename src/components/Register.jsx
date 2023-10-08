import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const { createUser  } = useContext(AuthContext);
   
    
    const handleRegister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return toast.error("Password should be at least 6 characters")
          }
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should have at least 1 Capital Letter")
            
          }
          if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            return toast.error("Password should be at least 1 special character")
            
          }
        
        console.log(email, password);
        createUser(email, password)
        .then(res => {
            console.log(res.user)
            // navigate(location?.state ? location.state : "/")
            toast.success("Registered Succesfully")
        })
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
                        
                        <p>Already Registered? Please <Link className="text-red-300" to="/login">Login.</Link></p>
            <Toaster />

                    </form>

                </div>
            </div>

        </div>
    );
};

export default Register;