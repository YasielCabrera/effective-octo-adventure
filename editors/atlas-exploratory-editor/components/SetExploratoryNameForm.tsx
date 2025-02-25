/* eslint-disable react/jsx-no-bind */
import { Form, StringField } from "@powerhousedao/design-system/scalars";
import { SetExploratoryNameInput } from "document-models/atlas-exploratory";
import React from "react";

type Props = {
  readonly defaultValue: SetExploratoryNameInput;
  readonly dispatch: (input: SetExploratoryNameInput) => void;
};

export function SetExploratoryNameForm(props: Props) {
  function onSubmit(input: SetExploratoryNameInput) {
    props.dispatch(input);
  }

  return (
    <Form onSubmit={onSubmit} submitChangesOnly>
      {({ handleSubmit }) => (
        <StringField
          defaultValue={props.defaultValue.name}
          label="Name"
          name="name"
          onBlur={() => handleSubmit(onSubmit)()}
          placeholder="Enter the document name"
        />
      )}
    </Form>
  );
}
