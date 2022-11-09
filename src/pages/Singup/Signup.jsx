import React from 'react';

const Signup = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="w-3/4 mx-auto max-w-md p-4 rounded-md shadow sm:p-8   bg-gray-900   text-gray-100">
	<h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
	
    <div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16  bg-gray-700"></div>
		<p className="px-3 text-sm  text-gray-400">Sign up with social accounts</p>
		<div className="flex-1 h-px sm:w-16  bg-gray-700"></div>
	</div>
    <div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
          
		</button>
		
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr className="w-full   text-gray-400"/>
		<p className="px-3   text-gray-400">OR</p>
		<hr className="w-full   text-gray-400"/>
	</div>
	<form novalidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
        <div className="space-y-2">
				<label for="name" className="block text-sm">User Name:</label>
				<input type="text" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md   border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400" required />
			</div>

			<div className="space-y-2">
				<label for="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="test@gmail.com" className="w-full px-3 py-2 border rounded-md   border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400" required />
			</div>
            <div className="space-y-2">
				<label for="picture" className="block text-sm">Profile picture</label>
				<input type="text" name="picture" id="picture" placeholder="Enter your picture link" className="w-full px-3 py-2 border rounded-md   border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label for="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md   border-gray-700   bg-gray-900   text-gray-100 focus:  border-violet-400" required/>
			</div>
		</div>
		<button type="button" class="w-full py-2 text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg">Register</button>
        <p className="text-sm text-center   text-gray-400">Already have account
		<a href=" /" rel="noopener noreferrer" className="focus:underline hover:underline"> Signin</a>
	</p>
	</form>
</div>
        </div>
    );
};

export default Signup;