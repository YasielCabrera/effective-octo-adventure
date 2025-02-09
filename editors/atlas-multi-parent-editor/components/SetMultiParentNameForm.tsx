/* eslint-disable react/jsx-no-bind */
import { Form, StringField } from "@powerhousedao/design-system/scalars";
import { SetMultiparentNameInput } from "document-models/atlas-multi-parent";
import React from "react";

type Props = {
  readonly defaultValue: SetMultiparentNameInput;
  readonly dispatch: (input: SetMultiparentNameInput) => void;
};

export function SetMultiParentNameForm(props: Props) {
  function onSubmit(input: SetMultiparentNameInput) {
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
