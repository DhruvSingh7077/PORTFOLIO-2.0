import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components/WindowControls";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return <></>;
};
