import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Logo = ({ isMobile }) => {
    //const computer = useGLTF("./desktop_pc/scene.gltf");
    const computer = useGLTF("./mitos_model/mitos.glb");

    return (
        <mesh>
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.65 : 0.85}
                position={isMobile ? [0, -1.8, 0] : [0, -2.25, 0]}
                rotation={[0, -2.5, 0.1]}
            />
        </mesh>
    );
};

const LogoCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="cursor-grab active:cursor-grabbing"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Logo isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default LogoCanvas;
