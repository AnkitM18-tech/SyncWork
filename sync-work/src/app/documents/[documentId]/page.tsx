import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPage {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPage) => {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
