// Create a renderer.
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a scene.
const scene = new THREE.Scene();

// Create a camera.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 0, 5);

// Create a cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);

// Create a light.
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Add the cube to the scene.
scene.add(cube);

// Render the scene.
renderer.render(scene, camera);

function animate() {

    requestAnimationFrame(animate);
    cube.rotation.y += 0.1;
    cube.rotation.x += 0.1;
    renderer.render(scene, camera);
}

animate();
