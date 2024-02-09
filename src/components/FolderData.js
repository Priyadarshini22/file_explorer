import { useState } from "react"

export const FolderData = ({explorerData}) => {


        const [expand,setExpand]=useState(false)
        const [show,setShow] = useState({
            visible:false,
            isFolder: false
        })
        const handleNewFolder = (e,isFolder) => {
            setExpand(true)
            setShow({
                visible:true,
                isFolder:isFolder
            })
            
        }
         if(explorerData.isFolder)
         {
         return  <div style={{marginTop:5}}> 
            <div className="folder">
                <span onClick={()=>setExpand(!expand)}>📁 {explorerData.name}</span>
                <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
                <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
            </div>
            
            <div style={{display:expand ? "block" : "none",paddingLeft:25}}>

            {
                show.visible && (
                <div>
                    {show.isFolder ? <span>📁</span> : <span>🗄</span>}
                    <input type='text' className="input" autoFocus onBlur={()=>setShow({...show,visible:false})}/>
                </div>) 
            }
            {explorerData.items.map((item) => {
                return <FolderData explorerData={item}  key={item.id}/>
            })}
            </div>
        </div>
         }
         else
         {
            return <div><span className="folder">🗄 {explorerData.name}</span></div>
         }
}

export default FolderData;