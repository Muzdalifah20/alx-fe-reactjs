function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 ms:p-4 md:p-8 sm:max-w-sm md:max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full ms:w-24 md:w-36 ms:h-24 md:h-36 mx-auto"
      />
      <h1 className="ms:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base ms:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
