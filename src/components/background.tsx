import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export default function Background() {
    return (
        <Canvas
            camera={{ position: [0, 0, 1] }}
            style={{ position: "absolute", zIndex: -1, top: 0, left: 0 }}
        >
            <Stars />
        </Canvas>
    );
}

const Stars = (props: any) => {
    const ref: any = React.useRef();
    const [sphere] = React.useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.5 })
    );
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled={false}
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#ffa0e0"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};
