import { useRef } from "react";
import { AsciiRenderer, useFBO } from "@react-three/drei";
import { useData } from "./DataContext";

export default function Effects() {
    const { dataAv, setData } = useData();

    const backGround = "rgb(120, 160, ${data})";
    const foreGround = "rgb(0, 0, 0)";

    return (
        <>
            {/* Use the bgColorRef.current to get the updated background color */}
            <AsciiRenderer
                bgColor={backGround}
                fgColor={foreGround}
                characters={".,*~!#`_=+/†º•ª§∞πøˆ¨¥†®°´}{"}
            />
        </>
    );
}
