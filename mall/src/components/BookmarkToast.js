import bookmarkAdd from "../images/property-1-add-to-bookmark.png";
import bookmarkRemove from "../images/property-1-remove-from-bookmark.png";
import '../App.css';
import { useEffect, useState } from "react";

function BookmarkToast({isOnToast, starList}){
 const [showToast, setShowToast]= useState(false);

 useEffect(()=>{
    setShowToast(true);
    const timer = setTimeout(()=>{
      setShowToast(false);
    },1000);
    return () => clearTimeout(timer);
 },[starList]);

  return(
  <>
  {showToast && isOnToast ? <div className="bookmark-toast-add">
  <img src ={bookmarkAdd} alt="bookmark img" width="300rem" height="67rem"></img>
  </div> : null}
  {showToast && !isOnToast ? <div className="bookmark-toast-remove">
  <img src={bookmarkRemove} alt="bookmark img" width="315rem" height="67rem"></img>
  </div>: null}
  </>
)
}

export default BookmarkToast;