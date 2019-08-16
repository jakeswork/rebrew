import { useEffect, RefObject } from "react";

function ClickOutsideElementHandler(ref: RefObject<HTMLElement>, cb: Function) {
  function handle(event: Event) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      return cb();
    }
  }

  return useEffect(() => {
    document.addEventListener("mousedown", handle);

    return () => document.removeEventListener("mousedown", handle);
  });
}

export default ClickOutsideElementHandler;
