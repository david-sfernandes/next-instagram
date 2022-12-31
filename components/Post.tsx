import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
  FaceSmileIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

type PostProps = {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
};

export default function Post({
  id,
  username,
  userImg,
  img,
  caption,
}: PostProps) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likeIndex, setLikeIndex] = useState("");
  // comments
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: QuerySnapshot<DocumentData>) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  const sendComment = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: comment,
      username: (session as CustomSession).user.username,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });
    setComment("");
  };

  // likes
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts", id, "likes")),
        (snapshot: QuerySnapshot<DocumentData>) => setLikes(snapshot.docs)
      ),
    [db, id]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, `posts/${id}/likes/${likeIndex}`));
    } else {
      await addDoc(collection(db, `posts/${id}/likes`), {
        username: (session as CustomSession).user.username,
        userId: session?.user.uid
      });
    }
  };

  useEffect(
    () => {
      let likePos = likes.findIndex((like) => like.data().userId === session?.user.uid);
      setHasLiked(false);
      if (likePos > -1) {
        setHasLiked(true);
        setLikeIndex(likes[likePos].id)
      }
    },
    [db, likes]
  );

  return (
    <section className="bg-white my-7 border rounded-lg text-sm text-neutral-900">
      <div className="flex items-center py-2 px-3">
        <Image
          src={userImg}
          alt={username + " image"}
          height="32"
          width="32"
          className="profileImg h-8 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="postBtn" />
      </div>
      <Image
        className="object-cover w-full"
        src={img}
        width={800}
        height={800}
        alt="Post image"
      />
      <div className="flex gap-4 p-4">
        {hasLiked ? (
          <SolidHeartIcon onClick={likePost} className="postBtn text-red-500"  />
        ) : (
          <HeartIcon onClick={likePost} className="postBtn" />
        )}
        <ChatBubbleBottomCenterIcon className="postBtn" />
        <PaperAirplaneIcon className="postBtn -rotate-45" />
        <BookmarkIcon className="postBtn ml-auto" />
      </div>
      <div className="px-4 truncate">
        {!!likes.length && (
          <p className="mb-1">Curtido por {hasLiked && (<><b>você</b> e</>) } {likes.length - hasLiked} <b>outras pessoas</b></p>
        )}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>

      <div>
        {!!comments.length && (
          <div
            className="p-4 h-20 overflow-y-scroll scrollbar-thumb-black 
          scrollbar-thin"
          >
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mb-3"
              >
                <p className="text-sm flex-1">
                  <span className="font-bold ">{comment.data().username}</span>
                  {" "}
                  {comment.data().comment}
                </p>
                <Moment fromNow className="pr-5 text-xs">
                  {comment.data().timestamp.toDate()}
                </Moment>
              </div>
            ))}
          </div>
        )}
        {session && (
          <form className="flex items-center p-4" onSubmit={sendComment}>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="border-none flex-1 focus:ring-0 outline-none text-sm"
            />
            <button
              disabled={!!comment.trim()}
              type="submit"
              className="actionBtn"
            >
              Post
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
