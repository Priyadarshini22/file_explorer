import { useState } from "react"
import useTreeTraversal from "../hooks/useTreeTraversal";

export const FolderData = ({ handleInsertNode = () => {},handleDeleteNode = () => {},explorerData }) => {

        console.log('--------------------------------------------------------------',explorerData)
        const [expand,setExpand]=useState(false)
        const [show,setShow] = useState({
            visible:false,
            isFolder: false
        })
        const {insertNode ,deleteNode}= useTreeTraversal();
        const [newValue,setNewValue]=useState("")
        const handleNewFolder = (e,isFolder) => {
            e.stopPropagation();
            setExpand(true)
            setShow({
                visible:true,
                isFolder:isFolder
            })
            
        }

        const handleNewItem = (id,item,isFolder) => {
            handleInsertNode(id,item,isFolder)
            setShow({
                ...show,
                 visible:false,
             
             })
             setNewValue("")

        }
        const onAddItem = (e) => {
            if(e.keyCode === 13)
                handleNewItem(explorerData.id,e.target.value,show.isFolder)
                
                
        }

        const onDeleteNode = (e) => {
            handleDeleteNode(explorerData.id)
        }
         if(explorerData.isFolder)
         {
         return  <div style={{marginTop:5}}> 
            <div className="folder">
                <span onClick={()=>setExpand(!expand)}>📁 {explorerData.name}</span>
                <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
                <button onClick={(e)=>onDeleteNode(e)}>Delete -</button>
                </div>
            
            <div style={{display:expand ? "block" : "none",paddingLeft:25}}>

            {
                show.visible && (
                <div>
                    {show.isFolder ? <span>📁</span> : <span>📄</span>}
                    <input type='text' className="input" autoFocus onBlur={()=>setShow({...show,visible:false})} onKeyDown={onAddItem} value={newValue} onChange={(e)=>setNewValue(e.target.value)}/>
                    {/* <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={onAddItem}
              onBlur={() => setShow({ ...show, visible: false })}
              /> */}
                </div>) 
            }
            {explorerData.items.map((item) => {
                return <FolderData handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} explorerData={item}  key={item.id}/>
            })}
            </div>
        </div>
         }
         else
         {
            return <div><span className="folder">📄 {explorerData.name}</span></div>
         }
}

export default FolderData;
