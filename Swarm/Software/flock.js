// Create a renderer.
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas') });

// Create a scene.
const scene = new THREE.Scene();

// Create a camera.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

// Create a cube.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene.
scene.add(cube);

// Render the scene.
renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
  
    renderer.render(scene, camera);
  }
  
  animate();
  