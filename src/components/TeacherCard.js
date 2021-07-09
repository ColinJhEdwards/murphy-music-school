import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//card Component stuff
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
//maybe need?

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fade } from "../animations";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

const TeacherCard = ({
  name,
  image,
  description1,
  description2,
  instrument,
  id,
  hobbies,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard variants={fade}>
      <Card className={`${classes.root} card`}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <FontAwesomeIcon icon={faMusic} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={`Hobbies: ${hobbies}`}
        />
        <CardMedia
          className={`${classes.media} img`}
          image={image}
          title={name}
        />
        <CardContent>
          <CardContent>
            <Typography color="textSecondary">{`Teaches: ${instrument}`}</Typography>
          </CardContent>
          <Typography variant="body2" component="p">
            {description1}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description2}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  margin: 1rem 0rem;
`;

export default TeacherCard;
