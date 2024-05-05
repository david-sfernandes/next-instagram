type StoryProps = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
};

type CustomSession = Session & { user: { username: string } };

type PostProps = {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
};

type SugestionProps = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
  company: any;
};

type LikesCounterProps = {
  hasLiked: boolean;
  likesLength: number;
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

interface StateStore {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}