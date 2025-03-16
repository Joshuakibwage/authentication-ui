 

const SignInSignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-135 from-blue-950 via-blue-900
    to-blue-800 p-8">
      <div className="@container max-w-md w-full p-8 bg-blue-950/30 rounded-2xl shadow-[0_20px_50px_rgba(0,_29,_61,_0.7)] backdrop:blur-2xl border-blue-800/50 relative">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 to-transparent rounded-2xl">

        </div>
        <div className="relative">
            <h2 className="text-3xl font-extrabold text-center mb-2 tracking-tight text-yellow-300">
                Create an Account
            </h2>
            <p className="text-blue-200 text-center mb-8 ">
                Join our community today
            </p>
            <form className="mt-8 space-y-5 perspective-1000">
                <div className="group">
                    <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all text-white"
                    />
                </div>
                <div className="group">
                    <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all text-white"
                    />
                </div>
                <div className="group">
                    <input 
                        type="password" 
                        placeholder="password"
                        className="w-full p-4 bg-blue-900/30 rounded-xl border border-blue-700/50 placeholder-blue-300/50 outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all text-white"
                    />
                </div>
                <button className="group w-full p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-950 rounded-xl font-bold shadow-lg hover:shadow-yellow-400/40 overflow-hidden transform hover:-translate-y-0.5 cursor-pointer hover:scale-105 hover:translate-z-20 duration-300 transform-style-3d relative"
                >
                    <span className="relative z-10 pointer-events-none ">
                        Create Account
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity group-hover:opacity-100 transition-opacity pointer-events-none ">

                    </span>
                </button>
            </form>
            <p className="mt-8 text-blue-200/80 text-center ">
                Already have an account?
                <span className="text-yellow-300 font-bold cursor-pointer hover:text-yellow-400 ml-1 transition-colors">
                    Sign In
                </span>
            </p>
            <div className="mt-8 pt-6 border-t border-blue-800/30 ">
                <p className="text-blue-200/70 text-center text-sm mb-4 ">
                Or continue with
                </p>
                <div className="flex justify-center space-x-6">
                    <button className="p-3 bg-blue-900/40 ">

                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignInSignUp
