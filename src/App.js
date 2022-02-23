import React from 'react';
const App = () => {
	return (
		<div className="h-screen min-h-screen m-w-screen  bg-indigo-700 flex justify-center items-center">
			<div className="grid lg:grid-cols-2 max-w-2xl w-full">
				<div className="hidden md:block relative">
					<img
						className="object-cover w-full h-92 absolute"
						alt="car"
						src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<div className="z-10 absolute bottom-0 right-20 text-center text-white">
						<p className="italic">Don't have an account ?</p>
						<p className="underline">Signup</p>
					</div>
				</div>
				<div className="bg-white text-center w-[22rem]">
					<div className="w-10/12 mx-auto my-10 px-6">
						<h2 className="my-8 text-center text-xl sm:text-3xl font-extrabold text-blue-700">
							HIPPO CARS
						</h2>
						<input
							type="text"
							className="relative mt-20 block w-full px-3 py-3 bg-gray-100 placeholder-gray-500 sm:text-sm"
							placeholder="User Name"
						/>
						<input
							type="text"
							className="relative mt-10 block w-full px-3 py-3 bg-gray-100 placeholder-gray-500 sm:text-sm"
							placeholder="Password"
						/>
						<div className="text-left my-8">
							<input
								className="h-4 w-4 rounded-xs checked:bg-gray-600 focus:outline-none transition duration-200 mr-2 cursor-pointer"
								type="checkbox"
								id="checkbox"
								defaultChecked
							/>
							<label className="inline-block text-lg -mt-1 text-gray-400" htmlFor="checkbox">
								Remeber Me
							</label>
						</div>
						<button className="bg-blue-700 text-white px-4 w-full py-2">LOGIN</button>
						<p className="text-gray-400 my-6">Forgot Password?</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
