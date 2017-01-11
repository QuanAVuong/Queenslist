import React from 'react';
import { Card, CardTitle, CardText, CardActions, IconButton, Button, CardMenu } from 'react-mdl';



const PostCard = ({data}) => (

  <Card shadow={0} style={{ margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: `url(${data.images[0]}) center / cover`}}>{data.title}</CardTitle>
      <CardText>
        {data.description}
      </CardText>
      <CardActions border>
          <Button colored>View Post</Button>
      </CardActions>
</Card>

)

export default PostCard;
