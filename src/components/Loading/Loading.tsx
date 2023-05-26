import { RotatingLines } from "react-loader-spinner";

export default function Loading({ size }: { size?: string | undefined}) {
  return <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width={size || "60"}
    visible={true}
  />
}