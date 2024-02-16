const useTreeTraversal = () => {

    function insertNode(tree,folderId,item,isFolder)  {
                 if(tree.id === folderId)
                 {
                    tree.items.unshift(
                        {
                            id:new Date().getTime(),
                            name:item,
                            isFolder:isFolder,
                            items:[]
                        }
                    )
                    return tree;
                 }

                 let updatedNode=[]
                 updatedNode=tree.items?.map((treeItem,index)  => {
                    
                      return  insertNode(treeItem,folderId,item,isFolder)
                    
                })
                return {...tree,items:updatedNode};

    }

    function deleteNode(tree,folderId)  {
  
            tree.items?.map((item,index)  => {
                      if(item.id!==folderId)
                           return deleteNode(item,folderId) 
                      else
                           tree.items.splice(index,1)
                           return tree
                })
    console.log(tree)
     return tree

}


    return { insertNode,deleteNode}

}

export default useTreeTraversal;