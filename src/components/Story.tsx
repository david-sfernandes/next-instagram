import Image from "next/image";

export default function Story({
  username,
  img,
}: {
  username: string;
  img: string;
}) {
  return (
    <div>
      <Image
        src={img}
        alt={`${username} avatar`}
        width="100"
        height="100"
        className="profile-img  h-14 w-14 outline outline-red-400
        outline-2 outline-offset-2 hover:scale-110"
      />
      <p className="text-xs w-14 truncate text-center pt-1">{username}</p>
    </div>
  );
}
