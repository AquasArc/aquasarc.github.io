function Footer() {
    return (
      <footer className="footer p-4 bg-neutral text-neutral-content flex justify-center items-center">
        <div className="text-center">
          <p>© {new Date().getFullYear()} Anton Lim. All rights reserved.</p>
          <p className="text-sm">Built with React, TailwindCSS, and DaisyUI</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  