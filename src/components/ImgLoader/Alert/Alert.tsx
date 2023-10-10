import { Alerts } from "@aranda/aranda.ui";
import { useEffect, useState } from "react";
import {ContainerAlertInfo, AlertInfoSucces, AlertInfoError} from "./Alert.style"

export default function AlertImg({ img, succes, setSucces }: any) {
  const [AlerImgData, setAlerImgData] = useState(true);
  const [err, setErr] = useState(false);
  


useEffect(()=>{
    if(img){
        if (img.size > 300000) {
          setErr(true)
        }
      }
},[img])



 const handleCloseErr = () => {

    setErr(false)

 }

 const handleCloseSucces = () => {
    setSucces(false)
 }

 if(err){
    setTimeout(()=>{
        setErr(false)
    }, 2000)    
 }

 if(succes){
    setTimeout(()=>{
        setSucces(false)
    }, 2000)
 }

//   const handleAlert = (img: any) => {
//     const closeAlert = () => {
//       setAlerImgData(!AlerImgData);
//     };

//     console.log(img);
//     if (img) {
//       if (img.size > 300000) {
//         return (
//           <>
//             {AlerImgData && (
//               <Alerts
//                 onClick={closeAlert}
//                 text="La foto debe pesar maximo 300 KB"
//                 type="error"
//               />
//             )}
//           </>
//         );
//       } else {
//         return (
//           <>
//             {AlerImgData && (
//               <Alerts
//                 onClick={closeAlert}
//                 text="La foto se agrego satisfactoriamente"
//                 type="success"
//               />
//             )}
//           </>
//         );
//       }
//     }
//   };

  return (
    <>
      {/* <div>{handleAlert(img)}</div> */}
      <ContainerAlertInfo>
        <AlertInfoSucces succes={succes}>
          <Alerts text="La foto se agrego satisfactoriamente" type="success" onClick={handleCloseSucces}/>
        </AlertInfoSucces>

        <AlertInfoError err={err} >
          <Alerts text="La foto debe pesar maximo 300 KB" type="error" onClick={handleCloseErr}/>
        </AlertInfoError>
      </ContainerAlertInfo>
    </>
  );
}
