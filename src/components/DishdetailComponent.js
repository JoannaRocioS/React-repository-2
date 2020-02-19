import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        return(
            <div className="col-6 col-md-4 m-1" >
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}></p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
        else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if (props.dish != null)
            return(
                <div class="container">
                    <div className="row">
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