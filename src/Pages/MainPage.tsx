import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPlus } from "@fortawesome/free-solid-svg-icons";
import ThreadCard from "@/components/custom/ThreadCard";

interface ThreadData {
  id?: string;
  author?: string;
  created_at?: string;
  title?: string;
  raw_body?: string;
}

function MainPage() {
const [threads, setThreads] = useState<ThreadData[]>([]);

useEffect(() => {
  const fetchThreads = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/threads'); // Fixed missing 'api'
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error('Error fetching threads:', error);
    }
  };

  fetchThreads();
}, []); 

  return (
    <div>
      {/* Judul "Forum Diskusi" */}
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        Forum Diskusi
      </h1>

      {/* Button "Tambah" */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input style={{ marginRight: "10px", width: "100%" }} />
          <Button style={{ backgroundColor: "#38B0AB" }}> Cari</Button>
        </div>
      </div>

      {threads.map((thread) => (
        <ThreadCard
          key={thread.id}
          authorName={thread.author}
          createdTime={thread.created_at} // Adjust formatting if needed
          title={thread.title }
          description={thread.raw_body || ''} 
          commentCount={100} 
        />
      ))}

    </div>
  );
}

export default MainPage;
