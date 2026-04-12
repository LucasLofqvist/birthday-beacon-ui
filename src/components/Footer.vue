<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <p class="website">Birthday Beacon</p>
      <p class="copyright">© {{ new Date().getFullYear() }}</p>
    </div>

    <nav class="footer-links">
      <a href="N/A" class="footer-link">About</a>
      <a href="N/A" class="footer-link">Contact</a>
      <a href="N/A" class="footer-link">Terms of Service</a>
      <a href="N/A" class="footer-link">Privacy Policy</a>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 2px solid darkgray;
  border-radius: 4px;

  padding: 12px 16px;
  font-size: 12px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.website {
  font-weight: bold;
}

.footer-links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.footer-link {
  text-decoration: none;
  color: black;
  transition: opacity 0.15s ease;
}

.footer-link:hover {
  opacity: 0.6;
}
</style>
