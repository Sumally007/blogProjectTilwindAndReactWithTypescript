import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
    person: {
        name: string;
        following: boolean;
    };

}

const UserCard = ({ person }: UserCardProps) => {
    return (
        <div className="flex items-center justify-between">
            <section className="flex items-center">
                <FaUserCircle className="text-3xl mr-3 text-gray-500 cursor-pointer" />
                <span className="cursor-pointer">{person.name}</span>
            </section>

            <button className="cursor-pointer">{person.following ? "Following" : "Follow"}</button>
        </div>
    )
}

export default UserCard