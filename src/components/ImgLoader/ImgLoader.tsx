import { Icon } from "@aranda/aranda.icons";
import { ContentImgLoader } from "./ImgLoader.style";
import HeaderImgLoader from "./Header/HeaderImgLoader";
import BoddyImgLoader from "./Boddy/BoddyImgLoader";
import { DataImg } from "./Boddy/type";
import { useState } from "react";

export default function ImgLoader() {
  const [img, setImg] = useState<DataImg | null>(null);
  const [succes, setSucces] = useState(false);
  const [imgLoaderView, setImgLoaderView] = useState(true);

  return (
    <>
      {imgLoaderView && (
        <ContentImgLoader>
          <HeaderImgLoader
            succes={succes}
            setSucces={setSucces}
            imgLoaderView={imgLoaderView}
            setImgLoaderView={setImgLoaderView}
            img={img}
            setImg={setImg}
          />
          <BoddyImgLoader
            succes={succes}
            setSucces={setSucces}
            img={img}
            setImg={setImg}
          />
        </ContentImgLoader>
      )}
    </>
  );
}
