/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-max-depth */
import "../atlas.css";
import { EditorProps } from "document-model/document";
import {
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState,
  actions,
  SetDocNumberInput,
  SetExploratoryNameInput,
  SetMasterStatusInput,
  SetContentInput,
  AddTagsInput,
} from "../../document-models/atlas-exploratory";
import { utils as documentModelUtils } from "document-model/document";
import { SetDocNumberForm } from "./components/SetDocNumberForm";
import { SetExploratoryNameForm } from "./components/SetExploratoryNameForm";
import { SetMasterStatusForm } from "./components/SetMasterStatusForm";
import { SetContentForm } from "./components/SetContentForm";
import { SetTagsForm } from "./components/SetTagsForm";

export type IProps = EditorProps<
  AtlasExploratoryState,
  AtlasExploratoryAction,
  AtlasExploratoryLocalState
>;

export default function Editor(props: IProps) {
  // generate a random id
  // const id = documentModelUtils.hashKey();

  return (
    <>
      <h1 className="atlas-header">Exploratory Document</h1>
      <div className="atlas-grid">
        <div className="atlas-cell-docNo">
          <SetDocNumberForm
            defaultValue={{ docNo: props.document.state.global.docNo || "" }}
            dispatch={(input: SetDocNumberInput) => {
              props.dispatch(actions.setDocNumber(input));
            }}
          />
        </div>
        <div className="atlas-cell-name">
          <SetExploratoryNameForm
            defaultValue={{ name: props.document.state.global.name || "" }}
            dispatch={(input: SetExploratoryNameInput) => {
              props.dispatch(actions.setExploratoryName(input));
            }}
          />
        </div>
        <div className="atlas-cell-masterStatus">
          <SetMasterStatusForm
            defaultValue={{
              masterStatus:
                props.document.state.global.masterStatus || "PLACEHOLDER",
            }}
            dispatch={(input: SetMasterStatusInput) => {
              props.dispatch(actions.setMasterStatus(input));
            }}
          />
        </div>
        <div className="atlas-cell-content">
          <SetContentForm
            defaultValue={{
              content: props.document.state.global.content || "",
            }}
            dispatch={(input: SetContentInput) => {
              props.dispatch(actions.setContent(input));
            }}
          />
        </div>
        <div className="atlas-cell-tags">
          <SetTagsForm
            defaultValue={{
              newTags: props.document.state.global.globalTags,
            }}
            dispatch={(input: AddTagsInput) => {
              props.dispatch(actions.addTags(input));
            }}
          />
        </div>
      </div>
    </>
  );
}
