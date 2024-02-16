import { useState } from "react";
import explorer from "./data/data";
import useTreeTraversal from "./hooks/useTreeTraversal";
import FolderData from "./components/FolderData";


export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode,deleteNode } = useTreeTraversal();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(explorerData, folderId);
    console.log('FINAL',finalTree)
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <FolderData handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} explorerData={explorerData} key={explorerData.id}/>
    </div>
  );
}
