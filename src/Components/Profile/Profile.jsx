const Profile = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Profile</h1>
      <p>Manage your profile information here.</p>

      <div>
        <form onSubmit={handleSubmit} className="py-6">
          <div className="flex gap-4">
            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Name</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Employee Name"
                aria-label="Name"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>

            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Username</p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter Employee Username"
                aria-label="Username"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>

            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Employee Email"
                aria-label="Email"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>

            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Password</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Employee Password"
                aria-label="Password"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">User Type</p>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                aria-label="User Type"
                className="py-3 px-4 rounded-md w-full text-xs outline-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Address</p>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter Employee Address"
                aria-label="Address"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>

            <div className="w-full">
              <p className="text-sm py-2 px-1 w-full">Contact</p>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                type="text"
                placeholder="Enter Employee Contact"
                aria-label="Contact"
                className="py-3 px-4 rounded-md w-full text-sm outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-1.5 hover:duration-300 hover:bg-green-900 my-6 font-semibold px-4 bg-green-800 rounded-md text-white"
          >
            Submit
          </button>

          {response && (
            <p className="text-green-500 mt-4">Employee added successfully!</p>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Profile;
