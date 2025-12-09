import React from "react";
import { useRef } from "react";
import useWindowStore from "#store/window";
import { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();

    // const { isOpen, zIndex, isMaximized } = windows[windowKey];
    const win = windows[windowKey];
    if (!win) return null; // or some fallback UI

    const { isOpen, zIndex, isMaximized } = win;
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMaximized) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen, isMaximized]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || isMaximized) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [isMaximized]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    const style = isMaximized
      ? {
          zIndex,
          position: "fixed",
          inset: 0, // full screen
          width: "100vw",
          height: "100vh",
        }
      : {
          zIndex,
          position: "absolute",
        };

    return (
      <section
        id={windowKey}
        ref={ref}
        // style={{ zIndex }}
        style={style}
        className={isMaximized ? "" : "absolute"}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
