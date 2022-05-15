import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import { Field, reduxForm, reset } from "redux-form";
import { toast } from "react-toastify";
import {
  getAllQuestion,
  demoCallApi,
  getDetailQuestion,
  createQuestion,
} from "../../helpers/api_network";
import { FieldTime } from "../../helpers/form_customer";
import "./index.css";
import { validStringIsEmpty } from "../../helpers/util";

const ratings = [1, 2, 3, 4, 5];

class ListQuestionComponent extends Component {
  state = {
    list: [],
    listQuestion: [],
    national: "",
    detail: {},
    question: {},
  };

  componentDidMount() {
    demoCallApi().then((res) => {
      console.log(res.data);
      this.setState({
        list: res.data.list,
        national: res.data.national,
      });
    });

    getAllQuestion().then((res) => {
      console.log(res.data);
      this.setState({
        listQuestion: res.data,
      });
    });
  }

  handleSubmitCreateQuestion = (input) => {
    const article = {
      questionText: input.questionText,
      questionDisplay: input.questionDisplay,
      createDate: input.createDate,
      active: input.active,
      rating: input.rating,
    };
    createQuestion(article).then((res) => {
      console.log(res.data);
      if (res.result === 1) {
        this.props.reset("form-list-question");
        toast.success(res.message);
        this.setState({
          question: res.data,
        });
      } else {
        toast.error(res.message);
      }
    });
  };

  handleSubmitForm = (input) => {
    getDetailQuestion(input.idQuestion).then((res) => {
      console.log(res.data);
      if (res.result === 1) {
        toast.success(res.message);
        this.setState({
          detail: res.data,
        });
      } else {
        toast.error(res.message);
      }
    });
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(this.state.detail.question_display);
    return (
      <div>
        <p>{this.state.national}</p>
        <Container>
          <b>Fielter Question:</b>
          <form onSubmit={handleSubmit(this.handleSubmitForm)}>
            <div>
              <label htmlFor="idQuestion">ID Question: </label>
              <Field name="idQuestion" component="input" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
          <Row>
            <Col className={"question"}>
              <b>Question:</b>
            </Col>
            <Col className={"question"}>
              <b>Answer:</b>
            </Col>
          </Row>
          {!validStringIsEmpty(this.state.detail.question_display) && (
            <Row>
              <Col className={"question"}>
                {this.state.detail.question_display}
              </Col>
              <Col className={"answer"}>
                <b>{this.state.detail.active ? "true" : "false"}</b>
              </Col>
            </Row>
          )}
        </Container>
        <Container>
          <b>Create Question:</b>
          <form
            onSubmit={handleSubmit(this.handleSubmitCreateQuestion)}
            method="post"
          >
            <div>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <label htmlFor="questionDisplay">Display Question: </label>
                  <Field name="questionDisplay" component="input" type="text" />
                </Col>
                <Col>
                  <label htmlFor="questionText">Question Text: </label>
                  <Field name="questionText" component="input" type="text" />
                </Col>
                <Col>
                  <label htmlFor="createDate">Create Date: </label>
                  <Field
                    name="createDate"
                    component={FieldTime}
                    placeholder="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <label>rating</label>
                  <Field
                    name="rating"
                    component="select"
                    placeholder="Choose rating"
                  >
                    <option></option>
                    {ratings.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </Field>
                </Col>
                <Col>
                  <label htmlFor="active">Active</label>
                  <Field
                    name="active"
                    id="active"
                    component="input"
                    type="checkbox"
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
          <b>List Question:</b>
          <Table striped bordered hover>
            <thead>
              <tr>
                {this.state.listQuestion.length > 0 &&
                  this.state.listQuestion.map((item, index) => (
                    <th key={index}>
                      {item.question_text} (ID: {item.id})
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.state.listQuestion.length > 0 &&
                  this.state.listQuestion.map((item, index) => (
                    <td key={index}> {item.question_display}</td>
                  ))}
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <b>Create Question:</b>
          {!validStringIsEmpty(this.state.question.question_display) && (
            <Row>
              <Col className={"question"}>
                {this.state.question.question_display}
              </Col>
              <Col className={"answer"}>
                <b>{this.state.question.active ? "true" : "false"}</b>
              </Col>
            </Row>
          )}
        </Container>
       
        <div>
          <label>
            <b>Fitlter</b>
          </label>
          <Row>
            <label>
              <Field name="sex" component="input" type="radio" value="true" />{" "}
              Active
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="false" />{" "}
              Deactive
            </label>
          </Row>
        </div>
      </div>
    );
  }
}

ListQuestionComponent.propTypes = {
  list: PropTypes.array,
  listQuestion: PropTypes.array,
  national: PropTypes.string,
  detail: PropTypes.object,
  question: PropTypes.object,
};

export default reduxForm({
  form: "form-list-question",
})(ListQuestionComponent);
