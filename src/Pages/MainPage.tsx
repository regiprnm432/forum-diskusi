import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPlus } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
  return (
    <div>
      {/* Judul "Forum Diskusi" */}
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'left' }}>
        Forum Diskusi
      </h1>

      {/* Button "Tambah" */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center'}}>
        <Button style={{ backgroundColor: '#38B0AB' }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: '#BAE3E2', marginRight: '5px' }} />
          Tambah
        </Button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Input style={{ marginRight: '10px', width: '100%'}} />
          <Button style={{ backgroundColor: '#38B0AB' }}> Cari</Button>
        </div>
      </div>

      {/* Card atas */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle style={{ fontSize: '16px', color: '#000', marginLeft: '10px' }}>Haikal Putra • <span style={{ fontSize: '16px', color: '#888' }}>  10 Menit yang lalu</span></CardTitle>
            </div>
          </div>
          <CardDescription style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left', marginTop: '25px', fontWeight: 'bold' }}>Apa yang salah ya?</CardDescription>
        </CardHeader>
        <CardContent style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lacinia sapien, sed dictum metus. Suspendisse aliquet, tortor at euismod pharetra, eros dolor iaculis justo, et pulvinar orci massa et turpis. </p>
        </CardContent>
        <CardFooter>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faComment} style={{ marginRight: '5px' }} />
            <p>100 Balasan</p>
          </div>
        </CardFooter>
      </Card>

      {/* Card bawah */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle style={{ fontSize: '16px', color: '#000', marginLeft: '10px' }}>Haechan Lee • <span style={{ fontSize: '16px', color: '#888' }}>  3 Jam yang lalu</span></CardTitle>
            </div>
          </div>
          <CardDescription style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left', marginTop: '25px', fontWeight: 'bold' }}>Ini kaya gimana?</CardDescription>
        </CardHeader>
        <CardContent style={{ fontSize: '16px', color: '#000', marginLeft: '10px', textAlign: 'left'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lacinia sapien, sed dictum metus. Suspendisse aliquet, tortor at euismod pharetra, eros dolor iaculis justo, et pulvinar orci massa et turpis. </p>
        </CardContent>
        <CardFooter>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faComment} style={{ marginRight: '5px' }} />
            <p>5 Balasan</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MainPage;
