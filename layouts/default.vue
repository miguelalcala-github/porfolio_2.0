<template>
  <div class="container">
    <Sidebar />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
h1 {
  color: teal;
  margin-bottom: 10px;
}
.nav p {
  max-width: 500px;
  text-align: justify;
  margin: auto;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  /* justify-content: stretch; */
  align-items: stretch;
  text-align: center;
}
.thumbnail {
    display: inline-block;
    width: 100%;
    margin-bottom: 1.5rem;
    box-shadow: 0px 0px 10px 5px white;
}
.nav {
  width: 100%;
  border-bottom: lightseagreen 1px solid;
  padding-bottom: 10px;
  margin-bottom: 10px;
  
}
.container-index {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
  margin: auto;
}
.container-index .nav {
  margin-bottom: 20px;
}

.info-container {
    background: honeydew;
    width: 70%;
}

.sidebar-list {
    width: 30%;
    max-width: 200px;
    margin-left: 20px;
    background: honeydew;
    display: flex;
    flex-direction: column;
    padding: 20px 10px
}
h3 {
    margin-bottom: 10px;
}
ul {
    text-align: left;
    margin-bottom: 10px;
}
.nuxt-content p {
    text-align: justify;
}
.button--white {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  padding: 10px 30px;
}

.button--white:hover {
  color: teal;
  background-color: white;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  margin-bottom: 10px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
