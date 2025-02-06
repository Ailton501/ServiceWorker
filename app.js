// Verificar si el navegador soporta service worker
if ('serviceWorker' in navigator) {
    // Registro de Service Worker
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('Service Worker registrado', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker', error);
        });
}
