import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLocation } from 'react-router-dom';

const AREquipment = () => {
  const videoRef = useRef(null);
  const rendererRef = useRef(null);
  const location = useLocation();
  const { selectedModel } = location.state || {};
  const [isCameraActive, setIsCameraActive] = useState(true);

  const modelData = {
    'Organic Tomato Seeds': {
      model: '/models/tomato_plant.glb',
      textures: [
        '/textures/mask-SF.png',
        '/textures/tomato albedo2.png',
        '/textures/tomato albedo2_NRM.png',
        '/textures/tomato_crazy1_DISP.png',
        '/textures/tomato_crazy1_OCC.png',
        '/textures/tomato_crazy1_SPEC.png',
      ],
    },
  };

  const renderModel = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 800 / 600, 0.1, 1000);
    camera.position.set(0, 1.2, 2.8); // Pull back and raise camera

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(800, 600);
    rendererRef.current.innerHTML = '';
    rendererRef.current.appendChild(renderer.domElement);

    // Camera background
    const videoTexture = new THREE.VideoTexture(videoRef.current);
    scene.background = videoTexture;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 3, 4);
    scene.add(ambientLight, directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    const modelInfo = modelData[selectedModel];
    const loader = new GLTFLoader();

    loader.load(
      modelInfo.model,
      (gltf) => {
        const model = gltf.scene;

        // Auto adjust position to sit on ground
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);

        // Center the model and drop it to ground level
        model.position.y = model.position.y - center.y - size.y / 2 + 0.2; // Fine-tune with +0.2

        model.scale.set(1.2, 1.2, 1.2);
        scene.add(model);

        // Load textures
        const textureLoader = new THREE.TextureLoader();
        modelInfo.textures.forEach((path) => {
          textureLoader.load(
            path,
            (texture) => {
              model.traverse((child) => {
                if (child.isMesh && !child.material.map) {
                  child.material.map = texture;
                  child.material.needsUpdate = true;
                }
              });
            },
            undefined,
            (err) => console.error(`Error loading texture ${path}`, err)
          );
        });

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (err) => console.error('Error loading model:', err)
    );
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        renderModel();
      } catch (err) {
        console.error('Camera access error:', err);
        alert('Camera permission is required for AR view.');
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [selectedModel]);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <h2 style={{ marginBottom: '10px' }}>Visualize AR Equipment - {selectedModel}</h2>
      {isCameraActive && (
        <div style={{ width: '800px', height: '600px', position: 'relative' }}>
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '800px',
              height: '600px',
              objectFit: 'cover',
              zIndex: -1, // hide behind canvas
            }}
          />
          <div
            ref={rendererRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '800px',
              height: '600px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AREquipment;
