import { useSelector } from 'react-redux';
import Spinner from './layout/Spinner';
import UserItem from './UserItem';

const ResultUsers = () => {
  const { users, isLoading } = useSelector(
    (state) => state.github
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto px-6 ">
      <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-10">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default ResultUsers;
