document.addEventListener('DOMContentLoaded', () => {
    const cursorTrail = document.querySelector('.cursor-trail');
    const tail = document.querySelector('.tail');
    
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        cursorTrail.style.left = `${x}px`;
        cursorTrail.style.top = `${y}px`;

        tail.style.left = `${x}px`;
        tail.style.top = `${y}px`;
    });
});
