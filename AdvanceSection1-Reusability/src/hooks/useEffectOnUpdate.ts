import {
  useEffect,
  useRef,
  type EffectCallback,
  type DependencyList,
} from "react";

export default function useEffectOnUpdate(
  effectFunction: EffectCallback,
  deps: DependencyList
): void {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectFunction();
    }
  }, deps);
}
