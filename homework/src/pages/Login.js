import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.loginAction({ user_name: "bong" }));
  };
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text type="heading">로그인 페이지</Text>
      </Grid>
      <Grid padding="16px">
        <Input label="Id" placeholder="아이디를 입력하세요." />
        <Input
          type="password"
          label="PassWord"
          placeholder="비밀번호를 입력하세요."
        />
      </Grid>
      <Grid padding="16px">
        <Button
          text="로그인하기"
          _onClick={() => {
            login();
          }}
        >
          로그인
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
