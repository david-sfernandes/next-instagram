"use client";
import { db } from "@/firebase";
import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
  FaceSmileIcon
} from "@heroicons/react/24/outline";
import {
  EllipsisHorizontalIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
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
} from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import LikesCounter from "./LikesCounter";

type PostWithSession = PostProps & { session: CustomSession };

export default function Post({
  id,
  username,
  userImg,
  img,
  caption,
  session,
}: PostWithSession) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likeIndex, setLikeIndex] = useState("");

  useEffect(() => {
    getComments();
    getLikes();
  }, [db, id]);

  useEffect(() => {
    verifyUserLike();
  }, [likes]);

  const sendComment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: comment,
      username: (session as CustomSession).user.username,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });
    setComment("");
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, `posts/${id}/likes/${likeIndex}`));
    } else {
      await addDoc(collection(db, `posts/${id}/likes`), {
        username: (session as CustomSession).user.username,
        userId: session?.user?.id,
      });
    }
  };

  const getComments = () => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot: QuerySnapshot<DocumentData>) => setComments(snapshot.docs)
    );
  };

  const getLikes = () => {
    onSnapshot(
      query(collection(db, "posts", id, "likes")),
      (snapshot: QuerySnapshot<DocumentData>) => setLikes(snapshot.docs)
    );
  };

  const verifyUserLike = () => {
    let likePos = likes.findIndex(
      (like) => like.data().userId === session?.user?.id
    );
    setHasLiked(false);
    if (likePos > -1) {
      setHasLiked(true);
      setLikeIndex(likes[likePos].id);
    }
  };

  return (
    <article className="my-2 pb-2 border-b border-zinc-300 text-sm text-neutral-900 max-w-[470px]">
      <div className="flex items-center py-2 px-3">
        <Image
          src={userImg}
          alt={username + " image"}
          width={32}
          height={32}
          className="profile-img w-8 h-8 mr-2 outline outline-1 
            outline-zinc-300 outline-offset-2"
        />
        <p className="flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className="post-btn" />
      </div>
      <Image
        className="object-cover w-full rounded"
        src={img}
        width={800}
        height={800}
        alt="Post image"
      />
      <div className="flex gap-3 py-3">
        {hasLiked ? (
          <SolidHeartIcon onClick={likePost} className="post-btn text-red-500" />
        ) : (
          <HeartIcon onClick={likePost} className="post-btn" />
        )}
        <ChatBubbleBottomCenterIcon className="post-btn" />
        <PaperAirplaneIcon className="post-btn -rotate-45" />
        <BookmarkIcon className="post-btn ml-auto" />
      </div>
      <div className="">
        {!!likes.length && (
          <LikesCounter likesLength={likes.length} hasLiked={hasLiked} />
        )}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>

      <div>
        {!!comments.length && (
          <div
            className="overflow-y-scroll scrollbar-thumb-black 
          scrollbar-thin"
          >
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mt-3"
              >
                <p className="text-sm flex-1">
                  <span className="font-bold ">{comment.data().username}</span>{" "}
                  {comment.data().comment}
                </p>
              </div>
            ))}
          </div>
        )}
        {session && (
          <form className="flex items-center pb-4 pt-1" onSubmit={sendComment}>
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Adicione um comentário..."
              className="border-none flex-1 focus:ring-0 outline-none text-sm p-0"
              // submit on press enter button

            />
            <button
              disabled={comment.trim() == ""}
              type="submit"
              className="action-btn"
              onClick={(e) => sendComment(e)}
            >
              Publicar
            </button>
            <FaceSmileIcon className="h-4 w-4 text-gray-600 ml-2" />
          </form>
        )}
      </div>
    </article>
  );
}
