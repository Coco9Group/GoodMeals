import React,{Component} from 'react';
import "./PageReview.css";
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

class PageReview extends Component {
  render() {
  return (
      <>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <CardHeader
          avatar={
            <Avatar className="avatar">
              P
            </Avatar>
            }
          title = "Philip "
          subheader="Greate healthy food"
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%"}} />   
        <CardContent>
        <Typography>
         Great recipes, easy to follow, and very yummy dishes. 
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <CardHeader
          avatar={
            <Avatar className="avatar">
              S
            </Avatar>
            }
          title = "Staphan"
          subheader="Easy ordering and changing, great food and groceries"
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%"}} />   
        <CardContent>
        <Typography>
        Easy to use the ording process
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <CardHeader
          avatar={
            <Avatar className="avatar">
              T
            </Avatar>
            }
          title = "Tony"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%"}} />   
        <CardContent>
        <Typography>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <CardHeader
          avatar={
            <Avatar className="avatar">
              L
            </Avatar>
            }
          title = "Liaane"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%"}} />   
        <CardContent>
        <Typography>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <CardHeader
          avatar={
            <Avatar className="avatar">
              J
            </Avatar>
            }
          title = "Jim"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%"}} />   
        <CardContent>
        <Typography>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Typography>
        </CardContent>
        </Card>
      </div>
      </>
    );
  }
};

export default PageReview;