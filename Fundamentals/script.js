//1) Basic Scene creating a Icosahedron

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// const w = window.innerWidth;
// const h = window.innerHeight;
// const fov = 75;
// const aspect = w / h;
// const near = 0.5;
// const far = 10;

// const scene = new THREE.Scene();


// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.IcosahedronGeometry(1.0, 2);
// const material = new THREE.MeshStandardMaterial({ color: "lightblue" , flatShading: true});
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const wireframeMat = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true});
// const wireMesh = new THREE.Mesh(geometry, wireframeMat);  
// wireMesh.scale.setScalar(1.001);  //scale.setScalar() method sets the scale of the object to a uniform value in all directions.
// mesh.add(wireMesh);  //add wireframe to mesh

// //lighting
// const hemiSphereLight = new THREE.HemisphereLight('lightblue', 'orange');
// scene.add(hemiSphereLight);


// //Orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;  // an animation loop is required when either damping or auto-rotation are enabled
// controls.dampingFactor = 0.025;

// function animate(t = 0) {
//   requestAnimationFrame(animate);   //requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
// //   mesh.rotation.x += 0.01;
//   mesh.rotation.y = t * 0.0001;
//   renderer.render(scene, camera);
//   controls.update();
// }

// animate();



//Creating a basic scene with a Globe.

// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const w = window.innerWidth;
// const h = window.innerHeight;
// const fov = 80;
// const aspect = w / h;
// const near = 0.5;
// const far = 1000;

// const scene = new THREE.Scene();


// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const earthGroup = new THREE.Group();
// scene.add(earthGroup);

// const loader = new THREE.TextureLoader();
// const geometry = new THREE.SphereGeometry(0.8, 32, 32);
// const material = new THREE.MeshStandardMaterial(
//     {
//         map: loader.load('./earthmap1k.jpg'),
//     });
// const earthMesh = new THREE.Mesh(geometry, material);
// earthGroup.add(earthMesh);


// const cloudMaterial = new THREE.MeshStandardMaterial({
//     map: loader.load('./earthcloudmap.jpg'),
//     // transparent: true,
//     // opacity: 0.4,
//     blending: THREE.AdditiveBlending,
// });
// const cloudMesh = new THREE.Mesh(geometry, cloudMaterial);
// cloudMesh.scale.setScalar(1.005);
// earthGroup.add(cloudMesh);



//lighting
// const hemiSphereLight = new THREE.HemisphereLight('white', 'white', 1);
// scene.add(hemiSphereLight);

// const sunLight = new THREE.DirectionalLight('lightyellow', 0.92);
// sunLight.position.set(-2, 0.5, 1);
// scene.add(sunLight);

// const ambientLight = new THREE.AmbientLight('white', 0.1);
// scene.add(ambientLight);

// //Orbitcontrols
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;  // an animation loop is required when either damping or auto-rotation are enabled
// controls.dampingFactor = 0.025;


// const loaders = new THREE.TextureLoader();
// const geo = new THREE.SphereGeometry(90, 64, 64);
// const mat = new THREE.MeshBasicMaterial({
//     map: loaders.load('./star1.jpg'),
//     side: THREE.BackSide
// });
// const mesh = new THREE.Mesh(geo, mat);
// scene.add(mesh);
// createStarField(scene, 1000, 700);

// function createStarField(scene, numStars, radius) {
//     const geometry = new THREE.BufferGeometry(); // Geometry to hold stars' positions.
//     const positions = []; // Array to store the stars' positions.

//     // Generate random positions for stars within the sphere radius.
//     for (let i = 0; i < numStars; i++) {
//         const x = THREE.MathUtils.randFloatSpread(radius * 2); // Spread positions
//         const y = THREE.MathUtils.randFloatSpread(radius * 2);
//         const z = THREE.MathUtils.randFloatSpread(radius * 2);

//         // Optional: Keep stars confined to a spherical boundary
//         if (Math.sqrt(x * x + y * y + z * z) < radius) {
//             positions.push(x, y, z);
//         }
//     }

//     geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3)
//     );

//     // Create the material for the stars
//     const material = new THREE.PointsMaterial({
//         color: 0xffffff,
//         size: 0.5, // Size of stars.
//         sizeAttenuation: true, // Stars shrink with distance.
//     });

//     const starField = new THREE.Points(geometry, material);
//     scene.add(starField); // Add to the scene
//     return starField; // Return for potential updates later
// }


// function handleWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }


// function animate(t = 0) {
//     requestAnimationFrame(animate);   //requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
//     //   mesh.rotation.x += 0.01;
//     earthMesh.rotation.y = t * 0.0001;
//     cloudMesh.rotation.y = t * 0.0001;
//     renderer.render(scene, camera);
//     //   controls.update();
//     handleWindowResize();
// }

// animate();


//Create a plane ,and on the plane a sphere or a cube

import * as THREE from 'three';
import * as dat from 'https://cdn.jsdelivr.net/npm/dat.gui@0.7.9/build/dat.gui.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const w = window.innerWidth;
const h = window.innerHeight;
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;

const scene = new THREE.Scene();
//Fog
// scene.fog = new THREE.Fog('white', 1, 15); ///Fog(color, near, far)
scene.fog = new THREE.FogExp2('white', 0.1);  //FogExp2(color, density)

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;   //shadowMap
document.body.appendChild(renderer.domElement);

//Change the background color
renderer.setClearColor('crimson');  //setClearColor(color, alpha)  //setClearColor() method sets the color and opacity of the background.

//Adding texture to the background
const loader = new THREE.TextureLoader();
// scene.background = loader.load('./star1.jpg');
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     './star1.jpg',
//     './star1.jpg',
//     './star1.jpg',
//     './star1.jpg',
//     './star1.jpg',
//     './star1.jpg',
// ]);

//Orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.025;


const gui = new dat.GUI();

const options = {
    color: "#ffea00",
    wireframe: false,
    speed: 0.01,
    angle: 1,
    penumbra: 0,
    intensity: 10
};

gui.addColor(options, 'color').onChange((e) => {  //onChange() method is called when the value of the object changes.
    sphereMesh.material.color.set(e);
});

gui.add(options, 'wireframe').onChange((e) => {
    sphereMesh.material.wireframe = e;
});

gui.add(options, 'angle', 0, 1)
gui.add(options, 'penumbra', 0, 1)
gui.add(options, 'intensity', 0, 100);

//Sphere Geometry
const geometry = new THREE.SphereGeometry(0.3, 32, 32);
const material = new THREE.MeshStandardMaterial({ 
    color: "blue",
    // map: loader.load('./earthmap1k.jpg'), // map is use to add the texture to the mesh's geometry
    wireframe: false });

const sphereMesh = new THREE.Mesh(geometry, material);
sphereMesh.position.set(0, 0.6, 1);
//cast shadows
sphereMesh.castShadow = true;
scene.add(sphereMesh);


//Plane Geometry
const gridHelper = new THREE.GridHelper(3, 10);   //GridHelper(size, divisions, color1, color2)
scene.add(gridHelper);

const planeGeometry = new THREE.PlaneGeometry(3, 3);  //PlaneGeometry(width, height, widthSegments, heightSegments)
const planeMaterial = new THREE.MeshStandardMaterial(
    {
        color: "lightgreen",
        side: THREE.DoubleSide
    }
);
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotation.x = -0.5 * Math.PI;
//shadows
planeMesh.receiveShadow = true;
scene.add(planeMesh);


//light
//AmbinetLight
const ambientLight = new THREE.AmbientLight('white', 0.1);
scene.add(ambientLight);

//DirectionalLight
// const DirectionalLight = new THREE.DirectionalLight('white', 1);
// DirectionalLight.position.set(5, 2, 0 );
// DirectionalLight.castShadow = true;
// DirectionalLight.shadow.camera.bottom = 0;
// //cast shadow
// // const shadowCameraHelper = new THREE.CameraHelper(DirectionalLight.shadow.camera);
// // scene.add(shadowCameraHelper);

// scene.add(DirectionalLight);

// //directionalLightHelper
// const DLHelper = new THREE.DirectionalLightHelper(DirectionalLight, );
// scene.add(DLHelper);

//SpotLight
const spotLight = new THREE.SpotLight('white', 10);
spotLight.position.set(0, 2, 2);
spotLight.castShadow = true;

scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);


let step = 0;


function animate(t = 0) {
    requestAnimationFrame(animate);   //requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
    sphereMesh.rotation.y += 0.001;
    step += options.speed;
    sphereMesh.position.y = 1 * Math.abs(Math.sin(step));     //sinusoidal movement  
    spotLight.angle = options.angle;  //angle of light
    spotLight.penumbra = options.penumbra;  //penumbra of light
    spotLight.intensity = options.intensity;  //intensity of light
    spotLightHelper.update();
    renderer.render(scene, camera);
}

animate();