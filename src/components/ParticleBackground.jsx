import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import ParticlesConfig from "./config/particles-config";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await container;
    }, []);

    return (
        <>
            <Particles
                options={ParticlesConfig}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </>
    );
};

export default ParticleBackground