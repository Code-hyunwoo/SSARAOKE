import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams();
  console.log(id);
  return <h1>Detail</h1>;
}

function mapStateToProps(state, ownProps) {
  // const {
  //   match: {
  //     params: { id },
  //   },
  // } = ownProps;
  // react-router 6부터는 이거 지원 x > useParams 쓸것
  // find()는 조건식을 만족하는 첫번째 요소 반환
  // return { toDos: state.find((toDo) => toDo.id === id) };
}

export default connect(mapStateToProps)(Detail);
