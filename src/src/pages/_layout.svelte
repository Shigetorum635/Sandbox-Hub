<!-- routify:options preload="proximity" -->
<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'My Routify app'
    metatags.description = 'Description coming soon...'
</script>

  <div class="page-wrapper with-navbar">
    <!-- Navbar (immediate child of the page wrapper) -->
    <nav class="navbar">
      <!-- Navbar content (with toggle sidebar button) -->

      <!-- Navbar brand -->
      <a href="/" class="navbar-brand">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuI0jiMIAK0sw9cfqqLoGujJVbLhcquNrSmw&usqp=CAU' alt="...">
        SandboxHub
      </a>
      <!-- Navbar text -->
      <span class="navbar-text text-monospace">v1.0</span> <!-- text-monospace = font-family shifted to monospace -->
      <!-- Navbar nav -->
      <ul class="navbar-nav d-none d-md-flex"> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
        <li class="nav-item active">
          <a href="#" class="nav-link">Popular Sandboxes</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Discord</a>
        </li>
      </ul>
      <!-- Navbar form (inline form) -->
      <span class="form-inline d-none d-md-flex ml-auto" action="..." method="..."> <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
            <button class="btn btn-primary" type="submit">Log in</button>

        <button class="btn btn-primary" type="submit">Sign up</button>
     </span>
      <!-- Navbar content (with the dropdown menu) -->
      <div class="navbar-content d-md-none ml-auto"> <!-- d-md-none = display: none on medium screens and up (width > 768px), ml-auto = margin-left: auto -->
        <div class="dropdown with-arrow">
          <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
            Menu
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> <!-- w-200 = width: 20rem (200px) -->
            <a href="#" class="dropdown-item">Docs</a>
            <a href="#" class="dropdown-item">Products</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-content">
          <button class="btn btn-primary btn-block" type="submit">Sign up</button>
        <button class="btn btn-primary btn-block" type="submit">Log In</button>

            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Content wrapper -->
    <div class="content-wrapper">
          <button class="btn btn-primary" type="button" onclick="halfmoon.toggleDarkMode()">Dark Mode!</button>

    <slot>

</slot>

    </div>
  </div>

