import MarkdownEditor from "../../components/MarkdownEditor";
import { NextPageWithLayout } from "../_app";

const Edit:NextPageWithLayout = () => {
  return <MarkdownEditor id="edit-value" />;
}

Edit.getLayout = (page) => page;

export default Edit;

