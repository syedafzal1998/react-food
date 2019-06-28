import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Navbar from './navbar'


// import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
//   CardSubtitle, CardBody } from 'reactstrap';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Burger King"
        subheader="June 14, 2019"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0yS6ELtls-QpnYZMGhH4iwL2j7jA7JsE9dcUyarpQELotgBM"
        title="Philly cheesesteak burger"
      />
      <CardContent>
      <div>Rs: 500 only</div>
        <Typography variant="body2" color="textSecondary" component="p">
        Burger King launches Philly cheesesteak burger — with a Whopper of a claim
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Timings: </Typography>
          <Typography paragraph>
         
          Lunch: 12:30-15:30
            <br />
          Dinner: 19:30-23:30

          </Typography>
          <Typography paragraph>
           This one smells like total PR hype, but I'll bite anyway.

Burger King is now out with the Philly Cheese King burger, a flame-grilled half-pound of beef topped with caramelized onions and American cheese. It's a riff, of course, on the cheesesteak.

But wait. The location at 15 S. Eighth St. has opted out of selling the new burger, in respect to the "traditional recipe" that calls for grilled rib-eye, a griddle, a crusty roll, and love.

The Philly Cheese King won't be sold at the Center City location "until otherwise overturned by the Burger King brand."

 </Typography>
         
        </CardContent>
      </Collapse>
      <br />
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="McDonalds"
        subheader="June 14, 2019"
      />
      <CardMedia
        className={classes.media}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKr6Uqoijebd5WlIVU6yk5pxRjAzp633frxZ6eULj065b1ZMaVQ"
        title="Double Beef n Cheese Burger"
      />
      <CardContent>
      <div>Rs: 450 only</div>
        <Typography variant="body2" color="textSecondary" component="p">
        Get double the flavour! The first hit of sear-sizzled 100% pure beef gets your taste 
        buds ready for that delicious second hit of the double layer melted cheese.
         Now that’s a taste knockout. Enjoy it with chilled cold drink of your choice
           </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Timings: </Typography>
          <Typography paragraph>
         
          Lunch: 12:30 - 15:30
            <br />
          Dinner: 18:00 - 4:00

          </Typography>
         
         
        </CardContent>
      </Collapse>



           <br />
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="OPTP "
        subheader="June 19, 2019"
      />
      <CardMedia
        className={classes.media}
        image="https://www.facebook.com/optpfries/photos/a.164295655560/10156762811865561/?type=3theater"
         title="BIG ZING"
      />
      <CardContent>
      <div>Rs: 390 only</div>
        <Typography variant="body2" color="textSecondary" component="p">
        Introducing BIG ZING, the new burger with twice the meat of our popular ZING. 
        For a limited time save Rs. 200 and get it at the introductory
         price of Rs. 390 Available on dine-in, takeaway & delivery.
           </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Timings: </Typography>
          <Typography paragraph>
         
          Lunch: 12:30 - 15:30
            <br />
          Dinner: 18:00 - 4:00

          </Typography>
         
         
        </CardContent>
      </Collapse>
 </Card>
    );
  }
