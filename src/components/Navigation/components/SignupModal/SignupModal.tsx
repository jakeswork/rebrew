import React, { useState } from "react";
import { Classes } from "jss";
import { useMutation } from "@apollo/react-hooks";

import Text from "../../../Text";
import Card from "../../../Card";
import Input from "../../../Input";
import Button from "../../../Button";
import { SIGN_UP } from "./index";
import { logIn } from "../../../../utils/auth";

interface SignupModalProps {
  classes: Classes;
  onCancel?(): void;
}

const SignupModal: React.FC<SignupModalProps> = ({
  classes = {},
  onCancel = () => {}
}) => {
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, { data, error, loading }] = useMutation(SIGN_UP);

  if (data && data.signup && data.signup.token) {
    logIn(data.signup.token);
  }

  return (
    <Card className={classes.modal}>
      <Text h3>Sign up</Text>
      <Text style={{ marginBottom: 16 }}>
        Fill in your details below to get started.
      </Text>
      <form
        onSubmit={async e => {
          e.preventDefault();

          await signUp({
            variables: {
              display_name: displayName,
              user_name: userName,
              password
            }
          });
        }}
      >
        <div className={classes.formFieldWrapper}>
          <Text caption>Display name</Text>
          <Input
            placeholder="What should we call you?"
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setDisplayName(target.value)
            }
          />
        </div>
        <div className={classes.formFieldWrapper}>
          <Text caption>Username*</Text>
          <Input
            placeholder="This needs to be unique."
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(target.value)
            }
          />
        </div>
        <div className={classes.formFieldWrapper}>
          <Text caption>Password*</Text>
          <Input
            placeholder="We'll keep it safe."
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
          success={data && data.signup && data.signup.token}
          disabled={
            !userName.length ||
            !password.length ||
            password.length < 4 ||
            password.length > 12 ||
            !password.match(/\d+/g)
          }
        >
          Submit
        </Button>
        <Button flat onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </Card>
  );
};

export default SignupModal;
