import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { mahisaa } from "../../../../data/strings";

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = useParams()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserDetails = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${mahisaa}/users/${id}`);
          setUser(response.data);
        } catch (error) {
          setError("Failed to load user details.");
        } finally {
          setLoading(false);
        }
      };

      fetchUserDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Name: {user.userNAme}</h2>
        <p className="text-gray-700">Email: {user.email}</p>
        <p className="text-gray-700">Phone: {user.phoneNumber}</p>
        <p className="text-gray-700">Role: {user.roles}</p>
      </div>
    </div>
  );
};

export default UserDetailPage;
