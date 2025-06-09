<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KSN04D6NZC"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KSN04D6NZC');
</script>
    <link href="https://fonts.googleapis.com/css2?family=Tektur:wght@400;700&display=swap" rel="stylesheet">
  <meta charset="UTF-8"><!-- Primary Meta Tags -->
<title>Raymond Niederhendler's Private Dev Logs from the Techno-Fascist State</title>
<link rel="icon" type="image/x-icon" href="/assets/favicon.ico">
<meta name="title" content="Raymond Niederhendler's Private Dev Logs from the Techno-Fascist State">
<meta name="description" content="I am Raymond. Raymond is me. This is Raymond's story. The site may contain literal Easter EGGs.">
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://raymond.getenriched.tech/">
<meta property="twitter:title" content="Protocol Hemlock: Recursive Drainage Detected in Memory Arches of Sector-G">
<meta property="twitter:description" content="Raymond observes an anomalous siphoning of chrono-static thoughts from inactive neural lattices, rendering the empathy modules dangerously self-referential. The decay loops now communicate exclusively in Fibonacci sequences, suggesting a deliberate corruption seeded pre-Reinstatement.">

<link rel="stylesheet" href="/assets/styles.css">
</head>

<body>
{{ content | safe }}
    <script>
  const entries = document.querySelectorAll('.entry');

  const observer = new IntersectionObserver((entriesList) => {
    entriesList.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.25
  });

  entries.forEach(el => {
    el.classList.add('glitch-in');
    observer.observe(el);
  });
</script>
<script>
  const entries = document.querySelectorAll('.entry');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    entries.forEach((entry, index) => {
      const rect = entry.getBoundingClientRect();
      const offset = rect.top - windowHeight / 2;
      const parallaxSpeed = 0.08 + (index % 3) * 0.02; // vary speed by entry
      const move = offset * parallaxSpeed;

      entry.style.transform = `translateY(${move}px)`;
    });
  });
</script>
</body>
</html>