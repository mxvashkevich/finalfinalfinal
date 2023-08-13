/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Card, CardHeader, CardActions, CardContent,
  CardMedia, Button, Typography, Avatar, IconButton,
} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/News.css';
import { INewsProps } from '../redux/types/types.ts';

function News({ post }: INewsProps) {
  const {
    title, content, imageURL, tags, createdAt,
  } = post;
  return (
    <Card sx={{ width: 345, marginTop: 10 }}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={title}
        subheader={new Date(createdAt).toDateString()}
      />
      {imageURL
        ? (
          <CardMedia
            sx={{ height: 140 }}
            component="img"
            height="140"
            image={imageURL}
            alt="random image"
          />
        )
        : ''}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {tags!.map((tag: string) => <Button>{tag}</Button>)}
      </CardActions>
    </Card>
  );
}

export default News;
