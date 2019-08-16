import React, { useState } from "react";
import { Classes } from "jss";
import { useMutation } from "@apollo/react-hooks";

import Text from "../../../Text";
import Card from "../../../Card";
import Input from "../../../Input";
import Button from "../../../Button";
import { LOG_IN } from "./index";

interface LoginModalProps {
  classes: Classes;
  onCancel?(): void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  classes = {},
  onCancel = () => {}
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, { data, error, loading }] = useMutation(LOG_IN);

  if (data && data.login && data.login.token) {
    localStorage.setItem("token", data.login.token);
  }

  return (
    <Card className={classes.modal}>
      <Text h3>Log in</Text>
      <Text style={{ marginBottom: 16 }}>
        Enter your details below to continue.
      </Text>
      <form
        onSubmit={async e => {
          e.preventDefault();

          await logIn({
            variables: {
              user_name: userName,
              password
            }
          });
        }}
      >
        <div className={classes.formFieldWrapper}>
          <Text caption>Username*</Text>
          <Input
            placeholder="Your unique username."
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(target.value)
            }
          />
        </div>
        <div className={classes.formFieldWrapper}>
          <Text caption>Password*</Text>
          <Input
            placeholder="Make sure nobodys looking."
            type="password"
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(target.value)
            }
          />
          {password.length > 0 && (
            <ul className={classes.ul}>
              {password.length < 4 && (
                <li>
                  <Text>Must be more than 4 characters.</Text>
                </li>
              )}
              {password.length > 12 && (
                <li>
                  <Text>Must be less than 12 characters.</Text>
                </li>
              )}
              {!password.match(/\d+/g) && (
                <li>
                  <Text>Must contain a number.</Text>
                </li>
              )}
              {error && (
                <li>
                  <Text>{error.message.split(":").pop()}</Text>
                </li>
              )}
            </ul>
          )}
        </div>
        <Button
          type="submit"
          loading={loading}
          disabled={
            !userName.length ||
            !password.length ||
            password.length < 4 ||
            password.length > 12 ||
            !password.match(/\d+/g)
          }
        >
          Log in
        </Button>
        <Button flat onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </Card>
  );
};

export default LoginModal;
