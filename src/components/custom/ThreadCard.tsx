import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPlus } from '@fortawesome/free-solid-svg-icons';

interface ThreadCardProps {
  authorName: string;
  createdTime: string;
  title: string;
  description: string;
  commentCount: number;
}

const ThreadCard = ({authorName, createdTime, title, description, commentCount}: ThreadCardProps) => {
  return (
  <Card style={{ marginBottom: '20px' }}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle style={{ fontSize: '16px', color: '#000', marginLeft: '10px' }}>
                {authorName} • <span style={{ fontSize: '16px', color: '#888' }}>{createdTime}</span>
            </CardTitle>
          </div>
        </div>
        <CardDescription style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left', marginTop: '25px', fontWeight: 'bold' }}>
            {title}
        </CardDescription>
      </CardHeader>
      <CardContent style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left'}}>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faComment} style={{ marginRight: '5px' }} />
          <p>{commentCount} Balasan</p> 
        </div>
      </CardFooter>
    </Card>
  )
}

export default ThreadCard