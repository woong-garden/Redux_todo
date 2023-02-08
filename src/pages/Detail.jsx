import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Detail() {

    const navigate = useNavigate();
    const paramId = useParams().id;

    const todos = useSelector(state => state.todos);
    const filteredTodo = todos.filter((item) => item.id === paramId)[0]

    return (
        <StyledDetailBox>
            제목: {filteredTodo.title}
            <br/>
            내용: {filteredTodo.contents}
            <br/>
            완료여부: {filteredTodo.isDone.toString()}
            <br/>
            <br/>
            <button onClick={() => navigate("/")}>뒤로가기</button>
        </StyledDetailBox>
    );
}

export default Detail;

const StyledDetailBox = styled.div`
    background-color: #f4f4;
    padding: 20px;
`