self.addEventListener('install', (e) => {
    console.log('تم تثبيت التطبيق بنجاح');
});

self.addEventListener('fetch', (e) => {
    // هذا الكود ضروري جداً لجعل المتصفح يظهر زر التثبيت
});