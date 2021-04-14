import {useState, useEffect} from "react";
function useMenuSelector(Items) {

    const [mainItem, setMainItem] = useState(0);

    const handleItemChangeLeft = () => {
      if (mainItem === 0) return
      setMainItem(prevItem => prevItem - 1)
    }
    const handleItemChangeRight = () => {
      if (mainItem === Items.length - 1) return
      setMainItem(prevItem => prevItem + 1)
    }
    // useEffect(() => {
    //     console.log(mainItem)
    // }, [mainItem])
    
    return [handleItemChangeLeft, handleItemChangeRight, mainItem]
}
export default useMenuSelector;