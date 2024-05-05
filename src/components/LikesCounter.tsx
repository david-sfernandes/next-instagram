export default function LikesCounter({
  hasLiked,
  likesLength,
}: LikesCounterProps) {
  let likesCounter = likesLength - +hasLiked;

  return (
    <p className="mb-1">
      Curtido por {hasLiked && <b>você</b>}{" "}
      {likesCounter > 0 && hasLiked && <>e </>}
      {likesCounter > 0 && (
        <OtherLikes likesCounter={likesCounter} hasLiked={hasLiked} />
      )}
    </p>
  );
}

function OtherLikes({
  likesCounter,
  hasLiked,
}: {
  likesCounter: number;
  hasLiked: boolean;
}) {
  return (
    <>
      {likesCounter}{" "}
      {likesCounter == 1 ? (
        <b>{hasLiked && "outra"} pessoa</b>
      ) : (
        <b>{hasLiked && "outras"} pessoas</b>
      )}
    </>
  );
}
