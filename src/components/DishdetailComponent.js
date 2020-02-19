import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: null
        }        
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null)
        {
             const Comments = comments.map((comment) => {
                 const date = new Date(comment.date);
                 return (
                     <div className="col-6 col-md-4 m-1" >
                         <div>{comment.comments}</div>
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
        }else
            return(
                <div></div>
            );
    }

    render() {
        const dish = this.props.selectedDish
        if (dish != null)
            return(
                <div className="row">
                    <div className="col-8 col-md-4 m-1">
                        {this.renderDish(dish)} 
                    </div>
                    <div className="col-12 col-md-7 m-1">
                        {this.renderComments(dish.comments)} 
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
} 

export default DishDetail;