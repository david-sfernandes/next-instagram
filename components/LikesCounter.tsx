export default function LikesCounter({
  hasLiked,
  likesLength,
}: LikesCounterProps) {
  let likesCounter = likesLength - +hasLiked;

  return (
    <p className="mb-1">
      Curtido por{" "}
      {hasLiked && <b>você</b>}{" "}
      {likesCounter > 0 && hasLiked && <>e </>}
      {likesCounter > 0 && <OtherLikes likesCounter={likesCounter}/>}
    </p>
  );
}

function OtherLikes ({likesCounter}: {likesCounter: number}) {
  return (
    <>
      {likesCounter} {likesCounter == 1 ? <b>outra pessoa</b> : <b>outras pessoas</b>}
    </>
  )  

}

