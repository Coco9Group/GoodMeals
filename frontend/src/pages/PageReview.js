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
      <div
        style={{
          backgroundImage: "url(/images/foodimg.PNG)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "5%",
          marginTop: "-2%",
          paddingBottom: "3%",
          height: "100%",
        }}>
      <div>
        <Card className="card card-5">
        <div style={{display:"flex"}}>
        <CardHeader
          avatar={
            <Avatar className="avatar">
              P
            </Avatar>
            }
          title = "Philip "
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%",paddingTop:"2%"}} />   
        </div>
        <CardContent style={{display:"inline-block"}}>
        <Typography>
          Greate healthy food
          </Typography>
          <Typography >
         Great recipes, easy to follow, and very yummy dishes. 
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <div style={{display:"flex"}}>
        <CardHeader
          avatar={
            <Avatar className="avatar">
              S
            </Avatar>
            }
          title = "Staphan"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%",paddingTop:"2%"}} />   
        </div>
        <CardContent style={{display:"inline-block"}}>
        <Typography>
        Easy ordering and changing, great food and groceries
        </Typography>
        <Typography>
        Easy to use the ording process
          </Typography>
        </CardContent>
        </Card>
      </div>
      <div style={{alignContent:"center"}}>
        <Card className="card card-5">
        <div style={{display:"flex"}}>
        <CardHeader
          avatar={
            <Avatar className="avatar">
              T
            </Avatar>
            }
          title = "Tony"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%" ,paddingTop:"2%"}} />   
        </div>
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
        <div style={{display:"flex"}}>
        <CardHeader
          avatar={
            <Avatar className="avatar">
              L
            </Avatar>
            }
          title = "Liaane"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%",paddingTop:"2%"}} />   
        </div>
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
        <div style={{display:"flex"}}>
        <CardHeader
          avatar={
            <Avatar className="avatar">
              J
            </Avatar>
            }
          title = "Jim"
          subheader=""
        />
        <Rating name="read-only" value={5} readOnly style={{paddingLeft:"3%",paddingTop:"2%"}} />   
        </div>
        <CardContent>
        <Typography>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Typography>
        </CardContent>
        </Card>
      </div>
      </div>
      </>
    );
  }
};

export default PageReview;