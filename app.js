const nav = document.getElementById("nav");

for (const link of nav.getElementsByTagName("a")) {
  link.onmousemove = (e) => {
    const rect = link.getBoundingClientRect(),
      img = link.querySelector("img"),
      maxX = window.innerWidth - img.width,
      maxY = window.innerHeight - img.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.left = `${Math.min(maxX, Math.max(3, x))}px`;
    img.style.top = `${Math.min(maxY, Math.max(0, y))}px`;
  };
}

window.onmousemove = (e) => {
  const percent = e.clientY / window.innerHeight,
    y = percent * nav.offsetHeight * -1;

  nav.style.transform = `translateY(${y}px)`;
};
