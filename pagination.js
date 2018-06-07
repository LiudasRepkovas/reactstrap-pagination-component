import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class SimplePagination extends React.Component {

  props = {
    sidePageNumbersToShow: 2
  }

  render() {
    return (
      <Pagination>
        <PaginationItem disabled={this.props.currentPage < 2} onClick={ () => {if(this.props.currentPage >= 2) this.props.changePageCallback(this.props.currentPage-1)}}>
          <PaginationLink previous/>
        </PaginationItem>
        {this.beforePages()}
        <PaginationItem active>
          <PaginationLink>
            {this.props.currentPage}
          </PaginationLink>
        </PaginationItem>
        {this.afterPages()}
        <PaginationItem disabled={this.props.currentPage == this.props.pageCount} onClick={ () => {if(this.props.currentPage < this.props.pageCount)this.props.changePageCallback(this.props.currentPage+1)}}>
          <PaginationLink next />
        </PaginationItem>
      </Pagination>
    );
  }

  beforePages(){
    let array = [];

    for(let i = this.getBeforePagesCount() - 1; i > 0; i -- ){
      let key = this.props.currentPage - i;
      if(key > 0){
        array.push(
          <PaginationItem key={key} onClick={()=>{this.props.changePageCallback(key)}}>
            <PaginationLink>
              {this.props.currentPage - i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    return array;
  }

  afterPages(){
    let array = [];

    for(let i = 1; i < this.getAfterPagesCount() + 1; i++ ){

      let key = this.props.currentPage + i;
      if(key <= this.props.pageCount){
        array.push(
          <PaginationItem key={key} onClick={()=>{this.props.changePageCallback(key)}}>
            <PaginationLink>
              {this.props.currentPage + i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    return array;
  }

  getBeforePagesCount(){
    if(this.props.currentPage <= this.props.sidePageNumbersToShow){
      return this.props.currentPage;
    }
    else if(this.props.currentPage > this.props.pageCount - this.props.sidePageNumbersToShow){
      return this.props.sidePageNumbersToShow + this.props.sidePageNumbersToShow - (this.props.pageCount - this.props.currentPage ) + 1;
    } else {
      return this.props.sidePageNumbersToShow + 1;
    }
  }

  getAfterPagesCount(){
    if(this.props.currentPage <= this.props.sidePageNumbersToShow){
      return this.props.sidePageNumbersToShow + (this.props.sidePageNumbersToShow - this.props.currentPage) + 1;
    }
    else if(this.props.currentPage > this.props.pageCount - this.props.sidePageNumbersToShow){
      return this.props.pageCount - this.props.currentPage;
    } else {
      return this.props.sidePageNumbersToShow;
    }
  }

}