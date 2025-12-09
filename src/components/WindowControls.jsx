// import useWindowStore from "#store/window";

// const WindowControls = ({ target }) => {
//   const { closeWindow, toggleMaximize } = useWindowStore((state) => ({
//     closeWindow: state.closeWindow,
//     toggleMaximize: state.toggleMaximize,
//   }));

//   return (
//     <div id="window-controls">
//       <div className="close" onClick={() => closeWindow(target)} />
//       <div className="minimize" />
//       <div className="maximize" onClick={() => toggleMaximize(target)} />
//     </div>
//   );
// };

// export default WindowControls;
import useWindowStore from "#store/window";

const WindowControls = ({ target }) => {
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const toggleMaximize = useWindowStore((state) => state.toggleMaximize);

  if (!closeWindow || !toggleMaximize) {
    // optional: guard if store shape changes
    return null;
  }

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" onClick={() => toggleMaximize(target)} />
    </div>
  );
};

export default WindowControls;
import { useRef, useLayoutEffect } from "react";
