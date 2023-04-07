import React from 'react'

const AnotherNav = () => {
  return (
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <div
        class="container-fluid d-flex align-items-center justify-content-between"
      >
        <a
          href="in"
          class="logo d-flex align-items-center me-auto me-lg-0"
        >
          
          <img src="assets/img/logo.png" alt=""/>
          <h1>HeroBiz<span>.</span></h1>
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
                <a class="nav-link scrollto" href="index.html#services"
                  >Home</a
                >
              </li>
            

            <li>
              <a class="nav-link scrollto" href="index.html#about">About</a>
            </li>
            
            <li>
              <a class="nav-link scrollto" href="index.html#portfolio"
                >Portfolio</a
              >
            </li>
            <li class="dropdown">
                <a href="#c"
                  ><span>Home</span>
                  <i class="bi bi-chevron-down dropdown-indicator"></i
                ></a>
                <ul>
                  <li>
                    <a href="index.html" class="active">Home 1 - index.html</a>
                  </li>
                  <li><a href="a">Home 2 - index-2.html</a></li>
                  <li><a href="index-3.html">Home 3 - index-3.html</a></li>
                  <li><a href="index-4.html">Home 4 - index-4.html</a></li>
                </ul>
              </li>
            <li>
              <a class="nav-link scrollto" href="index.html#team">Team</a>
            </li>
            <li><a href="blog.html">Blog</a></li>
            
            <li>
              <a class="nav-link scrollto" href="contact">Contact</a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>

      </div>
    </header>
  )
}

export default AnotherNav