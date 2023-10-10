import { Icon } from "@aranda/aranda.icons";
import {ContentHeader, ContentHeaderInfo, ContentHeaderActions} from "./HeaderImgLoader.style"


export default function HeaderImgLoader({ succes, setSucces, setImgLoaderView, imgLoaderView, img, steImg}: any) {


  const handleSucces = () =>{

    if(img){
      if(img.size > 300000 ){
        console.log("no hay imagen 2")
      }else{
        setSucces(true)
      }
    }
    if(img === null){
      console.log("no hay imagen")
    }
    
  }

  const handleCloseImgLoader = () =>{
    setImgLoaderView(false)
  
  }

  return (
    <>
      <ContentHeader>
        <ContentHeaderInfo>
          <h2>Cambiar Imagen</h2>
          <p>Suba una imagen que va a usar en toda la aplicación.</p>
        </ContentHeaderInfo>
        <ContentHeaderActions>
          <div className="icon save" onClick={handleSucces}><Icon icon="ic_approval_message" color="#8395A7" size="14px"></Icon> </div>
          <div className="icon close" onClick={handleCloseImgLoader}><Icon icon="ic_close" color="#8395A7" size="14px"></Icon></div>
        </ContentHeaderActions>
      </ContentHeader>
    </>
  );
}
