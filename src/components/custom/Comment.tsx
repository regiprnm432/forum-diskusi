import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface CommentProps {
  id: number;
  user_id: string;
  author: string;
  content: string;
  anonymous: boolean;
  verified: boolean;
  created_at: string;
}

const Comment = ({
  id,
  user_id,
  author,
  content,
  anonymous,
  verified,
  created_at,
}: CommentProps) => {
  const timeAgo = moment(created_at).fromNow();
  return (
    <>
      <section className="py-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="text-base font-semibold text-black">
              {anonymous ? "*****" : author} •{" "}
              <span className="text-gray-600 font-light">{timeAgo}</span>
              {verified && (
                <span className="border border-[#38B0AB] text-xs rounded-2xl px-4 py-1 text-[#38B0AB] ml-2">Verified</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="ml-12 px-1 pb-4">
        <div className="font-light">{content}</div>
      </section>
      <hr />
    </>
  );
};

export default Comment;
