import React, { Component } from 'react';
import {
  Card, CardMedia, CardContent, CardActions,
  Button,
  Typography,
  Fab
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const style = theme => ({
  card: {
    maxWidth: 450,
    paddingBottom: '.5em'
  },
  media: {
    minHeight: 400
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '8px 16px'
  },
  likeCount: {
    display: 'block',
    marginLeft: '.5em',
    color: 'white',
    fontWeight: 'bold'
  }
});

// Heart changes color on fab hover
const StyledFab = styled(Fab)``;
const StyledLikeButton = styled(FaHeart)`
  color: white;
  transition: color .25s ease;
  ${StyledFab}:hover & {
    color: red;
  }
`;

class Test extends Component {
  render () {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          image="https://pp.userapi.com/c849136/v849136030/f9e59/sUdTNuSTxyQ.jpg"
          title="Ты чо"
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography variant="h6">How much do you usually drink?</Typography>
          <StyledFab
            size="medium"
            color="primary"
            variant="extended"
          >
            <StyledLikeButton/>
            <Typography variant="button" className={classes.likeCount}>250</Typography>
          </StyledFab>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button color="primary" variant="outlined" fullWidth>Pass</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(style)(Test);
