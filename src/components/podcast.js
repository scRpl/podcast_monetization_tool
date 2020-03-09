import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: "auto",
    marginTop: "20px"
  },
  media: {
    height: 600
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

export default function Podcast() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          title="Photo by Daniel Korpai on Unsplash"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Tim Ferriss Show
          </Typography>
          <Typography variant="body1" component="p">
            The Tim Ferriss Show is often the #1 business podcast on all of
            Apple Podcasts, and it’s been ranked #1 out of 500,000+ podcasts on
            many occasions. It is the first business/interview podcast to pass
            100,000,000 downloads, and it has been selected as “Best of” Apple
            Podcasts for three years running, and readers of Fortune Magazine‘s
            Term Sheet recently selected The Tim Ferriss Show as their top
            business podcast. It has now surpassed 400M downloads.
          </Typography>
          <br></br>
          <Typography variant="body1" component="p">
            Past guests include Neil Gaiman, Arnold Schwarzenegger, LeBron
            James, Ray Dalio, Doris Kearns Goodwin, Edward Norton, Tony Robbins,
            Maria Sharapova, Jamie Foxx, Maria Popova, Peter Thiel, Marc
            Andreessen, Amanda Palmer, Malcolm Gladwell, Vince Vaughn, Rick
            Rubin, Reid Hoffman, Jon Favreau, Whitney Cummings, Mike Shinoda,
            and 300+ more.
          </Typography>
          <br></br>
          <Typography variant="body1" component="p">
            Each episode, I deconstruct world-class performers from eclectic
            areas (investing, sports, business, art, etc.) to extract the
            tactics, tools, and routines you can use. This includes favorite
            books, morning routines, exercise habits, time-management tricks,
            and much more. Aside from promo impact (often bigger than full-page
            NYT, WSJ, or Esquire coverage, or primetime CNN), guests enjoy the
            show because it’s friendly, long-form, and they have final cut
            before audio is published. This leads to extremely open, raw
            interviews and — paradoxically — fewer edits. Here is a good
            overview from The Observer: “How Tim Ferriss Became The ‘Oprah of
            Audio’“
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5">Category</Typography>
            <Typography variant="body1" paragraph>
              Business, Entrepreneurship, Success, Sports, Spiritual
            </Typography>
            <Typography variant="h5">Language</Typography>
            <Typography variant="body1" paragraph>
              English
            </Typography>
            <Typography variant="h5">Geographical reach</Typography>
            <Typography variant="body1" paragraph>
              USA, UK, Australia, New Zealand, Germany, Italy
            </Typography>
            <Typography variant="h5">Themes</Typography>
            <Typography variant="body1" paragraph>
              Business, Entrepreneurship, Success, Sports, Spiritual
            </Typography>
            <Typography variant="h5">Key words</Typography>
            <Typography variant="body1" paragraph>
              psychodelics, success, Entrepreneurship
            </Typography>
            <Typography variant="h5">Downloads</Typography>
            <Typography variant="body1" paragraph>
              100M
            </Typography>
          </CardContent>
        </Collapse>
      </CardActions>
    </Card>
  );
}
