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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
    backgroundColor: green,
  },
}));

const TeacherCard = ({
  name,
  image,
  description1,
  description2,
  instrument,
  id,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
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
          subheader={`Teaches: ${instrument}`}
        />
        <CardMedia
          className={`${classes.media} img`}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
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

const StyledCard = styled(motion.div)``;

// const Card = styled(motion.div)`
//   display: flex;
//   box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
//   border-radius: 10px;
//   margin: 2rem 0rem;
//   width: 100%;
//   img {
//     width: 230px;
//     height: 100%;
//     border-radius: 10px;
//   }
//   .info {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: space-around;
//     h2,
//     p {
//       align-self: flex-start;
//       margin: 1rem 1rem;
//     }
//   }
//   @media (max-width: 414px) {
//     flex-direction: column;
//     text-align: center;
//     img {
//       margin-top: 1rem;
//     }
//     .info {
//       h2,
//       p {
//         align-self: center;
//       }
//     }
//   }
// `;

export default TeacherCard;
