import Image from "next/image";

export default function Story({
  username,
  img,
}: {
  username: string;
  img: string;
}) {
  return (
    <div className="">
      <Image
        src={img}
        alt={username + " avatar"}
        width='100'
        height='100'
        className="profileImg h-14 w-14 border-red-500 border-2 hover:scale-110"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
