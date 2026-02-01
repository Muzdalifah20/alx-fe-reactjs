import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    query: "",
    location: "",
    minRepos: "",
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const results = await fetchUserData(formData);
      setUsers(results);
    } catch {
      setError("No users found matching your criteria");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Find GitHub Users
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            name="query"
            placeholder="Username, skills, etc."
            value={formData.query}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            name="location"
            placeholder="Location (e.g., Cairo)"
            value={formData.location}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            name="minRepos"
            type="number"
            placeholder="Min repos"
            value={formData.minRepos}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all"
        >
          {loading ? "Searching..." : "Search Users"}
        </button>
      </form>

      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {users.length > 0 && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
              <h3 className="font-bold text-lg text-gray-800 text-center mb-2 truncate">
                {user.login}
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                {user.location || "No location"}
              </p>
              <div className="space-y-1 mb-4">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Repos:</span>{" "}
                  {user.public_repos}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-semibold">Followers:</span>{" "}
                  {user.followers}
                </p>
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                View Profile →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
