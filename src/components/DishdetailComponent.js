import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
    return(
        <div ClassName="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        if (comments != null)
        {
             const Comments = comments.map((comment) => {
                 const date = new Date(comment.date);
                 return (
                     <div className="col-6 col-md-4 m-1" >
                         <div>{comment.comment}</div>
                         <div>-- {comment.author} , {date.toLocaleDateString()} </div>
                     </div>
                 );
             });

            return ( 
                <div>           
                    <div>
                        <h4>Comments</h4>
                    </div>
                    <div>
                        {Comments}                 
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if (props.dish != null)
            return(
                <div className="row">
                    <div className="col-8 col-md-4 m-1">
                        {this.renderDish(props.dish)} 
                    </div>
                    <div className="col-12 col-md-7 m-1">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.dish.comments} /> 
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
 

export default DishDetail;