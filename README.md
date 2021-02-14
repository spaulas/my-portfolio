<span align="left" >Under Development</span>

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="logo" src="https://i.ibb.co/N64zX9H/logo.png" width="240" />
  </a>
</p>
<h1 align="center">
  My Portfolio
</h1>
<h3 align="center">
  Paula Santos | Frontend Developer
</h3>

<h3 align="left">Description</h3>

<p>Portfolio implemented by scratch with ReactJS using Gatsby.</p>
<p>With this project, I aim to improve my current portfolio, showing new skills that I acquired over my still not very long career.</p>
<p>Therefore, I prepared a mockup using Figma, and the first step is to implement all the basic components and write their documentation using Storybook.</p>
<p>All development steps are documented in the <a href="https://github.com/spaulas/my-portfolio/projects/1">Project</a> section of this repository.</p>


<h3 align="left">Mock up: Figma</h3>

<p><a href="https://www.figma.com/file/zK7DHrMuQ77U54ercJAdHf/MyPortfolio?node-id=49%3A0
">Project Link</a></p>

<p>The main pages are:</p>
<ul>
  <li>home page, with: 
    <ul>
      <li>links to my <a href="https://www.linkedin.com/in/spaulas/">Linkedin</a> page and Github account;</li>
      <li>options to change the language and light mode;</li>
      <li>a link for the about page;</li>
      <li>a slideshow with my projects (each having an animation when hovered);</li>
      <li>a parallax with the extensions of the most used file types</li>
    </ul>
  </li>
  <li>about page, with:
    <ul>
      <li>an updated picture;</li>
      <li>a small description;</li>
      <li>the tech stack I work with;</li>
      <li>a timeline;</li>
    </ul>
  </li>
  <li>project pages, with:
    <ul>
      <li>a banner with the main picture of the project, which shrinks;</li>
      <li>a small description of the project;</li>
      <li>the tech stack used;</li>
      <li>links for the deploy site and the github repository;</li>
      <li>images of the project that slide in opposite directions with the page scroll;</li>
    </ul>
  </li>
</ul>


<h3 align="left">Set up</h3>

```
npm install
gatsby develop
```

<h3 align="left">Storybook</h3>

<p>Firstly, change the environment variable "IMAGES_SOURCE" to "STORYBOOK".</p>

```
IMAGES_SOURCE="STORYBOOK"
```

<p>Then, run:</p>

```
npm run storybook
```


