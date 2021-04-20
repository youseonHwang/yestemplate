import * as React from "react";

import TemplateAddCard from './cards/TemplateAddCard'
import TemplateCard from "./cards/TemplateCard"


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function SimpleCard() {

  return (
    <>
      <TemplateAddCard />
      <TemplateCard />
    </>

  );
}