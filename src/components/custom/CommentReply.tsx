import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DropdownDiscussion from "./DropdownDiscussion";

interface CommentProps {
  id: number;
  user_id: string;
  author: string;
  content: string;
  anonymous: boolean;
  created_at: string;
}

const CommentReply = ({
  id,
  user_id,
  author,
  content,
  anonymous,
  created_at,
}: CommentProps) => {
  const timeAgo = moment(created_at).fromNow();
  return (
    <>
      <section className="py-4 flex justify-between">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="text-base font-semibold text-black">
              {anonymous ? "*****" : author} •{" "}
              <span className="text-gray-600 font-light">{timeAgo}</span>
            </div>
          </div>
        </div>
        <div>
          <DropdownDiscussion
            showVerifiy={false}
            user_id={user_id}
            path="/comment-reply"
            id={id}
          ></DropdownDiscussion>
        </div>
      </section>

      <section className="ml-12 px-1 pb-4">
        <div className="font-light">{content}</div>
      </section>

      <hr />
    </>
  );
};

export default CommentReply;
