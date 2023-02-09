import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <Link to={`/user/${login}`} className="text-base-content text-opacity-40">
      <div className="card shadow-md compact side gb-base-100">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title">{login}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;