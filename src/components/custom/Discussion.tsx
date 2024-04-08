import parse from "html-react-parser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDiscussion } from "@/DiscussionContext";
import { Button } from "../ui/button";
import Comment from "./Comment";

interface ThreadProps {
  id: string;
  author: string;
  title: string;
  content: string;
  anonymous: boolean;
  comment_count: number;
  created_at: string;
  comment: {
    id: number;
    user_id: string;
    author: string;
    content: string;
    anonymous: boolean;
    verified: boolean;
    created_at: string;
  }[];
  thread_tag: {
    tag: {
      id: string;
      name: string;
    };
  }[];
}

const Discussion = () => {
  const { threadId } = useParams();
  const { discussions, fetchDiscussionList } = useDiscussion();
  const [discussionData, setDiscussionData] = useState<ThreadProps>(
    discussions[0]
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!discussions) {
        await fetchDiscussionList();
      }

      const discussion: ThreadProps = discussions.find(
        (d: ThreadProps) => d.id == threadId
      );
      setDiscussionData(discussion);
      console.log(discussion);
    };

    fetchData();
  }, [threadId, discussions, fetchDiscussionList]);

  const timeAgo = moment(discussionData.created_at).fromNow();

  return (
    <div className="mb-5 text-left">
      <section className="py-4 px-4">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="text-base font-semibold text-black">
              {discussionData.anonymous ? "*****" : discussionData.author} •{" "}
              <span className="text-gray-600 font-light">{timeAgo}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="font-semibold text-xl mb-3 text-[#1F1D39]">
          {discussionData.title}
        </div>
        <div className="font-light">{parse(discussionData.content)}</div>
      </section>

      <section className="px-4 pb-4">
        <div className="flex justify-between w-full font-medium">
          <div className="pb-2">
            {discussionData.thread_tag.length > 0 ? (
              discussionData.thread_tag.map((tag) => (
                <Button
                  key={tag.tag.id}
                  className="p-2 h-6 mr-2 bg-[#F9A682] text-[#B23E19]"
                >
                  {tag.tag.name}
                </Button>
              ))
            ) : (
              <p>no tags</p>
            )}
          </div>

          <p className="text-right">{discussionData.comment_count} Balasan</p>
        </div>
      </section>
      <hr style={{ border: "1px solid #85878D" }} />

      {/* buat comment */}
      <section className="px-4 pb-4">
        {discussionData.comment.map((comment) => (
          <Comment
            id={comment.id}
            user_id={comment.user_id}
            author={comment.author}
            content={comment.content}
            anonymous={comment.anonymous}
            verified={comment.verified}
            created_at={comment.created_at}
          ></Comment>
        ))}
      </section>
    </div>
  );
};

export default Discussion;
